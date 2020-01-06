<?php

namespace App\Repository;

use App\Entity\ArticleLike;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ArticleLike|null find($id, $lockMode = null, $lockVersion = null)
 * @method ArticleLike|null findOneBy(array $criteria, array $orderBy = null)
 * @method ArticleLike[]    findAll()
 * @method ArticleLike[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ArticleLikeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ArticleLike::class);
    }
}
