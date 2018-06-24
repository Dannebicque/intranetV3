<?php

namespace App\Repository;

use App\Entity\Competence;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Competence|null find($id, $lockMode = null, $lockVersion = null)
 * @method Competence|null findOneBy(array $criteria, array $orderBy = null)
 * @method Competence[]    findAll()
 * @method Competence[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CompetenceRepository extends ServiceEntityRepository
{
    /**
     * CompetenceRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Competence::class);
    }

    /**
     * @param $getFormation
     * @param $int
     */
    public function findByFormation($getFormation, $int)
    {
    }

    /**
     * @param $diplome
     *
     * @return \Doctrine\ORM\QueryBuilder
     */
    public function findByDiplomeBuilder($diplome)
    {
        return $this->createQueryBuilder('c')
            ->where('c.diplome = :diplome')
            ->setParameter('diplome', $diplome)
            ->orderBy('c.libelle', 'ASC');
    }
}
