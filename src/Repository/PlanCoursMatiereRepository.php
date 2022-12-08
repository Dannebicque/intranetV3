<?php

namespace App\Repository;

use App\Entity\PlanCoursMatiere;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PlanCoursMatiere>
 *
 * @method PlanCoursMatiere|null find($id, $lockMode = null, $lockVersion = null)
 * @method PlanCoursMatiere|null findOneBy(array $criteria, array $orderBy = null)
 * @method PlanCoursMatiere[]    findAll()
 * @method PlanCoursMatiere[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlanCoursMatiereRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlanCoursMatiere::class);
    }

    public function add(PlanCoursMatiere $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PlanCoursMatiere $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PlanCoursMatiere[] Returns an array of PlanCoursMatiere objects
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

//    public function findOneBySomeField($value): ?PlanCoursMatiere
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
