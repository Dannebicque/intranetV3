<?php

namespace App\Repository;

use App\Entity\Diplome;
use App\Entity\Departement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\RegistryInterface;

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
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
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
}
