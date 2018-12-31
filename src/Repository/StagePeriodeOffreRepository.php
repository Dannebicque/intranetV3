<?php

namespace App\Repository;

use App\Entity\StagePeriode;
use App\Entity\StagePeriodeOffre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method StagePeriodeOffre|null find($id, $lockMode = null, $lockVersion = null)
 * @method StagePeriodeOffre|null findOneBy(array $criteria, array $orderBy = null)
 * @method StagePeriodeOffre[]    findAll()
 * @method StagePeriodeOffre[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StagePeriodeOffreRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, StagePeriodeOffre::class);
    }

    public function findByStagePeriode(StagePeriode $stagePeriode)
    {
    }
}
