<?php

namespace App\Repository;

use App\Entity\Courrier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Courrier|null find($id, $lockMode = null, $lockVersion = null)
 * @method Courrier|null findOneBy(array $criteria, array $orderBy = null)
 * @method Courrier[]    findAll()
 * @method Courrier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CourrierRepository extends ServiceEntityRepository
{
    /**
     * CourrierRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Courrier::class);
    }
}
