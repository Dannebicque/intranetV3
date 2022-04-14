<?php

namespace App\Repository;

use App\Entity\ApcRessourceEnfants;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcRessourceEnfants|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcRessourceEnfants|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcRessourceEnfants[]    findAll()
 * @method ApcRessourceEnfants[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ApcRessourceEnfantsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcRessourceEnfants::class);
    }
}
