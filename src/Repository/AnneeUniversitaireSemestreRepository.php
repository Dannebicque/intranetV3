<?php

namespace App\Repository;

use App\Entity\AnneeUniversitaireSemestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AnneeUniversitaireSemestre|null find($id, $lockMode = null, $lockVersion = null)
 * @method AnneeUniversitaireSemestre|null findOneBy(array $criteria, array $orderBy = null)
 * @method AnneeUniversitaireSemestre[]    findAll()
 * @method AnneeUniversitaireSemestre[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AnneeUniversitaireSemestreRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AnneeUniversitaireSemestre::class);
    }
}
