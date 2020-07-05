<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/StagePeriodeInterruptionRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:13

namespace App\Repository;

use App\Entity\StagePeriodeInterruption;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method StagePeriodeInterruption|null find($id, $lockMode = null, $lockVersion = null)
 * @method StagePeriodeInterruption|null findOneBy(array $criteria, array $orderBy = null)
 * @method StagePeriodeInterruption[]    findAll()
 * @method StagePeriodeInterruption[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StagePeriodeInterruptionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StagePeriodeInterruption::class);
    }
}
