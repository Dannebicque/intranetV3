<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/TypeHrsRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2022 14:27
 */

namespace App\Repository;

use App\Entity\TypeHrs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Criteria;
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
            ->orderBy('t.libelle', Criteria::ASC);
    }
}
