<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ArticleRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 09:03
 */

namespace App\Repository;

use App\Entity\Article;
use App\Entity\ArticleCategorie;
use App\Entity\Constantes;
use App\Entity\Departement;
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

    public function findByTypeDepartement($type, $departement)
    {
        return $this->findByTypeDepartementBuilder($type, $departement)
            ->getQuery()
            ->getResult();
    }

    /**
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

    public function findByTypeDepartementBuilder($type, $departement, bool $isEtudiant = true): QueryBuilder
    {
        $query = $this->createQueryBuilder('a')
            ->innerJoin(ArticleCategorie::class, 'c', 'WITH', 'c.id = a.categorie')
            ->where('c.id = :idType')
            ->andWhere('c.departement = :departement')
            ->setParameter('idType', $type)
            ->setParameter('departement', $departement)
            ->orderBy('a.updated', 'DESC');

        if (true === $isEtudiant) {
            $query->andWhere('d.typeDestinataire = :typeDestinataire')
                ->setParameter('typeDestinataire', Constantes::TYPE_DESTINATAIRE_ETUDIANT);
        }

        return $query;
    }

    /**
     * @return Article[]
     */
    public function findByDepartement(Departement $departement, int $nbResult = 0): array
    {
        $q = $this->createQueryBuilder('a')
            ->innerJoin(ArticleCategorie::class, 'c', 'WITH', 'c.id = a.categorie')
            ->andWhere('c.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('a.created', 'DESC');

        if (0 !== $nbResult) {
            $q->setMaxResults($nbResult);
        }

        return $q->getQuery()
            ->getResult();
    }
}
