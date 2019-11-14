<?php
/**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/StagePeriodeSoutenanceRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 14/11/2019 14:57
 * @lastUpdate 14/11/2019 14:56
 */

namespace App\Repository;

use App\Entity\StagePeriodeSoutenance;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method StagePeriodeSoutenance|null find($id, $lockMode = null, $lockVersion = null)
 * @method StagePeriodeSoutenance|null findOneBy(array $criteria, array $orderBy = null)
 * @method StagePeriodeSoutenance[]    findAll()
 * @method StagePeriodeSoutenance[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StagePeriodeSoutenanceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StagePeriodeSoutenance::class);
    }
}
