<?php

namespace App\Repository;

use App\Entity\Article;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Article|null find($id, $lockMode = null, $lockVersion = null)
 * @method Article|null findOneBy(array $criteria, array $orderBy = null)
 * @method Article[]    findAll()
 * @method Article[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ArticleRepository extends ServiceEntityRepository
{
    /**
     * ArticleRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Article::class);
    }

    /**
     * @param $type
     * @param $formation
     *
     * @return mixed
     */
    public function findByTypeFormation($type, $formation)
    {
        return $this->findByTypeFormationBuilder($type, $formation)
            ->getQuery()
            ->getResult();
    }


    /**
     * @param $slug
     *
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findOneBySlug($slug)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.slug = :slug')
            ->setParameter('slug', $slug)
            ->getQuery()
            ->getOneOrNullResult()
            ;
    }


    /**
     * @param $type
     * @param $formation
     *
     * @return \Doctrine\ORM\QueryBuilder
     */
    public function findByTypeFormationBuilder($type, $formation): \Doctrine\ORM\QueryBuilder
    {
        return $this->createQueryBuilder('a')
            ->where('a.type = :type')
            ->andWhere('a.formation = :formation')
            ->setParameter('type', $type)
            ->setParameter('formation', $formation)
            ->orderBy('a.updated', 'DESC');
    }

    /**
     * @param $formation
     * @param $nbResult
     *
     * @return Article[]
     */
    public function findByFormation($formation, $nbResult = 2): array
    {
        $q = $this->createQueryBuilder('a')
            ->andWhere('a.formation = :formation')
            ->setParameter('formation', $formation)
            ->orderBy('a.created', 'DESC');

        if ($nbResult > 0) {
            $q->setMaxResults($nbResult);
        }

        return $q->getQuery()
            ->getResult();
    }
}
