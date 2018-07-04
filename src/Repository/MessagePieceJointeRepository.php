<?php

namespace App\Repository;

use App\Entity\MessagePieceJointe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method MessagePieceJointe|null find($id, $lockMode = null, $lockVersion = null)
 * @method MessagePieceJointe|null findOneBy(array $criteria, array $orderBy = null)
 * @method MessagePieceJointe[]    findAll()
 * @method MessagePieceJointe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MessagePieceJointeRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, MessagePieceJointe::class);
    }

//    /**
//     * @return MessagePieceJointe[] Returns an array of MessagePieceJointe objects
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
    public function findOneBySomeField($value): ?MessagePieceJointe
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
