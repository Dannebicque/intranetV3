<?php

namespace App\Repository;

use App\Entity\Competence;
use App\Entity\Diplome;
use App\Entity\Departement;
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
     * @param $diplome
     *
     * @return \Doctrine\ORM\QueryBuilder
     */
    public function findByDiplomeBuilder($diplome): \Doctrine\ORM\QueryBuilder
    {
        return $this->createQueryBuilder('c')
            ->where('c.diplome = :diplome')
            ->setParameter('diplome', $diplome)
            ->orderBy('c.libelle', 'ASC');
    }

    public function findByDepartement(Departement $departement)
    {
        return $this->createQueryBuilder('c')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'c.diplome=d.id')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('c.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
