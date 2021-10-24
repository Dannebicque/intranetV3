<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/questionnaire/administration/QuestionnaireSectionController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/10/2021 11:53
 */

namespace App\Controller\questionnaire\administration;

use App\Controller\BaseController;
use App\Entity\QuestionnaireSection;
use App\Form\QuestionnaireSectionType;
use App\Repository\QuestionnaireSectionRepository;
use App\Table\QuestionnaireSectionTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administratif/questionnaire/section', name: 'sadm_questionnaire_section_')]
#[Route('/administration/questionnaire/section', name: 'adm_questionnaire_section_')]
class QuestionnaireSectionController extends BaseController
{
    #[Route('/', name: 'index', methods: ['GET', 'POST'], options: ['expose' => true])]
    public function index(Request $request): Response
    {
        $table = $this->createTable(QuestionnaireSectionTableType::class);

        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('questionnaire/administration/questionnaire_section/index.html.twig', [
            'table' => $table
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $questionnaireSection = new QuestionnaireSection();
        $form = $this->createForm(QuestionnaireSectionType::class, $questionnaireSection);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($questionnaireSection);
            $entityManager->flush();

//todo: sadm
            return $this->redirectToRoute('adm_questionnaire_section_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('questionnaire/administration/questionnaire_section/new.html.twig', [
            'questionnaire_section' => $questionnaireSection,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(QuestionnaireSection $questionnaireSection): Response
    {
        return $this->render('questionnaire/administration/questionnaire_section/show.html.twig', [
            'questionnaire_section' => $questionnaireSection,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, QuestionnaireSection $questionnaireSection): Response
    {
        $form = $this->createForm(QuestionnaireSectionType::class, $questionnaireSection);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

//todo: sadm
            return $this->redirectToRoute('adm_questionnaire_section_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('questionnaire/administration/questionnaire_section/edit.html.twig', [
            'questionnaire_section' => $questionnaireSection,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, QuestionnaireSection $questionnaireSection): Response
    {
        if ($this->isCsrfTokenValid('delete' . $questionnaireSection->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($questionnaireSection);
            $entityManager->flush();
        }

//todo: sadm
        return $this->redirectToRoute('adm_questionnaire_section_index', [], Response::HTTP_SEE_OTHER);
    }
    //todo: duplicate, export
}
