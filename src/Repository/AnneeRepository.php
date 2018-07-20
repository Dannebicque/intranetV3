<?php

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Formation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Annee|null find($id, $lockMode = null, $lockVersion = null)
 * @method Annee|null findOneBy(array $criteria, array $orderBy = null)
 * @method Annee[]    findAll()
 * @method Annee[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AnneeRepository extends ServiceEntityRepository
{
    /**
     * AnneeRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Annee::class);
    }

    /**
     * @param $diplome
     *
     * @return \Doctrine\ORM\QueryBuilder
     */
    public function findByDiplomeBuilder($diplome): \Doctrine\ORM\QueryBuilder
    {
        return $this->createQueryBuilder('a')
            ->where('a.diplome = :diplome')
            ->setParameter('diplome', $diplome);
    }

    public function findByFormation(Formation $formation)
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('d.formation = :formation')
            ->setParameter('formation', $formation->getId())
            ->getQuery()
            ->getResult();
    }
}
