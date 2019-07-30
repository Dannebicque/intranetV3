<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/CelcatEventsRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 30/07/2019 08:41
 * @lastUpdate 30/07/2019 08:41
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\CelcatEvent;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use http\Exception\InvalidArgumentException;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method CelcatEvent|null find($id, $lockMode = null, $lockVersion = null)
 * @method CelcatEvent|null findOneBy(array $criteria, array $orderBy = null)
 * @method CelcatEvent[]    findAll()
 * @method CelcatEvent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CelcatEventsRepository extends ServiceEntityRepository
{
    protected $groupetp;
    protected $groupetd;
    protected $groupecm;

    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, CelcatEvent::class);
    }

    public function findEdtProf($getNumeroHarpege, int $semaine)
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaineFormation = :semaine')
            ->andWhere('p.codePersonnel = :idprof')
            ->setParameters(array('semaine' => $semaine, 'idprof' => $getNumeroHarpege))
            ->orderBy('p.jour, p.debut, p.codeGroupe')
            ->getQuery()
            ->getResult();
    }

    public function findEdtEtu(Etudiant $user, int $semaine)
    {
        if ($user->getSemestre() !== null) {
            $this->groupes($user);

            return $this->createQueryBuilder('p')
                ->where('p.semaineFormation = :semaine')
                ->andWhere('p.codeGroupe = :groupecm OR p.codeGroupe = :groupetd OR p.codeGroupe = :groupetp')
                ->setParameters(array(
                    'semaine'  => $semaine,
                    'groupecm' => $this->groupecm,
                    'groupetd' => $this->groupetd,
                    'groupetp' => $this->groupetp,
                ))
                ->orderBy('p.jour, p.debut')
                ->getQuery()
                ->getResult();
        }
        return null;
    }

    /**
     * @param $user
     */
    private function groupes(Etudiant $user): void
    {
        foreach ($user->getGroupes() as $groupe) {
            if ($groupe->getTypeGroupe() !== null) {
                if ($groupe->getTypeGroupe()->isTD()) {
                    $this->groupetd = $groupe->getCodeApogee();
                } else if ($groupe->getTypegroupe()->isTP()) {
                    $this->groupetp = $groupe->getCodeApogee();
                } else {
                    $this->groupecm = $groupe->getCodeApogee();

                }
            }
        }
    }

    public function deleteDepartement(
        int $codeCelcatDepartement,
        ?AnneeUniversitaire $anneeUniversitaire
    ) {

        if ($anneeUniversitaire === null) {
            throw new InvalidArgumentException('L\'année universitaire n\'est pas définie');
        }

        return $this->createQueryBuilder('c')
            ->delete(CelcatEvent::class, 'c')
            ->where('c.anneeUniversitaire = :annee')
            ->andWhere('c.departementId = :departement')
            ->setParameter('annee', $anneeUniversitaire->getAnnee())
            ->setParameter('departement', $codeCelcatDepartement)
            ->getQuery()
            ->getResult();
    }

    public function recupereEDTBornes(int $semaineReelle, Semestre $semestre, $jsem)
    {
        $creneaux = array(
            1  => array('8h00', '9h30'),
            4  => array('9h30', '11h00'),
            7  => array('11h00', '12h30'),
            10 => array('12h30', '14h00'),
            13 => array('14h00', '15h30'),
            16 => array('15h30', '17h00'),
            19 => array('17h00', '18h30'));

        $nbgroupetp = $semestre->getNbgroupeTpEdt();

        if ($nbgroupetp <= 2) {
            $typebloc = '-d';
        } else {
            $typebloc = '';
        }

        $query = $this->createQueryBuilder('p')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.codeModule = m.codeApogee')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->where('p.semaineFormation = :semaine')
            ->andWhere('p.jour = :jour ')
            ->andWhere('u.semestre = :semestre')
            ->setParameters(array(
                'semaine'  => $semaineReelle,
                'jour'     => $jsem + 1,
                'semestre' => $semestre->getId(),
            ))
            ->orderBy('p.codeGroupe, p.debut')
            ->getQuery()
            ->getResult();

        $planning = array();

        $j = 0;
        /** @var  $row CelcatEvent */
        foreach ($query as $row) {
            $casedebut = Constantes::TAB_HEURES_INDEX[$row->getDebut()->format('H:i:s')];
            $casefin = Constantes::TAB_HEURES_INDEX[$row->getFin()->format('H:i:s')];
            $duree = $casefin - $casedebut;
            $groupe = Constantes::TAB_GROUPES_INDEX[$row->getLibGroupe()]; //todo: pas idéal car dépend de MMI
            $type = $row->getType();
            $max = 20;
            if ($type === 'tp' || $type === 'TP') {
                $max = 6;
            }

            if ($row->getLibPersonnel() !== null) {
                $prof  = substr($row->getLibPersonnel(), 0, $max);
            } else {
                $prof = '';
            }

            $refmatiere = explode(' ',$row->getLibModule());


            if (array_key_exists($casedebut, $creneaux) && $duree % 3 === 0) {
                $planning[$casedebut][$groupe]['prof'] = $prof;
                $planning[$casedebut][$groupe]['module'] = $refmatiere[0];
                $planning[$casedebut][$groupe]['salle'] = substr($row->getLibSalle(), 0, $max);
                $planning[$casedebut][$groupe]['type'] = $type;
                $planning[$casedebut][$groupe]['typebloc'] = $typebloc;
                $planning[$casedebut][$groupe]['duree'] = $duree;
                $planning[$casedebut][$groupe]['idplanning'] = $row->getId();
                $planning[$casedebut][$groupe]['format'] = 'ok';

                if (strtoupper($type) === 'TD') {
                    $planning[$casedebut][$groupe + 1]['module'] = 'xt';
                }

                if (strtoupper($type) === 'CM') {
                    for ($gr = 1; $gr < $nbgroupetp; $gr++) {
                        $planning[$casedebut][$groupe + $gr]['module'] = 'xt';
                    }
                }

                $planning[$casedebut][$groupe]['module'] = $refmatiere[0]; //création du premier créneaux

                if ($duree % 3 == 0) {
                    for ($i = 1; $i < $duree / 3; $i++) {
                        $planning[$casedebut + ($i * 3)] = $planning[$casedebut];
                    }
                }
            } else {
                //pas sur un créneau classique pour le début
                if (!array_key_exists($casedebut, $creneaux)) {
                    $casedebut = $casedebut - ($duree % 3);
                }

                if ($casedebut == 11 || $casedebut == 12)
                {
                    $casedebut = 10;
                }

                $planning[$casedebut][$groupe]['prof'] = $prof;
                $planning[$casedebut][$groupe]['module'] = $refmatiere[0];
                $planning[$casedebut][$groupe]['salle'] = substr($row->getLibSalle(), 0, $max);
                $planning[$casedebut][$groupe]['type'] = $type;
                $planning[$casedebut][$groupe]['typebloc'] = $typebloc;
                $planning[$casedebut][$groupe]['duree'] = $duree;
                $planning[$casedebut][$groupe]['idplanning'] = $row->getId();
                $planning[$casedebut][$groupe]['format'] = 'nok';
                $planning[$casedebut][$groupe]['debut'] = $row->getDebut();
                $planning[$casedebut][$groupe]['fin'] = $casefin;

                if (strtoupper($type) === 'TD') {
                    $planning[$casedebut][$groupe + 1]['module'] = 'xt';
                }

                if (strtoupper($type) === 'CM') {
                    for ($gr = 1; $gr < $nbgroupetp; $gr++) {
                        $planning[$casedebut][$groupe + $gr]['module'] = 'xt';
                    }
                }

                $planning[$casedebut][$groupe]['module'] = $refmatiere; //création du premier créneaux
            }
        }
        return ($planning);
    }

    public function findEdtSemestre(Semestre $semestre, ?int $semaineFormationIUT)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.codeModule = m.codeApogee')
            ->innerJoin(Ue::class, 'u', 'WITH', 'u.id = m.UE')
            ->where('p.semaineFormation = :semaine')
            ->andWhere('u.semestre = :semestre')
            ->setParameters(array('semaine' => $semaineFormationIUT, 'semestre' => $semestre->getId()))
            ->orderBy('p.jour, p.debut, p.codeGroupe')
            ->getQuery()
            ->getResult();
    }
}
