<?php

namespace App\Repository;

use App\Entity\TwigTemplate;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TwigTemplate|null find($id, $lockMode = null, $lockVersion = null)
 * @method TwigTemplate|null findOneBy(array $criteria, array $orderBy = null)
 * @method TwigTemplate[]    findAll()
 * @method TwigTemplate[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TwigTemplateRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TwigTemplate::class);
    }

//    /**
//     * @return TwigTemplate[] Returns an array of TwigTemplate objects
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
    public function findOneBySomeField($value): ?TwigTemplate
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
