<?php

namespace App\Repository;

use App\Entity\CelcatCalendrier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method CelcatCalendrier|null find($id, $lockMode = null, $lockVersion = null)
 * @method CelcatCalendrier|null findOneBy(array $criteria, array $orderBy = null)
 * @method CelcatCalendrier[]    findAll()
 * @method CelcatCalendrier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CelcatCalendrierRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, CelcatCalendrier::class);
    }
}
