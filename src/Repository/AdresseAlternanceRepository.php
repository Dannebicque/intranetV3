<?php

namespace App\Repository;

use App\Entity\AdresseAlternance;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method AdresseAlternance|null find($id, $lockMode = null, $lockVersion = null)
 * @method AdresseAlternance|null findOneBy(array $criteria, array $orderBy = null)
 * @method AdresseAlternance[]    findAll()
 * @method AdresseAlternance[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AdresseAlternanceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AdresseAlternance::class);
    }

    // /**
    //  * @return AdresseAlternance[] Returns an array of AdresseAlternance objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AdresseAlternance
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
