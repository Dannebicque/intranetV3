<?php

namespace App\Repository;

use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Ue|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ue|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ue[]    findAll()
 * @method Ue[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UeRepository extends ServiceEntityRepository
{
    /**
     * UeRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Ue::class);
    }

    /**
     * @param Semestre $semestre
     *
     * @return \Doctrine\ORM\QueryBuilder
     */
    public function findBySemestreBuilder(Semestre $semestre): \Doctrine\ORM\QueryBuilder
    {
        return $this->createQueryBuilder('u')
            ->where('u.semestre = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('u.numeroUe', 'ASC');
    }

    /**
     * @param Semestre $semestre
     *
     * @return Ue[]
     */
    public function findBySemestre(Semestre $semestre)
    {

        return $this->findBySemestreBuilder($semestre)->getQuery()->getResult();
    }
}
