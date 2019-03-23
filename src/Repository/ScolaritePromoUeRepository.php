<?php

namespace App\Repository;

use App\Entity\ScolaritePromoUe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ScolaritePromoUe|null find($id, $lockMode = null, $lockVersion = null)
 * @method ScolaritePromoUe|null findOneBy(array $criteria, array $orderBy = null)
 * @method ScolaritePromoUe[]    findAll()
 * @method ScolaritePromoUe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScolaritePromoUeRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ScolaritePromoUe::class);
    }

    // /**
    //  * @return ScolaritePromoUe[] Returns an array of ScolaritePromoUe objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ScolaritePromoUe
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
