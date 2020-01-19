<?php

namespace App\Repository;

use App\Entity\QualiteSectionQuestion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method QualiteSectionQuestion|null find($id, $lockMode = null, $lockVersion = null)
 * @method QualiteSectionQuestion|null findOneBy(array $criteria, array $orderBy = null)
 * @method QualiteSectionQuestion[]    findAll()
 * @method QualiteSectionQuestion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QualiteSectionQuestionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QualiteSectionQuestion::class);
    }

    // /**
    //  * @return QualiteSectionQuestion[] Returns an array of QualiteSectionQuestion objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('q.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?QualiteSectionQuestion
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
