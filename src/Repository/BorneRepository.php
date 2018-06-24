<?php

namespace App\Repository;

use App\Entity\Borne;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Borne|null find($id, $lockMode = null, $lockVersion = null)
 * @method Borne|null findOneBy(array $criteria, array $orderBy = null)
 * @method Borne[]    findAll()
 * @method Borne[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BorneRepository extends ServiceEntityRepository
{
    /**
     * BorneRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Borne::class);
    }
}
