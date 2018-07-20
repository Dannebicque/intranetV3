<?php

namespace App\Repository;

use App\Entity\Diplome;
use App\Entity\Formation;
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
     * @param $formation
     *
     * @return mixed
     */
    public function findByFormation(Formation $formation)
    {
        return $this->findByFormationBuilder($formation->getId())
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $formation
     *
     * @return QueryBuilder
     */
    public function findByFormationBuilder($formation): QueryBuilder
    {
        return $this->createQueryBuilder('d')
            ->where('d.formation = :formation')
            ->setParameter('formation', $formation)
            ->orderBy('d.libelle');
    }
}
