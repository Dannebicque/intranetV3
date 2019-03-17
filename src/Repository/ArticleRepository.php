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
     * @param $departement
     *
     * @return mixed
     */
    public function findByTypeDepartement($type, $departement)
    {
        return $this->findByTypeDepartementBuilder($type, $departement)
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
     * @param $departement
     *
     * @return \Doctrine\ORM\QueryBuilder
     */
    public function findByTypeDepartementBuilder($type, $departement): \Doctrine\ORM\QueryBuilder
    {
        return $this->createQueryBuilder('a')
            ->where('a.type = :type')
            ->andWhere('a.departement = :departement')
            ->setParameter('type', $type)
            ->setParameter('departement', $departement)
            ->orderBy('a.updated', 'DESC');
    }

    /**
     * @param $departement
     * @param $nbResult
     *
     * @return Article[]
     */
    public function findByDepartement($departement, $nbResult = 2): array
    {
        $q = $this->createQueryBuilder('a')
            ->andWhere('a.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('a.created', 'DESC');

        if ($nbResult > 0) {
            $q->setMaxResults($nbResult);
        }

        return $q->getQuery()
            ->getResult();
    }
}
