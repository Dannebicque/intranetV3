<?php

namespace App\Repository;

use App\Entity\AlternancePlanning;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AlternancePlanning|null find($id, $lockMode = null, $lockVersion = null)
 * @method AlternancePlanning|null findOneBy(array $criteria, array $orderBy = null)
 * @method AlternancePlanning[]    findAll()
 * @method AlternancePlanning[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AlternancePlanningRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AlternancePlanning::class);
    }
}
