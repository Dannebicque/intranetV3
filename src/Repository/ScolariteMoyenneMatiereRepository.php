<?php

namespace App\Repository;

use App\Entity\ScolariteMoyenneMatiere;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ScolariteMoyenneMatiere|null find($id, $lockMode = null, $lockVersion = null)
 * @method ScolariteMoyenneMatiere|null findOneBy(array $criteria, array $orderBy = null)
 * @method ScolariteMoyenneMatiere[]    findAll()
 * @method ScolariteMoyenneMatiere[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScolariteMoyenneMatiereRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ScolariteMoyenneMatiere::class);
    }

    // /**
    //  * @return ScolariteMoyenneMatiere[] Returns an array of ScolariteMoyenneMatiere objects
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
    public function findOneBySomeField($value): ?ScolariteMoyenneMatiere
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
