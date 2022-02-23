<?php

namespace App\Repository;

use App\Entity\TypeCours;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TypeCours|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeCours|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeCours[]    findAll()
 * @method TypeCours[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<TypeCours>
 */
class TypeCoursRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypeCours::class);
    }
}
