<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/CelcatEventsRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/09/2021 22:06
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\CelcatEvent;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Entity\Ue;
use function array_key_exists;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use http\Exception\InvalidArgumentException;

/**
 * @method CelcatEvent|null find($id, $lockMode = null, $lockVersion = null)
 * @method CelcatEvent|null findOneBy(array $criteria, array $orderBy = null)
 * @method CelcatEvent[]    findAll()
 * @method CelcatEvent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<CelcatEvent>
 */
class CelcatEventsRepository extends ServiceEntityRepository
{
    protected $groupetp;
    protected $groupetd;
    protected $groupecm;
    private string $chaine = '';
    private array $params = [];

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CelcatEvent::class);
    }

    public function findEdtProf($getNumeroHarpege, int $semaine)
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaineFormation = :semaine')
            ->andWhere('p.codePersonnel = :idprof')
            ->setParameters(['semaine' => $semaine, 'idprof' => $getNumeroHarpege])
            ->orderBy('p.jour', 'ASC')
            ->addOrderBy('p.debut', 'ASC')
            ->addOrderBy('p.codeGroupe', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findEdtEtu(Etudiant $user, int $semaine)
    {
        if (null !== $user->getSemestre()) {
            $this->groupes($user);
            $this->params['semaine'] = $semaine;
            $query = $this->createQueryBuilder('p')
                ->where('p.semaineFormation = :semaine');

            if ('' !== $this->chaine) {
                $query->andWhere($this->chaine);
            }

            $query->setParameters($this->params)
                ->orderBy('p.jour', 'ASC')
                ->addOrderBy('p.debut', 'ASC');

            return $query->getQuery()->getResult();
        }

        return null;
    }

    private function groupes(Etudiant $user): void
    {
        $i = 1;
        foreach ($user->getGroupes() as $groupe) {
            if (null !== $groupe->getTypeGroupe()) {
                if ($i > 1) {
                    $this->chaine .= ' OR ';
                }
                $this->chaine .= 'p.codeGroupe = :gr'.$i;

                $this->params['gr'.$i] = $groupe->getCodeApogee();
                ++$i;
            }
        }
    }

    public function deleteDepartement(
        int $codeCelcatDepartement,
        ?AnneeUniversitaire $anneeUniversitaire
    ) {
        if (null === $anneeUniversitaire) {
            throw new InvalidArgumentException('L\'année universitaire n\'est pas définie');
        }

        return $this->createQueryBuilder('c')
            ->delete(CelcatEvent::class, 'c')
            ->where('c.anneeUniversitaire = :annee')
            ->andWhere('c.departementId = :departement')
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->setParameter('departement', $codeCelcatDepartement)
            ->getQuery()
            ->getResult();
    }

    public function recupereEDTBornes(int $semaineReelle, Semestre $semestre, $jsem): array
    {
        $nbgroupetp = $semestre->getNbgroupeTpEdt();

        if ($nbgroupetp <= 2) {
            $typebloc = '-d';
        } else {
            $typebloc = '';
        }

        $query = $this->createQueryBuilder('p')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.codeModule = m.codeElement')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->where('p.semaineFormation = :semaine')
            ->andWhere('p.jour = :jour ')
            ->andWhere('u.semestre = :semestre')
            ->setParameters([
                'semaine' => $semaineReelle,
                'jour' => $jsem + 1,
                'semestre' => $semestre->getId(),
            ])
            ->orderBy('p.codeGroupe', 'ASC')
            ->addOrderBy('p.debut', 'ASC')
            ->getQuery()
            ->getResult();

        $planning = [];

        /** @var CelcatEvent $row */
        foreach ($query as $row) {
            $casedebut = Constantes::TAB_HEURES_INDEX[$row->getDebut()->format('H:i:s')];
            $casefin = Constantes::TAB_HEURES_INDEX[$row->getFin()->format('H:i:s')];
            $duree = $casefin - $casedebut;
            $groupe = Constantes::TAB_GROUPES_INDEX[$row->getLibGroupe()]; //todo: pas idéal car dépend de MMI
            $type = $row->getType();
            $max = 20;
            if ('tp' === $type || 'TP' === $type) {
                $max = 6;
            }

            if (null !== $row->getLibPersonnel()) {
                $prof = mb_substr($row->getLibPersonnel(), 0, $max);
            } else {
                $prof = '';
            }

            $refmatiere = explode(' ', $row->getLibModule());

            if (array_key_exists($casedebut, Constantes::TAB_CRENEAUX) && 0 === $duree % 3) {
                $planning[$casedebut][$groupe]['prof'] = $prof;
                $planning[$casedebut][$groupe]['module'] = $refmatiere[0];
                $planning[$casedebut][$groupe]['salle'] = mb_substr($row->getLibSalle(), 0, $max);
                $planning[$casedebut][$groupe]['type'] = $type;
                $planning[$casedebut][$groupe]['typebloc'] = $typebloc;
                $planning[$casedebut][$groupe]['duree'] = $duree;
                $planning[$casedebut][$groupe]['idplanning'] = $row->getId();
                $planning[$casedebut][$groupe]['format'] = 'ok';

                if ('TD' === mb_strtoupper($type)) {
                    $planning[$casedebut][$groupe + 1]['module'] = 'xt';
                }

                if ('CM' === mb_strtoupper($type)) {
                    for ($gr = 1; $gr < $nbgroupetp; ++$gr) {
                        $planning[$casedebut][$groupe + $gr]['module'] = 'xt';
                    }
                }

                $planning[$casedebut][$groupe]['module'] = $refmatiere[0]; //création du premier créneaux

                if (0 === $duree % 3) {
                    for ($i = 1; $i < $duree / 3; ++$i) {
                        $planning[$casedebut + ($i * 3)] = $planning[$casedebut];
                    }
                }
            } else {
                //pas sur un créneau classique pour le début
                if (!array_key_exists($casedebut, Constantes::TAB_CRENEAUX)) {
                    $casedebut -= ($duree % 3);
                }

                if (11 === $casedebut || 12 === $casedebut) {
                    $casedebut = 10;
                }

                $planning[$casedebut][$groupe]['prof'] = $prof;
                $planning[$casedebut][$groupe]['module'] = $refmatiere[0];
                $planning[$casedebut][$groupe]['salle'] = mb_substr($row->getLibSalle(), 0, $max);
                $planning[$casedebut][$groupe]['type'] = $type;
                $planning[$casedebut][$groupe]['typebloc'] = $typebloc;
                $planning[$casedebut][$groupe]['duree'] = $duree;
                $planning[$casedebut][$groupe]['idplanning'] = $row->getId();
                $planning[$casedebut][$groupe]['format'] = 'nok';
                $planning[$casedebut][$groupe]['debut'] = $row->getDebut();
                $planning[$casedebut][$groupe]['fin'] = $casefin;

                if ('TD' === mb_strtoupper($type)) {
                    $planning[$casedebut][$groupe + 1]['module'] = 'xt';
                }

                if ('CM' === mb_strtoupper($type)) {
                    for ($gr = 1; $gr < $nbgroupetp; ++$gr) {
                        $planning[$casedebut][$groupe + $gr]['module'] = 'xt';
                    }
                }

                $planning[$casedebut][$groupe]['module'] = $refmatiere; //création du premier créneaux
            }
        }

        return $planning;
    }

    public function findEdtSemestre(Semestre $semestre, ?int $semaineFormationIUT)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.codeModule = m.codeElement')
            ->innerJoin(Ue::class, 'u', 'WITH', 'u.id = m.ue')
            ->where('p.semaineFormation = :semaine')
            ->andWhere('u.semestre = :semestre')
            ->setParameters(['semaine' => $semaineFormationIUT, 'semestre' => $semestre->getId()])
            ->orderBy('p.jour', 'ASC')
            ->addOrderBy('p.debut', 'ASC')
            ->addOrderBy('p.codeGroupe', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function getByPersonnelArray(Personnel $user): array
    {
        $query = $this->createQueryBuilder('p')
            ->where('p.codePersonnel = :idprof')
            ->setParameter('idprof', $user->getNumeroHarpege())
            ->orderBy('p.jour', 'ASC')
            ->addOrderBy('p.debut', 'ASC')
            ->addOrderBy('p.libGroupe', 'ASC')
            ->getQuery()
            ->getResult();

        return $this->transformeArray($query);
    }

    public function getByEtudiantArray($user, $semaine): array
    {
        $query = $this->findEdtEtu($user, $semaine);

        return $this->transformeArray($query);
    }

    private function transformeArray($data): array
    {
        $t = [];
        /** @var CelcatEvent $event */
        foreach ($data as $event) {
            $pl = [];
            $pl['id'] = $event->getId();
            $pl['semaine'] = $event->getSemaineFormation();
            $pl['jour'] = $event->getJour();
            $pl['debut'] = $event->getDebut();
            $pl['fin'] = $event->getFin();
            $pl['commentaire'] = '';
            $pl['ical'] = $event->getDisplayIcal();
            $pl['salle'] = $event->getLibSalle();
            $t[] = $pl;
        }

        return $t;
    }
}
