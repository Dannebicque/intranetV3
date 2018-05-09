<?php

namespace App\Repository;

use App\Entity\Ufr;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Ufr|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ufr|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ufr[]    findAll()
 * @method Ufr[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UfrRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Ufr::class);
    }

//    /**
//     * @return Ufr[] Returns an array of Ufr objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Ufr
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
