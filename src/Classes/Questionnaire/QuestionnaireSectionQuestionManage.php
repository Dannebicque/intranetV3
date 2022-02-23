<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Questionnaire/QuestionnaireSectionQuestionManage.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/11/2021 18:49
 */

namespace App\Classes\Questionnaire;

use App\Entity\QuestionnaireSection;
use App\Entity\QuestionnaireSectionQuestion;
use App\Repository\QuestionnaireQuestionRepository;
use App\Repository\QuestionnaireSectionQuestionRepository;
use Doctrine\ORM\EntityManagerInterface;

class QuestionnaireSectionQuestionManage
{
    protected QuestionnaireSectionQuestionRepository $questionnaireSectionQuestionRepository;
    protected QuestionnaireQuestionRepository $questionnaireQuestionRepository;
    protected EntityManagerInterface $entityManager;

    public function __construct(
        QuestionnaireSectionQuestionRepository $questionnaireSectionQuestionRepository,
        QuestionnaireQuestionRepository $questionnaireQuestionRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->questionnaireSectionQuestionRepository = $questionnaireSectionQuestionRepository;
        $this->questionnaireQuestionRepository = $questionnaireQuestionRepository;
        $this->entityManager = $entityManager;
    }

    public function updateSection(
        string $action,
        int $idQuestion,
        QuestionnaireSection $questionnaireSection
    ): void {
        if ('add' === $action) {
            $questionnaireSectionQuestion = $this->questionnaireQuestionRepository->find($idQuestion);
        } else {
            $questionnaireSectionQuestion = $this->questionnaireSectionQuestionRepository->find($idQuestion);
        }

        if (null !== $questionnaireSectionQuestion) {
            switch ($action) {
                case 'up':
                    $positionInit = $questionnaireSectionQuestion->getOrdre();
                    $autres = $this->questionnaireSectionQuestionRepository->findBy(['section' => $questionnaireSection->getId(), 'ordre' => $positionInit - 1]);
                    foreach ($autres as $autre) {
                        $autre->setOrdre($positionInit);
                    }
                    $questionnaireSectionQuestion->setOrdre($positionInit - 1);
                    break;
                case 'down':
                    $positionInit = $questionnaireSectionQuestion->getOrdre();
                    $autres = $this->questionnaireSectionQuestionRepository->findBy(['section' => $questionnaireSection->getId(), 'ordre' => $positionInit + 1]);
                    foreach ($autres as $autre) {
                        $autre->setOrdre($positionInit);
                    }
                    $questionnaireSectionQuestion->setOrdre($positionInit + 1);
                    break;
                case 'hide':
                    $questionnaireSectionQuestion->setEnabled(false);
                    break;
                case 'show':
                    $questionnaireSectionQuestion->setEnabled(true);
                    break;
                case 'add':
                    $qs = new QuestionnaireSectionQuestion();
                    $qs->setSection($questionnaireSection);
                    $qs->setQuestion($questionnaireSectionQuestion);
                    $max = $this->questionnaireSectionQuestionRepository->findMaxOrdreQuestion($questionnaireSection->getId());
                    $qs->setOrdre($max + 1);
                    $this->entityManager->persist($qs);
                    break;
                case 'remove':
                    $this->entityManager->remove($questionnaireSectionQuestion);
                    break;
            }
            $this->entityManager->flush();
        }
    }
}
