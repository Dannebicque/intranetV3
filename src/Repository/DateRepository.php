<?php

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Date;
use App\Entity\Diplome;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Date|null find($id, $lockMode = null, $lockVersion = null)
 * @method Date|null findOneBy(array $criteria, array $orderBy = null)
 * @method Date[]    findAll()
 * @method Date[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DateRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Date::class);
    }

    public function findByFormation($formation, $nbResult)
    {
        return $this->createQueryBuilder('d')
            ->leftJoin('d.semestres', 's')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'p', 'WITH', 'p.id = a.diplome')
            ->andWhere('p.formation = :formation')
            ->setParameter('formation', $formation)
            ->orderBy('d.date_debut', 'DESC')
            ->setMaxResults($nbResult)
            ->getQuery()
            ->getResult();
    }


}
