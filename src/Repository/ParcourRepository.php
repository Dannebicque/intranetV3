<?php

namespace App\Repository;


use App\Entity\Parcour;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Parcour|null find($id, $lockMode = null, $lockVersion = null)
 * @method Parcour|null findOneBy(array $criteria, array $orderBy = null)
 * @method Parcour[]    findAll()
 * @method Parcour[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ParcourRepository extends ServiceEntityRepository
{
    /**
     * OptionRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Parcour::class);
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
            ->orderBy('u.libelle', 'ASC');

    }

    public function findBySemestre(Semestre $semestre)
    {

        return $this->findBySemestreBuilder($semestre)->getQuery()->getResult();
    }
}
