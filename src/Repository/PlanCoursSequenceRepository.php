<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/PlanCoursSequenceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2022 12:45
 */

namespace App\Repository;

use App\Entity\PlanCoursSequence;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PlanCoursSequence>
 *
 * @method PlanCoursSequence|null find($id, $lockMode = null, $lockVersion = null)
 * @method PlanCoursSequence|null findOneBy(array $criteria, array $orderBy = null)
 * @method PlanCoursSequence[]    findAll()
 * @method PlanCoursSequence[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlanCoursSequenceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlanCoursSequence::class);
    }

    public function add(PlanCoursSequence $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PlanCoursSequence $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PlanCoursSequence[] Returns an array of PlanCoursSequence objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?PlanCoursSequence
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
