<?php

namespace App\Repository;

use App\Entity\MaterielPret;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method MaterielPret|null find($id, $lockMode = null, $lockVersion = null)
 * @method MaterielPret|null findOneBy(array $criteria, array $orderBy = null)
 * @method MaterielPret[]    findAll()
 * @method MaterielPret[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MaterielPretRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, MaterielPret::class);
    }
}
