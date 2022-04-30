<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/questionnaire/administration/QuestionnaireSectionController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 17:38
 */

namespace App\Controller\questionnaire\administration;

use App\Classes\Questionnaire\QuestionnaireSectionQuestionManage;
use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\QuestionnaireSection;
use App\Form\QuestionnaireSectionType;
use App\Repository\QuestionnaireQuestionRepository;
use App\Table\QuestionnaireSectionTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administratif/questionnaire/section', name: 'sadm_questionnaire_section_')]
// #[Route('/administration/questionnaire/section', name: 'adm_questionnaire_section_')]
class QuestionnaireSectionController extends BaseController
{
    /**
     * @throws \JsonException
     */
    #[Route('/', name: 'index', options: ['expose' => true], methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        $table = $this->createTable(QuestionnaireSectionTableType::class);

        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('questionnaire/administration/questionnaire_section/index.html.twig', [
            'table' => $table,
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(
        QuestionnaireRegistry $questionnaireRegistry,
        Request $request
    ): Response {
        $questionnaireSection = new QuestionnaireSection();
        $form = $this->createForm(QuestionnaireSectionType::class, $questionnaireSection, [
            'listeSection' => $questionnaireRegistry->getAllTypeSections(),
            'listeSectionAdapter' => $questionnaireRegistry->getAllSectionsAdapter(),
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $questionnaireSection->setConfig([
                'sectionAdapter' => $request->request->get('questionnaire_section')['sectionAdapter'],
            ]);
            $this->entityManager->persist($questionnaireSection);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire.administration.section.add.success.flash');

            return $this->redirectToRoute('sadm_questionnaire_section_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('questionnaire/administration/questionnaire_section/new.html.twig', [
            'questionnaire_section' => $questionnaireSection,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(
        QuestionnaireQuestionRepository $questionnaireQuestionRepository,
        QuestionnaireSection $questionnaireSection
    ): Response {
        $questions = $questionnaireQuestionRepository->findAll();

        return $this->render('questionnaire/administration/questionnaire_section/show.html.twig', [
            'questionnaire_section' => $questionnaireSection,
            'questions' => $questions,
        ]);
    }

    #[Route('/question/manage/{id}', name: 'question_manage', methods: ['GET'])]
    public function questionManage(
        Request $request,
        QuestionnaireQuestionRepository $questionnaireQuestionRepository,
        QuestionnaireSectionQuestionManage $questionManage,
        QuestionnaireSection $questionnaireSection
    ): Response {
        $questionManage->updateSection($request->query->get('action'), (int) $request->query->get('question'),
            $questionnaireSection);

        return $this->render('questionnaire/administration/questionnaire_section/_tableauQuestion.html.twig', [
            'qualiteSectionQuestions' => $questionnaireSection->getQualiteSectionQuestions(),
            'questions' => $questionnaireQuestionRepository->findAll(),
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(
        QuestionnaireRegistry $questionnaireRegistry,
        Request $request,
        QuestionnaireSection $questionnaireSection
    ): Response {
        $form = $this->createForm(QuestionnaireSectionType::class, $questionnaireSection,
            ['listeSection' => $questionnaireRegistry->getAllSectionsAdapter()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire.administration.section.edit.success.flash');
            // todo: sadm
            return $this->redirectToRoute('adm_questionnaire_section_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('questionnaire/administration/questionnaire_section/edit.html.twig', [
            'questionnaire_section' => $questionnaireSection,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST', 'DELETE'])]
    public function delete(Request $request, QuestionnaireSection $questionnaireSection): Response
    {
        if ($this->isCsrfTokenValid('delete'.$questionnaireSection->getId(), $request->request->get('_token'))) {
            $id = $questionnaireSection->getId();
            foreach ($questionnaireSection->getQualiteSectionQuestions() as $questionnaire) {
                $this->entityManager->remove($questionnaire);
            }
            foreach ($questionnaireSection->getQualiteQuestionnaireSections() as $questionnaire) {
                $this->entityManager->remove($questionnaire);
            }
            $this->entityManager->remove($questionnaireSection);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS,
                'questionnaire.administration.section.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'questionnaire.administration.section.delete.error.flash');

        return $this->redirectToRoute('sadm_questionnaire_section_index', [], Response::HTTP_SEE_OTHER);
    }

    // todo: duplicate, export
}
