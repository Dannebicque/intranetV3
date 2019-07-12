<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/StagePeriodeInterruptionRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 2/16/19 10:06 AM
 */

namespace App\Repository;

use App\Entity\StagePeriodeInterruption;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method StagePeriodeInterruption|null find($id, $lockMode = null, $lockVersion = null)
 * @method StagePeriodeInterruption|null findOneBy(array $criteria, array $orderBy = null)
 * @method StagePeriodeInterruption[]    findAll()
 * @method StagePeriodeInterruption[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StagePeriodeInterruptionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, StagePeriodeInterruption::class);
    }
}
