<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/EdtPlanningRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 01/08/2019 15:58
 * @lastUpdate 01/08/2019 15:58
 */

namespace App\Repository;

use App\Entity\EdtPlanning;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method EdtPlanning|null find($id, $lockMode = null, $lockVersion = null)
 * @method EdtPlanning|null findOneBy(array $criteria, array $orderBy = null)
 * @method EdtPlanning[]    findAll()
 * @method EdtPlanning[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EdtPlanningRepository extends ServiceEntityRepository
{
    protected $groupetp = 1;
    protected $groupetd = 1;

    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, EdtPlanning::class);
    }

    /**
     * @param $formation
     *
     * @return array
     */
//    public function findEvalFormation($formation)
//    {
//        return $this->createQueryBuilder('p')
//            ->innerJoin('DAKernelBundle:Semestre', 's', 'WITH', 's.id = p.semestre')
//            ->innerJoin('DAKernelBundle:Annee', 'a', 'WITH', 'a.id = s.annee')
//            ->innerJoin('DAKernelBundle:Diplome', 'd', 'WITH', 'd.id = a.diplome')
//            ->where('d.formation = :formation')
//            ->andWhere('p.evaluation = :eval')
//            ->setParameters(array('formation' => $formation, 'eval' => 'O'))
//            ->orderBy('p.semaine', 'ASC')
//            ->getQuery()
//            ->getResult();
//    }
//
//    /**
//     * @param $personnel
//     *
//     * @return array
//     */
//    public function findEvalPersonnel($personnel)
//    {
//        return $this->createQueryBuilder('p')
//            ->where('p.intervenant = :personnel')
//            ->andWhere('p.evaluation = :eval')
//            ->setParameters(array('personnel' => $personnel, 'eval' => 'O'))
//            ->orderBy('p.semaine', 'ASC')
//            ->getQuery()
//            ->getResult();
//    }

    /**
     * @param integer $prof
     * @param integer $semaine
     *
     * @return array
     */
    public function findEdtProf($prof, $semaine): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaine = :semaine')
            ->andWhere('p.intervenant = :idprof')
            ->setParameters(array('semaine' => $semaine, 'idprof' => $prof))
            ->orderBy('p.jour, p.debut, p.groupe')
            ->getQuery()
            ->getResult();
    }

//    /**
//     * @param integer $prof
//     *
//     * @return array
//     */
//    public function findAllEDTProf($prof)
//    {
//        return $this->createQueryBuilder('p')
//            ->innerJoin('DAKernelBundle:Calendrier', 'c', 'WITH', 'p.semaine = c.semaineIUT')
//            ->where('p.intervenant = :idprof')
//            ->setParameter('idprof', $prof)
//            ->orderBy('p.semaine, p.jour, p.debut, p.groupe')
//            ->getQuery()
//            ->getResult();
//    }

//    /**
//     * @param integer $module
//     *
//     * @return array
//     */
//    public function findAllEdtModule($module)
//    {
//        return $this->createQueryBuilder('p')
//            ->innerJoin('DAKernelBundle:Calendrier', 'c', 'WITH', 'p.semaine = c.semaineIUT')
//            ->where('p.matiere = :idmodule')
//            ->setParameter('idmodule', $module)
//            ->orderBy('p.semaine, p.jour, p.debut, p.groupe')
//            ->getQuery()
//            ->getResult();
//    }

    /**
     * @param         $semestre
     * @param integer $semaine
     *
     * @return array
     */
    public function findEdtSemestre($semestre, $semaine): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaine = :semaine')
            ->andWhere('p.semestre = :semestre')
            ->setParameters(array('semaine' => $semaine, 'semestre' => $semestre))
            ->orderBy('p.jour, p.debut, p.groupe')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param integer $module
     * @param integer $semaine
     *
     * @return array
     */
    public function findEdtModule($module, $semaine): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaine = :semaine')
            ->andWhere('p.matiere = :matiere')
            ->setParameters(array('semaine' => $semaine, 'matiere' => $module))
            ->orderBy('p.jour, p.debut, p.groupe')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param integer $jour
     * @param integer $semaine
     *
     * @return array
     */
    public function findEdtJour($jour, $semaine): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaine = :semaine')
            ->andWhere('p.jour = :jour')
            ->setParameters(array('semaine' => $semaine, 'jour' => $jour))
            ->orderBy('p.annee, p.debut, p.groupe')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param string  $salle
     * @param integer $semaine
     *
     * @return array
     */
    public function findEdtSalle($salle, $semaine): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaine = :semaine')
            ->andWhere('p.salle = :salle')
            ->setParameters(array('semaine' => $semaine, 'salle' => $salle))
            ->orderBy('p.semestre, p.debut, p.groupe')
            ->getQuery()
            ->getResult();
    }

//    /**
//     * @param         $user
//     * @param integer $semaine
//     * @param integer $jour
//     *
//     * @return array
//     */
//    public function findEdtJour(Etudiants $user, $semaine, $jour)
//    {
//        $this->groupes($user);
//
//        return $this->createQueryBuilder('p')
//            ->where('p.semaine = :semaine')
//            ->andWhere('p.semestre = :promo')
//            ->andWhere('p.groupe = 1 OR p.groupe = :groupetd OR p.groupe = :groupetp')
//            ->andWhere('p.jour = :jour')
//            ->setParameters(array(
//                'semaine'  => $semaine,
//                'promo'    => $user->getSemestre()->getId(),
//                'jour'     => $jour,
//                'groupetd' => $this->groupetd,
//                'groupetp' => $this->groupetp
//            ))
//            ->orderBy('p.jour, p.debut, p.groupe')
//            ->getQuery()
//            ->getResult();
//    }

    /**
     * @param $user
     */
    private function groupes(Etudiant $user): void
    {
        foreach ($user->getGroupes() as $groupe) {
            if ($groupe->getTypeGroupe()->isTD()) {
                $this->groupetd = $groupe->getOrdre();
            } else if ($groupe->getTypegroupe()->isTP()) {
                $this->groupetp = $groupe->getOrdre();
            }
        }
    }

    /**
     * @param $semaine
     * @param $jour
     *
     * @return array
     */
    public function findEdtSalleJour($semaine, $jour): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaine = :semaine')
            ->andWhere('p.jour = :jour')
            ->setParameters(array(
                'semaine' => $semaine,
                'jour'    => $jour
            ))
            ->orderBy('p.debut')
            ->getQuery()
            ->getResult();
    }

//    /**
//     * @param integer $semaine
//     * @param integer $jour
//     * @param integer $promo
//     *
//     * @return array
//     */
//    public function findEdtVenir($semaine, $jour, $promo)
//    {
//        return $this->createQueryBuilder('p')
//            ->where('p.semaine = :semaine')
//            ->andWhere('p.annee = :promo')
//            ->andWhere('p.jour = :jour')
//            ->setParameters(array(
//                'semaine' => $semaine,
//                'promo'   => $promo,
//                'jour'    => $jour,
//            ))
//            ->orderBy('p.jour, p.debut, p.groupe')
//            ->getQuery()
//            ->getResult();
//    }

//    /**
//     * @param Etudiant $user
//     * @param integer   $semaine
//     *
//     * @return array
//     */
//    public function findEdtEtudiant(Etudiant $user, $semaine)
//    {
//        $this->groupes($user);
//
//        return $this->createQueryBuilder('p')
//            ->where('p.semaine = :semaine')
//            ->orWhere('p.semaine = :semaine2 ')
//            ->andWhere('p.semestre = :promo')
//            ->andWhere('p.groupe = 1 OR p.groupe = :groupetd OR p.groupe = :groupetp')
//            ->setParameters(array(
//                'semaine'  => $semaine,
//                'promo'    => $user->getSemestre()->getId(),
//                'semaine2' => $semaine + 1,
//                'groupetd' => $this->groupetd,
//                'groupetp' => $this->groupetp,
//            ))
//            ->orderBy('p.jour, p.debut, p.groupe')
//            ->getQuery()
//            ->getResult();
//    }

    /**
     * @param Etudiant $user
     * @param integer   $semaine
     *
     * @return array
     */
    public function findEdtEtu(Etudiant $user, $semaine): array
    {
        if ($user->getSemestre() !== null) {
            $this->groupes($user);

            return $this->createQueryBuilder('p')
                ->where('p.semaine = :semaine')
                ->andWhere('p.semestre = :promo')
                ->andWhere('p.groupe = 1 OR p.groupe = :groupetd OR p.groupe = :groupetp')
                ->setParameters(array(
                    'semaine'  => $semaine,
                    'promo'    => $user->getSemestre()->getId(),
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
     * @param integer  $numSemaine
     * @param Semestre $semestre
     * @param integer  $jour
     *
     * @return array
     */
    public function recupereEDTBornes($numSemaine, Semestre $semestre, $jour): array
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
            ->where('p.semaine = :semaine')
            ->andWhere('p.jour = :jour ')
            ->andWhere('p.semestre = :semestre')
            ->setParameters(array(
                'semaine'  => $numSemaine,
                'jour'     => $jour,
                'semestre' => $semestre->getId(),
            ))
            ->orderBy('p.groupe, p.debut')
            ->getQuery()
            ->getResult();

        $planning = array();

        $j = 0;
        /** @var  EdtPlanning $row */
        foreach ($query as $row) {
            $casedebut = $row->getDebut();



            $casefin = $row->getFin();
            $duree = $casefin - $casedebut;
            $groupe = $row->getGroupe();
            $type = $row->getType();
            $max = 20;
            if ($type === 'tp' || $type === 'TP') {
                $max = 6;
            }

            if ($row->getIntervenant() !== null) {
                $prof  = mb_substr($row->getIntervenant()->getNom(), 0, $max);
            } else {
                $prof = '';
            }

            if ($row->getMatiere() === null) {
                $refmatiere = $row->getTexte();
            } else {
                $refmatiere = $row->getMatiere()->getCodeMatiere();
            }

            if (array_key_exists($casedebut, $creneaux) && $duree % 3 === 0) {
                $planning[$casedebut][$groupe]['prof'] = $prof;
                $planning[$casedebut][$groupe]['module'] = $refmatiere;
                $planning[$casedebut][$groupe]['salle'] = mb_substr($row->getSalle(), 0, $max);
                $planning[$casedebut][$groupe]['type'] = $type;
                $planning[$casedebut][$groupe]['typebloc'] = $typebloc;
                $planning[$casedebut][$groupe]['duree'] = $duree;
                $planning[$casedebut][$groupe]['idplanning'] = $row->getId();
                $planning[$casedebut][$groupe]['texte'] = $row->getTexte();
                $planning[$casedebut][$groupe]['format'] = 'ok';

                if (strtoupper($type) === 'TD') {
                    $planning[$casedebut][$groupe + 1]['module'] = 'xt';
                }

                if (strtoupper($type) === 'CM') {
                    for ($gr = 1; $gr < $nbgroupetp; $gr++) {
                        $planning[$casedebut][$groupe + $gr]['module'] = 'xt';
                    }
                }

                $planning[$casedebut][$groupe]['module'] = $refmatiere; //création du premier créneaux

                if ($duree % 3 === 0) {
                    for ($i = 1; $i < $duree / 3; $i++) {
                        $planning[$casedebut + ($i * 3)] = $planning[$casedebut];
                    }
                }
            } else {
                //pas sur un créneau classique pour le début
                if (!array_key_exists($casedebut, $creneaux)) {
                    $casedebut -= ($duree % 3);
                }

                if ($casedebut === 11 || $casedebut === 12)
                {
                    $casedebut = 10;
                }

                if ($casedebut === 2 || $casedebut === 3)
                {
                    $casedebut = 1;
                }

                $planning[$casedebut][$groupe]['prof'] = $prof;
                $planning[$casedebut][$groupe]['module'] = $refmatiere;
                $planning[$casedebut][$groupe]['salle'] = substr($row->getSalle(), 0, $max);
                $planning[$casedebut][$groupe]['type'] = $type;
                $planning[$casedebut][$groupe]['typebloc'] = $typebloc;
                $planning[$casedebut][$groupe]['duree'] = $duree;
                $planning[$casedebut][$groupe]['idplanning'] = $row->getId();
                $planning[$casedebut][$groupe]['texte'] = $row->getTexte();
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
        return $planning;
    }

//    /**
//     * @return array
//     */
//    public function findAllStudio()
//    {
//        $query = $this->createQueryBuilder('p')
//            ->where('p.salle = :salle')
//            ->setParameter('salle', 'Stud')
//            ->orderBy('p.semaine, p.jour, p.debut')
//            ->getQuery()
//            ->getResult();
//
//        $t = array();
//        /** @var Planning $q */
//        foreach ($query as $q) {
//            if ($q->getDebut() < 11) {
//                $debut = '08'; //matin
//            } elseif ($q->getDebut() >= 11) {
//                $debut = '14'; //après-midi.
//            } else {
//                $debut = 'OO'; //toute la journée ?
//            }
//            $t[$q->getSemaine()][$q->getJour()][$debut] = $debut;
//        }
//
//        return $t;
//    }
    public function getByPersonnelArray(Personnel $user)
    {
        $query = $this->createQueryBuilder('p')
            ->andWhere('p.intervenant = :idprof')
            ->setParameter('idprof', $user->getId())
            ->orderBy('p.jour, p.debut, p.groupe')
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var EdtPlanning $event */
        foreach ($query as $event) {
            $pl = [];
            $pl['semaine'] = $event->getSemaine();
            $pl['jour'] = $event->getJour();
            $pl['debut'] = $event->getDebut();
            $pl['fin'] = $event->getFin();
            $pl['commentaire'] = $event->getCommentaire();
            $pl['ical'] = $event->getDisplayIcal();
            $pl['salle'] = $event->getSalle();
            $t[] = $pl;
        }

        return $t;
    }

    public function getByEtudiantArray($user, $nbSemaines)
    {
    }

}
