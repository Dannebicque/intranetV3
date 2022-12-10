<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuestionnaireQuestionnaireSectionRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/09/2021 19:17
 */

namespace App\Repository;

use App\Entity\QuestionnaireQuestionnaireSection;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @deprecated Use Quest...Repository à la place
 * @method QuestionnaireQuestionnaireSection|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireQuestionnaireSection|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireQuestionnaireSection[]    findAll()
 * @method QuestionnaireQuestionnaireSection[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset
 *         = null)
 * @extends ServiceEntityRepository<QuestionnaireQuestionnaireSection>
 */
class QuestionnaireQuestionnaireSectionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireQuestionnaireSection::class);
    }

    /**
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\NoResultException
     */
    public function findMaxOrdreSection(?int $getId): ?int
    {
        $qb = $this->createQueryBuilder('q');
        $qb->select('MAX(q.ordre) as max');
        if ($getId) {
            $qb->andWhere('q.questionnaireQualite = :id')->setParameter('id', $getId);
        }

        return $qb->getQuery()->getSingleScalarResult();
    }
}
