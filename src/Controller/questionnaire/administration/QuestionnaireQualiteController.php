<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/questionnaire/administration/QuestionnaireQualiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 17:38
 */

namespace App\Controller\questionnaire\administration;

use App\Classes\Questionnaire\QuestionnaireQualiteSectionManage;
use App\Controller\BaseController;
use App\Entity\QuestionnaireQualite;
use App\Entity\Semestre;
use App\Form\QuestionnaireQualiteType;
use App\Repository\QuestionnaireSectionRepository;
use App\Table\QuestionnaireQualiteTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administratif/questionnaire/qualite', name: 'sadm_questionnaire_qualite_')]
class QuestionnaireQualiteController extends BaseController
{
    #[Route('/', name: 'index', options: ['expose' => true], methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        $table = $this->createTable(QuestionnaireQualiteTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('questionnaire/administration/questionnaire_qualite/index.html.twig', [
            'table' => $table,
        ]);
    }

    #[Route('/new/{semestre}', name: 'new', methods: ['GET', 'POST'])]
    public function new(
        Request $request,
        ?Semestre $semestre = null
    ): Response {
        $questionnaireQualite = new QuestionnaireQualite();
        if (null !== $semestre) {
            $questionnaireQualite->setSemestre($semestre);
        }

        $form = $this->createForm(QuestionnaireQualiteType::class, $questionnaireQualite);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($questionnaireQualite);
            $entityManager->flush();

            return $this->redirectToRoute('sadm_questionnaire_qualite_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('questionnaire/administration/questionnaire_qualite/new.html.twig', [
            'questionnaire_qualite' => $questionnaireQualite,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(QuestionnaireSectionRepository $questionnaireSectionRepository, QuestionnaireQualite $questionnaireQualite): Response
    {
        return $this->render('questionnaire/administration/questionnaire_qualite/show.html.twig', [
            'questionnaire_qualite' => $questionnaireQualite,
            'sections' => $questionnaireSectionRepository->findAll(),
        ]);
    }

    #[Route('/section/manage/{id}', name: 'section_manage', methods: ['GET'])]
    public function questionManage(
        Request $request,
        QuestionnaireSectionRepository $questionnaireSectionRepository,
        QuestionnaireQualiteSectionManage $questionManage,
        QuestionnaireQualite $questionnaireSection
    ): Response {
        $questionManage->updateQuestionnaire($request->query->get('action'), (int) $request->query->get('question'),
            $questionnaireSection);

        return $this->render('questionnaire/administration/questionnaire_qualite/_tableauSection.html.twig', [
            'qualiteSections' => $questionnaireSection->getSections(),
            'sections' => $questionnaireSectionRepository->findAll(),
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, QuestionnaireQualite $questionnaireQualite): Response
    {
        $form = $this->createForm(QuestionnaireQualiteType::class, $questionnaireQualite);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('sadm_questionnaire_qualite_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('questionnaire/administration/questionnaire_qualite/edit.html.twig', [
            'questionnaire_qualite' => $questionnaireQualite,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, QuestionnaireQualite $questionnaireQualite): Response
    {
        if ($this->isCsrfTokenValid('delete'.$questionnaireQualite->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($questionnaireQualite);
            $entityManager->flush();
        }

        return $this->redirectToRoute('sadm_questionnaire_qualite_index', [], Response::HTTP_SEE_OTHER);
    }

    //todo: duplicate, export
}
