<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/SalleRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 19/11/2019 07:35
// @lastUpdate 15/11/2019 07:13

namespace App\Repository;

use App\Entity\Salle;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Salle|null find($id, $lockMode = null, $lockVersion = null)
 * @method Salle|null findOneBy(array $criteria, array $orderBy = null)
 * @method Salle[]    findAll()
 * @method Salle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SalleRepository extends ServiceEntityRepository
{
    /**
     * SalleRepository constructor.
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Salle::class);
    }
}
