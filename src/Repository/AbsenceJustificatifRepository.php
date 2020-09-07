<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/AbsenceJustificatifRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/09/2020 20:48

namespace App\Repository;

use App\Entity\Absence;
use App\Entity\AbsenceJustificatif;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;

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
     * @param int|null      $annee
     *
     * @return mixed
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function findBySemestreCount(Semestre $semestre, $annee = 0)
    {
        if ($annee === 0) {
            $annee = $semestre->getAnneeUniversitaire() !== null ? $semestre->getAnneeUniversitaire()->getAnnee() : (int)date('Y');
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
        $query = $this->createQueryBuilder('j')
            ->where('j.dateHeureDebut <= :date')
            ->andWhere('j.dateHeureFin >= :date')
            ->andWhere('j.etat = :etat')
            ->setParameter('date', $absence->getDateHeure())
            ->setParameter('etat', AbsenceJustificatif::ACCEPTE)
            ->getQuery()
            ->getResult();

        return count($query) >= 1;
    }

    public function findByEtudiant(Etudiant $etudiant)
    {
        return $this->createQueryBuilder('j')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'j.etudiant = e.id')
            ->where('j.etudiant = :etudiant')
            ->andWhere('j.anneeUniversitaire = :annee')
            ->setParameter('etudiant', $etudiant->getId())
            ->setParameter('annee', $etudiant->getAnneeUniversitaire())
            ->orderBy('j.created', 'DESC')
            ->getQuery()
            ->getResult();
    }
}
