<?php

namespace App\Repository;

use App\Entity\IndisponibilitePersonnel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method IndisponibilitePersonnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method IndisponibilitePersonnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method IndisponibilitePersonnel[]    findAll()
 * @method IndisponibilitePersonnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IndisponibilitePersonnelRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, IndisponibilitePersonnel::class);
    }

    // /**
    //  * @return IndisponibilitePersonnel[] Returns an array of IndisponibilitePersonnel objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?IndisponibilitePersonnel
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
