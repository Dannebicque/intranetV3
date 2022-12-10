<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/QuestionnairePersonnelRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/05/2022 14:45
 */

namespace App\Repository;

use App\Entity\Etudiant;
use App\Entity\QuestionnaireEtudiant;
use App\Entity\QuestionnairePersonnel;
use App\Entity\QuestionnaireQualite;
use App\Entity\QuestionnaireQuizz;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @deprecated Use Quest...Repository à la place
 * @method QuestionnairePersonnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnairePersonnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnairePersonnel[]    findAll()
 * @method QuestionnairePersonnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<QuestionnairePersonnel>
 */
class QuestionnairePersonnelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnairePersonnel::class);
    }

    /**
     * @throws NoResultException
     * @throws NonUniqueResultException
     */
    public function compteReponse(QuestionnaireQualite $qualiteQuestionnaire): null|int|string
    {
        $qb = $this->createQueryBuilder('prov');

        return $this->createQueryBuilder('q')
            ->select($qb->expr()->countDistinct('q.etudiant'))
            ->innerJoin(QuestionnaireQualite::class, 'qq', 'WITH', 'q.questionnaireQualite = qq.id')
            ->where('qq.id = :questionnaire')
            ->setParameter('questionnaire', $qualiteQuestionnaire->getId())
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function findByPersonnelArray(Etudiant $etudiant): array
    {
        $r = $this->createQueryBuilder('q')
            ->where('q.etudiant = :etudiant')
            ->setParameter('etudiant', $etudiant->getId())
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var QuestionnaireEtudiant $q */
        foreach ($r as $q) {
            if (null !== $q->getQuestionnaireQualite()) {
                $t[$q->getQuestionnaireQualite()->getId()] = $q;
            }
        }

        return $t;
    }

    public function findByQuestionnaire(QuestionnaireQuizz $questionnaire): array
    {
        return $this->createQueryBuilder('q')
            ->where('q.questionnaireQuizz = :questionnaire')
            ->setParameter('questionnaire', $questionnaire->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByQuestionnaireQualite(QuestionnaireQualite $questionnaire): array
    {
        return $this->createQueryBuilder('q')
            ->where('q.questionnaireQualite = :questionnaire')
            ->setParameter('questionnaire', $questionnaire->getId())
            ->getQuery()
            ->getResult();
    }
}
