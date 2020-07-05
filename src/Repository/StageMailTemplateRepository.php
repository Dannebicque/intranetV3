<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/StageMailTemplateRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:13

namespace App\Repository;

use App\Entity\StageMailTemplate;
use App\Entity\StagePeriode;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;

/**
 * @method StageMailTemplate|null find($id, $lockMode = null, $lockVersion = null)
 * @method StageMailTemplate|null findOneBy(array $criteria, array $orderBy = null)
 * @method StageMailTemplate[]    findAll()
 * @method StageMailTemplate[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StageMailTemplateRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
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
