<?php

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\Hrs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Hrs|null find($id, $lockMode = null, $lockVersion = null)
 * @method Hrs|null findOneBy(array $criteria, array $orderBy = null)
 * @method Hrs[]    findAll()
 * @method Hrs[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HrsRepository extends ServiceEntityRepository
{
    /**
     * HrsRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Hrs::class);
    }

    /**
     * @param $getUser
     * @param $annee
     *
     * @return mixed
     */
    public function findByEnseignant($getUser, $annee)
    {
        return $this->createQueryBuilder('h')
            ->where('h.personnel = :user')
            ->andWhere('h.annee = :annee')
            ->setParameter('user', $getUser)
            ->setParameter('annee', $annee)
            ->orderBy('h.typeHrs', 'ASC')
            ->orderBy('h.semestre', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param Departement $departement
     * @param           $annee
     *
     * @return mixed
     */
    public function findByDepartement(Departement $departement, $annee)
    {
        return $this->createQueryBuilder('h')
            ->where('h.departement = :departement')
            ->andWhere('h.annee = :annee')
            ->setParameter('departement', $departement->getId())
            ->setParameter('annee', $annee)
            ->orderBy('h.typeHrs', 'ASC')
            ->orderBy('h.semestre', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
