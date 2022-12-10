<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuestionnaireReponseRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\QuestionnaireQuestion;
use App\Entity\QuestionnaireQuestionnaireSection;
use App\Entity\QuestionnaireQuizz;
use App\Entity\QuestionnaireReponse;
use App\Entity\QuestionnaireSection;
use App\Entity\QuestionnaireSectionQuestion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @deprecated Use Quest...Repository à la place
 * @method QuestionnaireReponse|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireReponse|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireReponse[]    findAll()
 * @method QuestionnaireReponse[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<QuestionnaireReponse>
 */
class QuestionnaireReponseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireReponse::class);
    }

    public function findByQuizzArray(QuestionnaireQuizz $questionnaire): array
    {
        /*
         * SELECT * FROM questionnaire_reponse
INNER JOIN questionnaire_question ON questionnaire_reponse.question_id = questionnaire_question.id
INNER JOIN questionnaire_section_question ON questionnaire_question.id = questionnaire_section_question.question_id
INNER JOIN questionnaire_section ON questionnaire_section.id = questionnaire_section_question.section_id
INNER JOIN questionnaire_questionnaire_section ON questionnaire_section.id = questionnaire_questionnaire_section.section_id
WHERE questionnaire_questionnaire_section.questionnaire_quizz_id = 1
         */
        $query = $this->createQueryBuilder('r')
            ->innerJoin(QuestionnaireQuestion::class, 'q', 'WITH', 'r.question = q.id')
            ->innerJoin(QuestionnaireSectionQuestion::class, 'qs', 'WITH', 'q.id = qs.question')
            ->innerJoin(QuestionnaireSection::class, 's', 'WITH', 'qs.section = s.id')
            ->innerJoin(QuestionnaireQuestionnaireSection::class, 't', 'WITH', 's.id = t.section')
            ->where('t.questionnaireQuizz = :questionnaire')
            ->setParameter('questionnaire', $questionnaire->getId())
            ->getQuery()
            ->getResult();

        return $this->arrayReponse($query);
    }

    private function arrayReponse(array $reponses): array
    {
        $t = [];
        foreach ($reponses as $reponse) {
            $t[$reponse->getId()] = $reponse;
        }

        return $t;
    }
}
