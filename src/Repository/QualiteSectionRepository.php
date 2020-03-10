<?php

namespace App\Repository;

use App\Entity\QualiteSection;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method QualiteSection|null find($id, $lockMode = null, $lockVersion = null)
 * @method QualiteSection|null findOneBy(array $criteria, array $orderBy = null)
 * @method QualiteSection[]    findAll()
 * @method QualiteSection[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QualiteSectionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QualiteSection::class);
    }

    // /**
    //  * @return QualiteSection[] Returns an array of QualiteSection objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('q.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?QualiteSection
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
