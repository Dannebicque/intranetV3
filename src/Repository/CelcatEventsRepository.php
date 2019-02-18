<?php

namespace App\Repository;

use App\Entity\CelcatEvents;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method CelcatEvents|null find($id, $lockMode = null, $lockVersion = null)
 * @method CelcatEvents|null findOneBy(array $criteria, array $orderBy = null)
 * @method CelcatEvents[]    findAll()
 * @method CelcatEvents[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CelcatEventsRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, CelcatEvents::class);
    }
}
