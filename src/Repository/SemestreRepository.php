<?php

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Semestre|null find($id, $lockMode = null, $lockVersion = null)
 * @method Semestre|null findOneBy(array $criteria, array $orderBy = null)
 * @method Semestre[]    findAll()
 * @method Semestre[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SemestreRepository extends ServiceEntityRepository
{
    /**
     * SemestreRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Semestre::class);
    }

    /**
     * @param $formation
     *
     * @return \Doctrine\ORM\QueryBuilder
     */
    public function findByFormationBuilder($formation): \Doctrine\ORM\QueryBuilder
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('d.formation = :formation')
            ->setParameter('formation', $formation);
    }

    /**
     * @param $diplome
     *
     * @return \Doctrine\ORM\QueryBuilder
     */
    public function findByDiplomeBuilder($diplome): \Doctrine\ORM\QueryBuilder
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->where('a.diplome = :diplome')
            ->setParameter('diplome', $diplome);
    }

    /**
     * @param $diplome
     *
     * @return mixed
     */
    public function findByDiplome($diplome)
    {
        return $this->findByDiplomeBuilder($diplome)->getQuery()->getResult();
    }
}
