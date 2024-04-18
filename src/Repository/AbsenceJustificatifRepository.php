<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/AbsenceJustificatifRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:52
 */

namespace App\Repository;

use App\Entity\Absence;
use App\Entity\AbsenceJustificatif;
use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;
use function count;

/**
 * @method AbsenceJustificatif|null find($id, $lockMode = null, $lockVersion = null)
 * @method AbsenceJustificatif|null findOneBy(array $criteria, array $orderBy = null)
 * @method AbsenceJustificatif[]    findAll()
 * @method AbsenceJustificatif[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<AbsenceJustificatif>
 */
class AbsenceJustificatifRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AbsenceJustificatif::class);
    }

    public function findBySemestre(Semestre $semestre): array
    {
        return $this->createQueryBuilder('j')
            ->where('j.semestre = :semestre')
            ->andWhere('j.anneeUniversitaire = :annee')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('annee', $semestre->getAnneeUniversitaire())
            ->orderBy('j.created', Order::Descending->value)
            ->getQuery()
            ->getResult()
            ;
    }

    /**
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function findBySemestreCount(Semestre $semestre, AnneeUniversitaire $annee): ?int
    {
        return $this->createQueryBuilder('j')
            ->select('count(j.id)')
            ->where('j.semestre = :semestre')
            ->andWhere('j.anneeUniversitaire = :annee')
            ->andWhere('j.etat = :etat')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('annee', $annee->getId())
            ->setParameter('etat', AbsenceJustificatif::DEPOSE)
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
            ->andWhere('j.etudiant = :etudiant')
            ->setParameter('date', $absence->getDateHeure())
            ->setParameter('etat', AbsenceJustificatif::ACCEPTE)
            ->setParameter('etudiant', $absence->getEtudiant()?->getId())
            ->getQuery()
            ->getResult();

        return (is_countable($query) ? count($query) : 0) >= 1;
    }

    public function findByEtudiant(Etudiant $etudiant): array
    {
        return $this->createQueryBuilder('j')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'j.etudiant = e.id')
            ->where('j.etudiant = :etudiant')
            ->andWhere('j.anneeUniversitaire = :annee')
            ->setParameter('etudiant', $etudiant->getId())
            ->setParameter('annee', $etudiant->getAnneeUniversitaire())
            ->orderBy('j.created', Order::Descending->value)
            ->getQuery()
            ->getResult();
    }

    public function findByAnnee(Annee $annee): array
    {
        return $this->createQueryBuilder('j')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'j.etudiant = e.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
            ->where('s.annee = :annee')
            ->setParameter('annee', $annee->getId())
            ->orderBy('j.created', Order::Descending->value)
            ->getQuery()
            ->getResult();
    }
}
