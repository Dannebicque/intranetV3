<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/CreationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Controller\questionnaire;

use App\Components\Questionnaire\TypeQuestion\TypeQcu;
use App\Controller\BaseController;
use App\Entity\QuestQuestion;
use App\Entity\QuestSection;
use App\Form\QuestSectionType;
use App\Repository\QuestQuestionRepository;
use App\Repository\QuestSectionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/{type}/questionnaire/creation/section', name: 'adm_questionnaire_creation_section_', requirements: ['type' => 'administratif|administration'], defaults: ['type' => 'administratif'])]
class CreationSectionController extends BaseController
{
    #[Route('/{section}', name: 'index')]
    public function section(
        QuestSectionRepository $questSectionRepository,
        QuestQuestionRepository $questionRepository,
        Request $request,
        QuestSection $section
    ) {
        switch ($request->query->get('action')) {
            case 'edit':
                $form = $this->createForm(QuestSectionType::class, $section);

                return $this->render('questionnaire/creation/section/edit.html.twig', [
                    'section' => $section,
                    'form' => $form->createView(),
                ]);
            case 'delete':
                $sections = $questSectionRepository->findsectionsSuivantes($section);

                foreach ($section->getQuestQuestions() as $question) {
                    $this->entityManager->remove($question);
                }

                $section->getQuestionnaire()->removeQuestSection($section);
                $this->entityManager->remove($section);

                foreach ($sections as $s) {
                    $s->setOrdre($s->getOrdre() - 1);
                }

                $this->entityManager->flush();

                return $this->json(true);
            case 'refreshContent':
                $liste = $questionRepository->findByDepartementOrNull($this->getDepartement());
                break;
            case 'left':
                $sectionOld = $questSectionRepository->findOneBy([
                    'ordre' => $section->getOrdre() - 1,
                    'questionnaire' => $section->getQuestionnaire(),
                ]);
                $section->setOrdre($section->getOrdre() - 1);
                if (null !== $sectionOld) {
                    $sectionOld->setOrdre($sectionOld->getOrdre() + 1);
                }

                $this->entityManager->flush();

                return $this->json(true);
            case 'right':
                $sectionOld = $questSectionRepository->findOneBy([
                    'ordre' => $section->getOrdre() + 1,
                    'questionnaire' => $section->getQuestionnaire(),
                ]);

                $section->setOrdre($section->getOrdre() + 1);
                if (null !== $sectionOld) {
                    $sectionOld->setOrdre($sectionOld->getOrdre() - 1);
                }
                $this->entityManager->flush();

                return $this->json(true);
            case 'sauvegarde':
//                $typeQuestion = $questionnaireRegistry->getTypeQuestion($question->getType());
//                $typeQuestion->sauvegarde($question, $request, $this->entityManager);
//                $this->entityManager->flush();
                return $this->json(true);
            case 'addQuestion':
                $idQuestion = $request->query->get('question');
                $ordre = $questionRepository->getMaxOrdre($section) + 1;

                if ('new' === $idQuestion) {
                    $question = new QuestQuestion();
                    $question->setLibelle('Nouvelle question ' . $ordre);
                    $question->setOrdre($ordre);
                    $question->setSection($section);
                    $question->setType(TypeQcu::class);
                    $this->entityManager->persist($question);
                } else {
                    $question = $questionRepository->find($idQuestion);
                    if (null !== $question) {
                        $newQuestion = clone $question;
                        $newQuestion->setOrdre($ordre);
                        $newQuestion->setSection($section); // todo: cloner les réponses
                        $this->entityManager->persist($newQuestion);
                    }
                }

                $this->entityManager->flush();
                $liste = $questionRepository->findByDepartementOrNull($this->getDepartement());
                break;
        }

        return $this->render('questionnaire/creation/section/section.html.twig', [
            'section' => $section,
            'liste' => $liste,
        ]);
    }
}
