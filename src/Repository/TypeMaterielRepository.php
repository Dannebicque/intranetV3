<?php

namespace App\Repository;

use App\Entity\Formation;
use App\Entity\TypeMateriel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TypeMateriel|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeMateriel|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeMateriel[]    findAll()
 * @method TypeMateriel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeMaterielRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TypeMateriel::class);
    }


    public function findByFormation(Formation $formation)
    {
        return $this->findByFormationBuider($formation)
            ->getQuery()
            ->getResult();

    }

    public function findByFormationBuider(Formation $formation): \Doctrine\ORM\QueryBuilder
    {
        return $this->createQueryBuilder('m')
            ->where('m.formation = :formation')
            ->setParameter('formation', $formation->getId());
    }
}
