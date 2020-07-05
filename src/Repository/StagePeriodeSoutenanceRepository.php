<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/StagePeriodeSoutenanceRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:13

namespace App\Repository;

use App\Entity\StagePeriodeSoutenance;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

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
