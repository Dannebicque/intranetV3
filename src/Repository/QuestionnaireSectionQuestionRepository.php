<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuestionnaireSectionQuestionRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/09/2021 19:17
 */

namespace App\Repository;

use App\Entity\QuestionnaireSectionQuestion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @deprecated Use Quest...Repository à la place
 * @method QuestionnaireSectionQuestion|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireSectionQuestion|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireSectionQuestion[]    findAll()
 * @method QuestionnaireSectionQuestion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset =
 *         null)
 * @extends ServiceEntityRepository<QuestionnaireSectionQuestion>
 */
class QuestionnaireSectionQuestionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireSectionQuestion::class);
    }

    /**
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\NoResultException
     */
    public function findMaxOrdreQuestion(?int $getId): ?int
    {
        $qb = $this->createQueryBuilder('qsq');
        $qb->select('MAX(qsq.ordre) as max');
        if ($getId) {
            $qb->andWhere('qsq.id = :id')->setParameter('id', $getId);
        }

        return $qb->getQuery()->getSingleScalarResult();
    }
}
