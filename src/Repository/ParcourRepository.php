<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/ParcourRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 4/28/19 8:46 PM
 */

namespace App\Repository;


use App\Entity\Parcour;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
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
     * @return QueryBuilder
     */
    public function findBySemestreBuilder(Semestre $semestre): QueryBuilder
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
