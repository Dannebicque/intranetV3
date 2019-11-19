<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/PpnRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 19/11/2019 07:35
// @lastUpdate 15/11/2019 07:13

namespace App\Repository;

use App\Entity\Diplome;
use App\Entity\Ppn;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\QueryBuilder;

/**
 * @method Ppn|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ppn|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ppn[]    findAll()
 * @method Ppn[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PpnRepository extends ServiceEntityRepository
{
    /**
     * PpnRepository constructor.
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Ppn::class);
    }

    /**
     * @param Diplome $diplome
     *
     * @return QueryBuilder
     */
    public function findByDiplomeBuilder(Diplome $diplome): QueryBuilder
    {
        return $this->createQueryBuilder('p')
            ->where('p.diplome = :diplome')
            ->setParameter('diplome', $diplome->getId());
    }
}
