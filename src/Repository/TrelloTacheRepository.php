<?php

namespace App\Repository;

use App\Entity\Formation;
use App\Entity\TrelloTache;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TrelloTache|null find($id, $lockMode = null, $lockVersion = null)
 * @method TrelloTache|null findOneBy(array $criteria, array $orderBy = null)
 * @method TrelloTache[]    findAll()
 * @method TrelloTache[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrelloTacheRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TrelloTache::class);
    }

    public function findByFormation(Formation $formation)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.formation = :formation')
            ->setParameter('formation', $formation->getId())
            ->orderBy('a.asc', 'DESC')
            ->getQuery()
            ->getResult();
    }

//    /**
//     * @return TrelloTache[] Returns an array of TrelloTache objects
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
    public function findOneBySomeField($value): ?TrelloTache
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
