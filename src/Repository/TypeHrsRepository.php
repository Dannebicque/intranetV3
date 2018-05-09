<?php

namespace App\Repository;

use App\Entity\TypeHrs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TypeHrs|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeHrs|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeHrs[]    findAll()
 * @method TypeHrs[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeHrsRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TypeHrs::class);
    }

//    /**
//     * @return TypeHrs[] Returns an array of TypeHrs objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TypeHrs
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
