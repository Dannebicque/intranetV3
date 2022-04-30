<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/TypeHrsRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 11:47
 */

namespace App\Repository;

use App\Entity\TypeHrs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TypeHrs|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeHrs|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeHrs[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<TypeHrs>
 */
class TypeHrsRepository extends ServiceEntityRepository
{
    /**
     * TypeHrsRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypeHrs::class);
    }

    public function findAll(): array
    {
        return $this->findBy([], ['libelle' => 'ASC']);
    }

    public function findAllBuilder(): QueryBuilder
    {
        return $this->createQueryBuilder('t')
            ->orderBy('t.libelle', \Doctrine\Common\Collections\Criteria::ASC);
    }
}
