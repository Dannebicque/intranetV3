<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Questionnaire/QuestionnaireSectionQuestionManage.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/11/2021 18:49
 */

namespace App\Classes\Questionnaire;

use App\Entity\QuestionnaireQualite;
use App\Entity\QuestionnaireQuestionnaireSection;
use App\Repository\QuestionnaireQuestionnaireSectionRepository;
use App\Repository\QuestionnaireSectionRepository;
use Doctrine\ORM\EntityManagerInterface;

class QuestionnaireQualiteSectionManage
{
    protected QuestionnaireQuestionnaireSectionRepository $questionnaireQuestionnaireSectionRepository;
    protected QuestionnaireSectionRepository $questionnaireSectionRepository;
    protected EntityManagerInterface $entityManager;

    public function __construct(
        QuestionnaireQuestionnaireSectionRepository $questionnaireQuestionnaireSectionRepository,
        QuestionnaireSectionRepository $questionnaireSectionRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->questionnaireQuestionnaireSectionRepository = $questionnaireQuestionnaireSectionRepository;
        $this->questionnaireSectionRepository = $questionnaireSectionRepository;
        $this->entityManager = $entityManager;
    }

    public function updateQuestionnaire(
        string $action,
        int $idSection,
        QuestionnaireQualite $questionnaireQualite
    ) {
        if ('add' === $action) {
            $questionnaireSection = $this->questionnaireSectionRepository->find($idSection);
        } else {
            $questionnaireSection = $this->questionnaireQuestionnaireSectionRepository->find($idSection);
        }

        if (null !== $questionnaireSection) {
            switch ($action) {
                case 'up':
                    $positionInit = $questionnaireSection->getOrdre();
                    $autres = $this->questionnaireQuestionnaireSectionRepository->findBy(['questionnaireQualite' => $questionnaireQualite->getId(), 'ordre' => $positionInit - 1]);
                    foreach ($autres as $autre) {
                        $autre->setOrdre($positionInit);
                    }
                    $questionnaireSection->setOrdre($positionInit - 1);
                    break;
                case 'down':
                    $positionInit = $questionnaireSection->getOrdre();
                    $autres = $this->questionnaireQuestionnaireSectionRepository->findBy(['questionnaireQualite' => $questionnaireQualite->getId(), 'ordre' => $positionInit + 1]);
                    foreach ($autres as $autre) {
                        $autre->setOrdre($positionInit);
                    }
                    $questionnaireSection->setOrdre($positionInit + 1);
                    break;
                case 'hide':
                    $questionnaireSection->setEnabled(false);
                    break;
                case 'show':
                    $questionnaireSection->setEnabled(true);
                    break;
                case 'add':
                    $qs = new QuestionnaireQuestionnaireSection();
                    $qs->setSection($questionnaireSection);
                    $qs->setQuestionnaireQualite($questionnaireQualite);
                    $max = $this->questionnaireQuestionnaireSectionRepository->findMaxOrdreSection($questionnaireQualite->getId());
                    $qs->setOrdre($max + 1);
                    $this->entityManager->persist($qs);
                    break;
                case 'remove':
                    $this->entityManager->remove($questionnaireSection);
                    break;
            }
            $this->entityManager->flush();
        }
    }
}
