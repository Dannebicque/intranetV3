<?php
/**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/AbsenceJustificatifRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 14/11/2019 14:57
 * @lastUpdate 14/11/2019 14:56
 */

namespace App\Repository;

use App\Entity\Absence;
use App\Entity\AbsenceJustificatif;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;

/**
 * @method AbsenceJustificatif|null find($id, $lockMode = null, $lockVersion = null)
 * @method AbsenceJustificatif|null findOneBy(array $criteria, array $orderBy = null)
 * @method AbsenceJustificatif[]    findAll()
 * @method AbsenceJustificatif[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AbsenceJustificatifRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AbsenceJustificatif::class);
    }

    /**
     * @param Semestre $semestre
     *
     * @return mixed
     */
    public function findBySemestre(Semestre $semestre)
    {
        return $this->createQueryBuilder('j')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'j.etudiant = e.id')
            ->where('e.semestre = :semestre')
            ->andWhere('j.anneeUniversitaire = :annee')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('annee', $semestre->getAnneeUniversitaire())
            ->orderBy('j.created', 'DESC')
            ->getQuery()
            ->getResult()
            ;
    }

    /**
     * @param Semestre $semestre
     * @param int      $annee
     *
     * @return mixed
     * @throws NonUniqueResultException
     */
    public function findBySemestreCount(Semestre $semestre, $annee = 0)
    {
        if ($annee === 0) {
            $annee = $semestre->getAnneeUniversitaire() !== null ? $semestre->getAnneeUniversitaire()->getAnnee() : date('Y');
        }

        return $this->createQueryBuilder('j')
            ->select('count(j.id)')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'j.etudiant = e.id')
            ->innerJoin(AnneeUniversitaire::class, 'u', 'WITH', 'j.anneeUniversitaire = u.id')
            ->where('e.semestre = :semestre')
            ->andWhere('u.annee = :annee')
            ->andWhere('j.etat = :etat')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('annee', $annee)
            ->setParameter('etat', 'D')
            ->getQuery()
            ->getSingleScalarResult()
            ;
    }

    public function findJustificatifByAbsence(Absence $absence): bool
    {
        //regarde si un justificatif valide existe pour l'absence
        //todo: a tester.
        $query = $this->createQueryBuilder('j')
            ->where('j.dateDebut <= :date')
            ->andWhere('j.dateFin >= :date')
            ->setParameter('date', $absence->getDate())
            ->getQuery()
            ->getResult();

        return count($query) >= 1;
    }
}
