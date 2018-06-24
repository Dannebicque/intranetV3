<?php

namespace App\Repository;

use App\Entity\Ppn;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Ppn|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ppn|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ppn[]    findAll()
 * @method Ppn[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PpnRepository extends ServiceEntityRepository
{
    /**
     * PpnRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Ppn::class);
    }
}
