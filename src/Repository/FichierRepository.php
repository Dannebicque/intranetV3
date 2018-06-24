<?php

namespace App\Repository;

use App\Entity\Fichier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Fichier|null find($id, $lockMode = null, $lockVersion = null)
 * @method Fichier|null findOneBy(array $criteria, array $orderBy = null)
 * @method Fichier[]    findAll()
 * @method Fichier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FichierRepository extends ServiceEntityRepository
{
    /**
     * FichierRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Fichier::class);
    }
}
