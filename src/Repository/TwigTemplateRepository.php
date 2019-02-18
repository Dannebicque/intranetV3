<?php

namespace App\Repository;

use App\Entity\TwigTemplate;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TwigTemplate|null find($id, $lockMode = null, $lockVersion = null)
 * @method TwigTemplate|null findOneBy(array $criteria, array $orderBy = null)
 * @method TwigTemplate[]    findAll()
 * @method TwigTemplate[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TwigTemplateRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TwigTemplate::class);
    }
}
