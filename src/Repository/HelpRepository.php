<?php

namespace App\Repository;

use App\Entity\Help;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Help|null find($id, $lockMode = null, $lockVersion = null)
 * @method Help|null findOneBy(array $criteria, array $orderBy = null)
 * @method Help[]    findAll()
 * @method Help[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HelpRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Help::class);
    }

    /**
     * @param $sujet
     *
     * @return Help|null
     */
    public function findBySlug($sujet) : ?Help
    {
        return $this->findOneBy(array('slug' => $sujet));
    }

//    /**
//     * @return Help[] Returns an array of Help objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('h.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Help
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
