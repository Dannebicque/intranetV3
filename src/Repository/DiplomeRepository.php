<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/DiplomeRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\Diplome;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\QueryBuilder;

/**
 * @method Diplome|null find($id, $lockMode = null, $lockVersion = null)
 * @method Diplome|null findOneBy(array $criteria, array $orderBy = null)
 * @method Diplome[]    findAll()
 * @method Diplome[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DiplomeRepository extends ServiceEntityRepository
{
    /**
     * DiplomeRepository constructor.
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Diplome::class);
    }

    /**
     * @param $departement
     *
     * @return mixed
     */
    public function findByDepartement(Departement $departement)
    {
        return $this->findByDepartementBuilder($departement->getId())
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $departement
     *
     * @return QueryBuilder
     */
    public function findByDepartementBuilder($departement): QueryBuilder
    {
        return $this->createQueryBuilder('d')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('d.libelle');
    }

    public function findActifs()
    {
        return $this->createQueryBuilder('d')
            ->where('d.actif = :actif')
            ->setParameter('actif', true)
            ->orderBy('d.libelle')
            ->getQuery()
            ->getResult();
    }
}
