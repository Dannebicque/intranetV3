<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/StageMailTemplateRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

namespace App\Repository;

use App\Entity\StageMailTemplate;
use App\Entity\StagePeriode;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method StageMailTemplate|null find($id, $lockMode = null, $lockVersion = null)
 * @method StageMailTemplate|null findOneBy(array $criteria, array $orderBy = null)
 * @method StageMailTemplate[]    findAll()
 * @method StageMailTemplate[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<StageMailTemplate>
 */
class StageMailTemplateRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StageMailTemplate::class);
    }

    /**
     *
     * @throws NonUniqueResultException
     */
    public function findEventPeriode($codeEvent, StagePeriode $stagePeriode): ?StageMailTemplate
    {
        return $this->createQueryBuilder('s')
            ->where('s.stagePeriode = :stagePeriode')
            ->andWhere('s.event = :code')
            ->setParameter('stagePeriode', $stagePeriode->getId())
            ->setParameter('code', $codeEvent)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findByStagePeriode(StagePeriode $stagePeriode)
    {
        return $this->createQueryBuilder('s')
            ->where('s.stagePeriode = :stagePeriode')
            ->setParameter('stagePeriode', $stagePeriode->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByStagePeriodeArray(StagePeriode $stagePeriode)
    {
        $mails = $this->findByStagePeriode($stagePeriode);
        $t = [];

        foreach ($mails as $mail) {
            $t[$mail->getEvent()] = $mail;
        }

        return $t;
    }

    public function findByDefautArray()
    {
        $mails = $this->createQueryBuilder('s')
            ->where('s.defaut = true')
            ->getQuery()
            ->getResult();

        $t = [];

        foreach ($mails as $mail) {
            $t[$mail->getEvent()] = $mail;
        }

        return $t;
    }
}
