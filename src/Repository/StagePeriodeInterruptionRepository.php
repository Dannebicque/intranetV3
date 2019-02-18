<?php

namespace App\Repository;

use App\Entity\StagePeriodeInterruption;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method StagePeriodeInterruption|null find($id, $lockMode = null, $lockVersion = null)
 * @method StagePeriodeInterruption|null findOneBy(array $criteria, array $orderBy = null)
 * @method StagePeriodeInterruption[]    findAll()
 * @method StagePeriodeInterruption[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StagePeriodeInterruptionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, StagePeriodeInterruption::class);
    }
}
