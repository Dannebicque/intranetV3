<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/StagePeriodeOffreRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 3/24/19 9:00 AM
 */

namespace App\Repository;

use App\Entity\StagePeriode;
use App\Entity\StagePeriodeOffre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method StagePeriodeOffre|null find($id, $lockMode = null, $lockVersion = null)
 * @method StagePeriodeOffre|null findOneBy(array $criteria, array $orderBy = null)
 * @method StagePeriodeOffre[]    findAll()
 * @method StagePeriodeOffre[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StagePeriodeOffreRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, StagePeriodeOffre::class);
    }

    public function findByStagePeriode(StagePeriode $stagePeriode)
    {
        return $this->createQueryBuilder('o')
            ->where('o.stagePeriodes = :periode')
            ->setParameter('periode', $stagePeriode->getId())
            ->getQuery()
            ->getResult();
    }
}
