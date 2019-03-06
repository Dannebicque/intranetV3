<?php

namespace App\Repository;

use App\Entity\CreneauBloque;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method CreneauBloque|null find($id, $lockMode = null, $lockVersion = null)
 * @method CreneauBloque|null findOneBy(array $criteria, array $orderBy = null)
 * @method CreneauBloque[]    findAll()
 * @method CreneauBloque[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CreneauBloqueRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, CreneauBloque::class);
    }

    // /**
    //  * @return CreneauBloque[] Returns an array of CreneauBloque objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CreneauBloque
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
