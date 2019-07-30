<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/StageMailTemplateRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 30/07/2019 08:40
 * @lastUpdate 24/07/2019 12:11
 */

namespace App\Repository;

use App\Entity\StageMailTemplate;
use App\Entity\StagePeriode;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method StageMailTemplate|null find($id, $lockMode = null, $lockVersion = null)
 * @method StageMailTemplate|null findOneBy(array $criteria, array $orderBy = null)
 * @method StageMailTemplate[]    findAll()
 * @method StageMailTemplate[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StageMailTemplateRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, StageMailTemplate::class);
    }

    /**
     * @param              $codeEvent
     * @param StagePeriode $stagePeriode
     *
     * @return StageMailTemplate|null
     * @throws NonUniqueResultException
     *
     */
    public function findEventPeriode($codeEvent, StagePeriode $stagePeriode): ?StageMailTemplate
    {
        return $this->createQueryBuilder('s')
            ->where('s.stagePeriode = :stagePeriode')
            ->andWhere('s.event = :code')
            ->setParameter('stagePeriode', $stagePeriode)
            ->setParameter('code', $codeEvent)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
