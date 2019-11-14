<?php
/**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/ArticleRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 14/11/2019 14:57
 * @lastUpdate 14/11/2019 08:12
 */

namespace App\Repository;

use App\Entity\Article;
use App\Entity\ArticleCategorie;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\QueryBuilder;
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
    public function __construct(ManagerRegistry $registry)
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
     * @throws NonUniqueResultException
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
     * @return QueryBuilder
     */
    public function findByTypeDepartementBuilder($type, $departement): QueryBuilder
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(ArticleCategorie::class, 'c', 'WITH', 'c.id = a.categorie')
            ->where('c.id = :idType')
            ->andWhere('c.departement = :departement')
            ->setParameter('idType', $type)
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
            ->innerJoin(ArticleCategorie::class, 'c', 'WITH', 'c.id = a.categorie')
            ->andWhere('c.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('a.created', 'DESC');

        if ($nbResult > 0) {
            $q->setMaxResults($nbResult);
        }

        return $q->getQuery()
            ->getResult();
    }
}
