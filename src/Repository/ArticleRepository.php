<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ArticleRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\Article;
use App\Entity\ArticleCategorie;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

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
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Article::class);
    }

    /**
     * @param $type
     * @param $departement
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
    public function findByDepartement($departement, $nbResult = 0): array
    {
        $q = $this->createQueryBuilder('a')
            ->innerJoin(ArticleCategorie::class, 'c', 'WITH', 'c.id = a.categorie')
            ->andWhere('c.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('a.created', 'DESC');

        if (0 !== $nbResult) {
            $q->setMaxResults($nbResult);
        }

        return $q->getQuery()
            ->getResult();
    }
}
