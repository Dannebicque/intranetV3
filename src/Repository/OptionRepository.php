<?php

namespace App\Repository;

use App\Entity\Parcour;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Parcour|null find($id, $lockMode = null, $lockVersion = null)
 * @method Parcour|null findOneBy(array $criteria, array $orderBy = null)
 * @method Parcour[]    findAll()
 * @method Parcour[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OptionRepository extends ServiceEntityRepository
{
    /**
     * OptionRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Parcour::class);
    }
}
