<?php

namespace App\Repository;

use App\Entity\CelcatEvents;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method CelcatEvents|null find($id, $lockMode = null, $lockVersion = null)
 * @method CelcatEvents|null findOneBy(array $criteria, array $orderBy = null)
 * @method CelcatEvents[]    findAll()
 * @method CelcatEvents[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CelcatEventsRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, CelcatEvents::class);
    }

//    /**
//     * @return CelcatEvents[] Returns an array of CelcatEvents objects
//     */
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
    public function findOneBySomeField($value): ?CelcatEvents
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
