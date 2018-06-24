<?php

namespace App\Repository;

use App\Entity\Favori;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Favori|null find($id, $lockMode = null, $lockVersion = null)
 * @method Favori|null findOneBy(array $criteria, array $orderBy = null)
 * @method Favori[]    findAll()
 * @method Favori[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FavoriRepository extends ServiceEntityRepository
{
    /**
     * FavoriRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Favori::class);
    }
}
