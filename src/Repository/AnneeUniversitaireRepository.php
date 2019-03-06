<?php

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\Formation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AnneeUniversitaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method AnneeUniversitaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method AnneeUniversitaire[]    findAll()
 * @method AnneeUniversitaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AnneeUniversitaireRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AnneeUniversitaire::class);
    }
}
