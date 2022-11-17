<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/administration/QuestionnaireQuestionController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/10/2022 14:54
 */

namespace App\Controller\questionnaire\administration;

use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\QuestionnaireQuestion;
use App\Entity\QuestionnaireQuestionTag;
use App\Repository\QuestionnaireQuestionTagRepository;
use App\Table\QuestionnaireQuestionTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/{type}/questionnaire/question', name: 'adm_questionnaire_question_', requirements: ['type' => 'administratif|administration'], defaults: ['type' => 'administratif'])]
class QuestionnaireQuestionController extends BaseController
{
    public function __construct(private readonly QuestionnaireQuestionTagRepository $questionnaireQuestionTagRepository)
    {
    }

    /**
     * @throws \JsonException
     */
    #[Route('/', name: 'index', options: ['expose' => true], methods: ['GET', 'POST'])]
    public function index(Request $request, QuestionnaireRegistry $questionnaireRegistry): Response
    {
        $table = $this->createTable(QuestionnaireQuestionTableType::class,
            ['typeQuestions' => $questionnaireRegistry->getAllTypeQuestions(),
                'type' => $request->get('type'),
                'departement' => 'administration' === $request->get('type') ? $this->getDepartement() : null, ]);

        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('questionnaire/administration/questionnaire_question/index.html.twig', [
            'table' => $table,
            'type' => $request->get('type'),
        ]);
    }

    /**
     * @throws \App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException
     */
    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, QuestionnaireRegistry $questionnaireRegistry): Response
    {
        if ($request->isMethod('POST')) {
            $questionnaireQuestion = new QuestionnaireQuestion($this->getUser());
            $typeQuestion = $questionnaireRegistry->getTypeQuestion($request->query->get('typeQuestion'));
            $questionnaireQuestion->setType($typeQuestion::class);
            $form = $this->createForm($typeQuestion::FORM, $questionnaireQuestion);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $this->entityManager->persist($questionnaireQuestion);
                $this->entityManager->flush();
                $t = $request->request->all();
                $t = array_shift($t);
                $this->traitementTags($questionnaireQuestion,
                    $t['newQuestionnaireQuestionTags']);
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire_question.add.success.flash');

                return $this->redirectToRoute('adm_questionnaire_question_index', ['type' => $request->get('type')], Response::HTTP_SEE_OTHER);
            }
        }

        return $this->renderForm('questionnaire/administration/questionnaire_question/new.html.twig', [
            'typeQuestions' => $questionnaireRegistry->getTypeQuestions(),
            'type' => $request->get('type'),
        ]);
    }

    /**
     * @throws \App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException
     */
    #[Route('/type_question', name: 'type_question', methods: ['GET', 'POST'])]
    public function typeQuestion(Request $request, QuestionnaireRegistry $questionnaireRegistry): Response
    {
        $type = $request->query->get('q');
        $typeQuestion = $questionnaireRegistry->getTypeQuestion($type);
        $question = new QuestionnaireQuestion($this->getUser());
        $form = $this->createForm($typeQuestion::FORM, $question, [
            'action' => $this->generateUrl('adm_questionnaire_question_new', ['typeQuestion' => $typeQuestion::class, 'type' => $request->get('type')]),
        ]);

        return $this->render('questionnaire/administration/questionnaire_question/typeQuestion.html.twig', [
            'form' => $form->createView(),
            'type' => $request->get('type'),
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Request $request, QuestionnaireQuestion $questionnaireQuestion): Response
    {
        return $this->render('questionnaire/administration/questionnaire_question/show.html.twig', [
            'questionnaire_question' => $questionnaireQuestion,
            'type' => $request->get('type'),
        ]);
    }

    /**
     * @throws \App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException
     */
    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(
        Request $request,
        QuestionnaireRegistry $questionnaireRegistry,
        QuestionnaireQuestion $questionnaireQuestion
    ): Response {
        $typeQuestion = $questionnaireRegistry->getTypeQuestion($questionnaireQuestion->getType());
        $form = $this->createForm($typeQuestion::FORM, $questionnaireQuestion);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $this->entityManager->flush();
            $t = $request->request->all();
            $t = array_shift($t);
            $this->traitementTags($questionnaireQuestion,
                $t['newQuestionnaireQuestionTags']);
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire_question.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('adm_questionnaire_question_index', ['type' => $request->get('type')], Response::HTTP_SEE_OTHER);
            }

            return $this->redirectToRoute('adm_questionnaire_question_edit', ['id' => $questionnaireQuestion->getId()],
                Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('questionnaire/administration/questionnaire_question/edit.html.twig', [
            'questionnaire_question' => $questionnaireQuestion,
            'form' => $form,
            'type' => $request->get('type'),
        ]);
    }

    #[Route('/{id}/duplicate', name: 'duplicate', methods: ['GET', 'POST'])]
    public function duplicate(
        Request $request,
        QuestionnaireQuestion $questionnaireQuestion
    ): Response {
        $newQuestionnaireQuestion = clone $questionnaireQuestion;

        foreach ($questionnaireQuestion->getQuizzReponses() as $quizzReponse) {
            $newQuizzReponse = clone $quizzReponse;
            $newQuestionnaireQuestion->addQuizzReponse($newQuizzReponse);
            $newQuizzReponse->setQuestion($newQuestionnaireQuestion);
            $this->entityManager->persist($newQuizzReponse);
        }

        $this->entityManager->persist($newQuestionnaireQuestion);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire_question.duplicate.success.flash');

        return $this->redirectToRoute('adm_questionnaire_question_edit', ['id' => $newQuestionnaireQuestion->getId(),  'type' => $request->get('type')]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST', 'DELETE'])]
    public function delete(Request $request, QuestionnaireQuestion $questionnaireQuestion): Response
    {
        $id = $questionnaireQuestion->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            foreach ($questionnaireQuestion->getQuizzReponses() as $quizzReponse) {
                $this->entityManager->remove($quizzReponse);
            }
            $this->entityManager->remove($questionnaireQuestion);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'questionnaire_question.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'questionnaire_question.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    // todo:  export
    private function traitementTags(QuestionnaireQuestion $questionnaireQuestion, string $tags): void
    {
        $tabTags = explode(';', $tags);
        foreach ($tabTags as $tag) {
            $tag = mb_strtolower(trim($tag));
            if ('' !== $tag) {
                $t = $this->questionnaireQuestionTagRepository->findOneBy(['libelle' => $tag]);
                if (null === $t) {
                    $t = new QuestionnaireQuestionTag();
                    $t->setLibelle($tag);
                    $this->entityManager->persist($t);
                }

                $questionnaireQuestion->addQuestionnaireQuestionTag($t);
                $t->addQuestion($questionnaireQuestion);
            }
        }
        $this->entityManager->flush();
    }
}
