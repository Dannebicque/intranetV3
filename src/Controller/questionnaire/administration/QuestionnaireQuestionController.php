<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/questionnaire/administration/QuestionnaireQuestionController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/10/2021 11:53
 */

namespace App\Controller\questionnaire\administration;

use App\Controller\BaseController;
use App\Entity\QuestionnaireQuestion;
use App\Form\QuestionnaireQuestionType;
use App\Repository\QuestionnaireQuestionRepository;
use App\Table\QuestionnaireQuestionTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administratif/questionnaire/question', name: 'sadm_questionnaire_question_')]
#[Route('/administration/questionnaire/question', name: 'adm_questionnaire_question_')]
class QuestionnaireQuestionController extends BaseController
{
    #[Route('/', name: 'index', methods: ['GET', 'POST'], options: ['expose' => true])]
    public function index(Request $request): Response
    {
        $table = $this->createTable(QuestionnaireQuestionTableType::class);

        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('questionnaire/administration/questionnaire_question/index.html.twig', [
            'table' => $table
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $questionnaireQuestion = new QuestionnaireQuestion($this->getUser());
        $form = $this->createForm(QuestionnaireQuestionType::class, $questionnaireQuestion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($questionnaireQuestion);
            $entityManager->flush();

//todo: sadm
            return $this->redirectToRoute('adm_questionnaire_question_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('questionnaire/administration/questionnaire_question/new.html.twig', [
            'questionnaire_question' => $questionnaireQuestion,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(QuestionnaireQuestion $questionnaireQuestion): Response
    {
        return $this->render('questionnaire/administration/questionnaire_question/show.html.twig', [
            'questionnaire_question' => $questionnaireQuestion,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, QuestionnaireQuestion $questionnaireQuestion): Response
    {
        $form = $this->createForm(QuestionnaireQuestionType::class, $questionnaireQuestion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

//todo: sadm
            return $this->redirectToRoute('adm_questionnaire_question_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('questionnaire/administration/questionnaire_question/edit.html.twig', [
            'questionnaire_question' => $questionnaireQuestion,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, QuestionnaireQuestion $questionnaireQuestion): Response
    {
        if ($this->isCsrfTokenValid('delete' . $questionnaireQuestion->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($questionnaireQuestion);
            $entityManager->flush();
        }

//todo: sadm
        return $this->redirectToRoute('adm_questionnaire_question_index', [], Response::HTTP_SEE_OTHER);
    }

    //todo: duplicate export
}
