<?php

namespace App\Repository;

use App\Entity\MaterielPret;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method MaterielPret|null find($id, $lockMode = null, $lockVersion = null)
 * @method MaterielPret|null findOneBy(array $criteria, array $orderBy = null)
 * @method MaterielPret[]    findAll()
 * @method MaterielPret[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MaterielPretRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, MaterielPret::class);
    }

//    /**
//     * @return MaterielPret[] Returns an array of MaterielPret objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?MaterielPret
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
