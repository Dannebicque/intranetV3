<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/administration/QuestionnaireSectionController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/10/2022 09:53
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

#[Route('/{type}/questionnaire/section', name: 'adm_questionnaire_section_', requirements: ['type' => 'administratif|administration'], defaults: ['type' => 'administratif'])]
class QuestionnaireSectionController extends BaseController
{
    /**
     * @throws \JsonException
     */
    #[Route('/', name: 'index', options: ['expose' => true], methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        $table = $this->createTable(QuestionnaireSectionTableType::class, [
            'type' => $request->get('type'),
            'departement' => 'administration' === $request->get('type') ? $this->getDepartement() : null,
        ]);

        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('questionnaire/administration/questionnaire_section/index.html.twig', [
            'table' => $table,
            'type' => $request->get('type'),
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
            $t = $request->request->all();
            $t = array_shift($t);
            $questionnaireSection->setConfig([
                'sectionAdapter' => $t['sectionAdapter'],
            ]);
            $this->entityManager->persist($questionnaireSection);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire.administration.section.add.success.flash');

            return $this->redirectToRoute('adm_questionnaire_section_index', ['type' => $request->get('type')], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('questionnaire/administration/questionnaire_section/new.html.twig', [
            'questionnaire_section' => $questionnaireSection,
            'form' => $form,
            'type' => $request->get('type'),
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(
        Request $request,
        QuestionnaireQuestionRepository $questionnaireQuestionRepository,
        QuestionnaireSection $questionnaireSection
    ): Response {
        $questions = $questionnaireQuestionRepository->findAll();

        return $this->render('questionnaire/administration/questionnaire_section/show.html.twig', [
            'questionnaire_section' => $questionnaireSection,
            'questions' => $questions,
            'type' => $request->get('type'),
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
            'type' => $request->get('type'),
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
            return $this->redirectToRoute('adm_questionnaire_section_index', ['type' => $request->get('type')], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('questionnaire/administration/questionnaire_section/edit.html.twig', [
            'questionnaire_section' => $questionnaireSection,
            'form' => $form,
            'type' => $request->get('type'),
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST', 'DELETE'])]
    public function delete(Request $request, QuestionnaireSection $questionnaireSection): Response
    {
        if ($this->isCsrfTokenValid('delete'.$questionnaireSection->getId(), $request->server->get('HTTP_X_CSRF_TOKEN'))) {
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

        return $this->redirectToRoute('adm_questionnaire_section_index', ['type' => $request->get('type')], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}/duplicate', name: 'duplicate', methods: ['GET'])]
    public function duplicate(QuestionnaireSection $questionnaireSection): Response
    {
        // todo: duplicate, export
    }


}
