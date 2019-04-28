<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/TypeGroupeRepository.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:46 PM
 *  * @lastUpdate 4/28/19 8:42 PM
 *  *
 *
 */

namespace App\Repository;

use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TypeGroupe|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeGroupe|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeGroupe[]    findAll()
 * @method TypeGroupe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeGroupeRepository extends ServiceEntityRepository
{
    /**
     * TypeGroupeRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TypeGroupe::class);
    }

    /**
     * @param $semestre
     *
     * @return QueryBuilder
     */
    public function findBySemestreBuilder(Semestre $semestre): QueryBuilder
    {
        return $this->createQueryBuilder('t')
            ->where('t.semestre = :semestre')
            ->setParameter('semestre', $semestre);
    }

    public function findBySemestre(Semestre $semestre)
    {
        return $this->findBySemestreBuilder($semestre)->getQuery()->getResult();
    }
}
