<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/RddDiplomeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Repository;

use App\Entity\RddDiplome;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RddDiplome|null find($id, $lockMode = null, $lockVersion = null)
 * @method RddDiplome|null findOneBy(array $criteria, array $orderBy = null)
 * @method RddDiplome[]    findAll()
 * @method RddDiplome[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RddDiplomeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RddDiplome::class);
    }

    /**
     * @return int|mixed|string
     * @throws NonUniqueResultException
     *
     * @throws NoResultException
     */
    public function countComplet()
    {
        return $this->createQueryBuilder('p')
            ->where('p.confirme = true')
            ->select('COUNT(p)')
            ->getQuery()
            ->getSingleScalarResult();
    }
}
