<?php

namespace App\Repository;

use App\Entity\CreneauCours;
use App\Entity\Departement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method CreneauCours|null find($id, $lockMode = null, $lockVersion = null)
 * @method CreneauCours|null findOneBy(array $criteria, array $orderBy = null)
 * @method CreneauCours[]    findAll()
 * @method CreneauCours[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CreneauCoursRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, CreneauCours::class);
    }

    public function findByAnneeDepartement(Departement $departement, $anneeUniversitaire)
    {
        return $this->createQueryBuilder('c')
            ->where('c.anneeUniversitaire = :annee')
            ->andWhere('c.departement = :departement')
            ->setParameter('annee', $anneeUniversitaire)
            ->setParameter('departement', $departement->getId())
            ->getQuery()
            ->getResult();
    }


}
