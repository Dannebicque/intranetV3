<?php

namespace App\Repository;

use App\Entity\TypeDiplome;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TypeDiplome|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeDiplome|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeDiplome[]    findAll()
 * @method TypeDiplome[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeDiplomeRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TypeDiplome::class);
    }

//    /**
//     * @return TypeDiplome[] Returns an array of TypeDiplome objects
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
    public function findOneBySomeField($value): ?TypeDiplome
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
