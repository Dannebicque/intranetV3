<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/PlanCoursSaeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/02/2024 14:11
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\ApcSae;
use App\Entity\Personnel;
use App\Entity\PlanCoursSae;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<\App\Entity\PlanCoursSae>
 *
 * @method PlanCoursSae|null find($id, $lockMode = null, $lockVersion = null)
 * @method PlanCoursSae|null findOneBy(array $criteria, array $orderBy = null)
 * @method PlanCoursSae[]    findAll()
 * @method PlanCoursSae[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlanCoursSaeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlanCoursSae::class);
    }

    public function add(PlanCoursSae $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PlanCoursSae $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findByIntervenantsAndAnnee(
        Personnel $personnel,
        AnneeUniversitaire $anneeUniversitaire
    ): array
    {
        return $this->createQueryBuilder('p')
            ->join('p.intervenants', 'i')
            ->join('p.anneeUniversitaire', 'a')
            ->where('i.id = :personnel')
            ->andWhere('a.id = :annee')
            ->setParameter('personnel', $personnel->getId())
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByIntervenantsAndSemestre(Personnel $personnel, Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->createQueryBuilder('p')
            ->join('p.intervenants', 'i')
            ->join('p.anneeUniversitaire', 'a')
            ->innerJoin(ApcSae::class, 'sae', 'WITH', 'sae.id = p.idMatiere')
            ->leftJoin('sae.semestres', 's')
            ->where('i.id = :personnel')
            ->andWhere('s.ordreLmd = :semestre')
            ->andWhere('a.id = :annee')
            ->setParameter('personnel', $personnel->getId())
            ->setParameter('semestre', $semestre->getOrdreLmd())
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->getQuery()
            ->getResult();
    }
}
