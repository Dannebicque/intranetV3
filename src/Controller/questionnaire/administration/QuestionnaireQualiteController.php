<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/administration/QuestionnaireQualiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/10/2022 14:54
 */

namespace App\Controller\questionnaire\administration;

use App\Classes\Questionnaire\QuestionnaireQualiteSectionManage;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\QuestionnaireQualite;
use App\Entity\Semestre;
use App\Form\QuestionnaireQualiteType;
use App\Repository\QuestionnaireSectionRepository;
use App\Table\QuestionnaireQualiteTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/{type}/questionnaire/qualite', name: 'adm_questionnaire_qualite_', requirements: ['type' => 'administratif|administration'], defaults: ['type' => 'administratif'])]
class QuestionnaireQualiteController extends BaseController
{
    /**
     * @throws \JsonException
     */
    #[Route('/', name: 'index', options: ['expose' => true], methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        $table = $this->createTable(QuestionnaireQualiteTableType::class, [
            'type' => $request->get('type'),
            'departement' => 'administration' === $request->get('type') ? $this->getDepartement() : null,
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('questionnaire/administration/questionnaire_qualite/index.html.twig', [
            'table' => $table,
            'type' => $request->get('type'),
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
            $this->entityManager->persist($questionnaireQualite);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire.add.success.flash');

            return $this->redirectToRoute('adm_questionnaire_qualite_index', ['type' => $request->get('type')], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('questionnaire/administration/questionnaire_qualite/new.html.twig', [
            'questionnaire_qualite' => $questionnaireQualite,
            'form' => $form,
            'type' => $request->get('type'),
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(
        Request $request,
        QuestionnaireSectionRepository $questionnaireSectionRepository,
        QuestionnaireQualite $questionnaireQualite
    ): Response {
        return $this->render('questionnaire/administration/questionnaire_qualite/show.html.twig', [
            'questionnaire_qualite' => $questionnaireQualite,
            'sections' => $questionnaireSectionRepository->findAll(),
            'type' => $request->get('type'),
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
            'type' => $request->get('type'),
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, QuestionnaireQualite $questionnaireQualite): Response
    {
        $form = $this->createForm(QuestionnaireQualiteType::class, $questionnaireQualite);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire.edit.success.flash');

            return $this->redirectToRoute('adm_questionnaire_qualite_index', ['type' => $request->get('type')], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('questionnaire/administration/questionnaire_qualite/edit.html.twig', [
            'questionnaire_qualite' => $questionnaireQualite,
            'form' => $form,
            'type' => $request->get('type'),
        ]);
    }

    #[Route('/{id}/duplicate', name: 'duplicate', methods: ['GET', 'POST'])]
    public function duplicate(
        Request $request, QuestionnaireQualite $questionnaire): Response
    {
        $newQuestionnaireQualite = clone $questionnaire;
        $this->entityManager->persist($newQuestionnaireQualite);
        foreach ($questionnaire->getSections() as $section) {
            $nSection = clone $section;
            $newQuestionnaireQualite->addSection($nSection);
            if (null !== $nSection->getConfig()) {
                $t = explode('-', (string) $nSection->getConfig());
                $nSection->setConfig($t[0].'-');
            }
            $nSection->setQuestionnaireQualite($newQuestionnaireQualite);
            $this->entityManager->persist($nSection);
        }
        $this->entityManager->flush();
        $this->addFlash(Constantes::FLASHBAG_SUCCESS, 'questionnaire.duplicate.success.flashbag');

        return $this->redirectToRoute('adm_questionnaire_qualite_edit',
            ['questionnaire' => $newQuestionnaireQualite->getId(), 'type' => $request->get('type')]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, QuestionnaireQualite $questionnaireQualite): Response
    {
        if ($this->isCsrfTokenValid('delete'.$questionnaireQualite->getId(), $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($questionnaireQualite);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire.delete.success.flash');
        }

        return $this->redirectToRoute('adm_questionnaire_qualite_index', ['type' => $request->get('type')], Response::HTTP_SEE_OTHER);
    }

    // todo: duplicate, export
}
