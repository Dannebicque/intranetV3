<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/QuizzQuestionController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:44
 */

namespace App\Controller;

use App\Entity\Constantes;
use App\Entity\QuestionnaireQuestion;
use App\Entity\QuestionnaireReponse;
use App\Repository\QuestionnaireQuestionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function count;

/**
 * @Route("/quizz/question")
 * @deprecated
 */
class QuizzQuestionController extends BaseController
{
    /**
     * @Route("/", name="quizz_question_index", methods={"GET"})
     */
    public function index(QuestionnaireQuestionRepository $quizzQuestionRepository): Response
    {
        return $this->render('quizz_question/index.html.twig', [
            'quizz_questions' => $quizzQuestionRepository->findByUser($this->getConnectedUser()),
        ]);
    }

    /**
     * @Route("/new", name="quizz_question_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $quizzQuestion = new QuestionnaireQuestion($this->getConnectedUser());
        $form = $this->createForm(QuizzQuestionType::class, $quizzQuestion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($quizzQuestion);

            //fonction du type on ajoute
            switch ($quizzQuestion->getType()) {
                case 'qcu':
                    $nbreponses = count($request->request->get('question_qcu'));
                    for ($i = 1; $i <= $nbreponses; ++$i) {
                        $reponse = new QuestionnaireReponse();
                        $reponse->setQuestion($quizzQuestion);
                        $reponse->setLibelle($request->request->get('question_qcu')[$i]);
                        $reponse->setValeur($request->request->get('question_qcu_valeur')[$i]);
                        $this->entityManager->persist($reponse);
                    }
                    break;
                case 'qcm':
                    $nbreponses = count($request->request->get('question_qcm'));
                    for ($i = 1; $i <= $nbreponses; ++$i) {
                        $reponse = new QuestionnaireReponse();
                        $reponse->setQuestion($quizzQuestion);
                        $reponse->setLibelle($request->request->get('question_qcm')[$i]);
                        $reponse->setValeur($request->request->get('question_qcm_valeur')[$i]);
                        $this->entityManager->persist($reponse);
                    }
                    break;
                case 'yesno':
                    //transformer en deux input radio.
                    $reponse = new QuestionnaireReponse();
                    $reponse->setQuestion($quizzQuestion);
                    $reponse->setLibelle($request->request->get('question_libre_oui'));
                    $reponse->setValeur(1);
                    $this->entityManager->persist($reponse);
                    $reponse = new QuestionnaireReponse();
                    $reponse->setQuestion($quizzQuestion);
                    $reponse->setLibelle($request->request->get('question_libre_non'));
                    $reponse->setValeur(0);
                    $this->entityManager->persist($reponse);
                    break;
                case 'echelle':
                    //transformer en deux input radio.
                    $min = $request->request->get('question_min');
                    $max = $request->request->get('question_max');

                    $reponse = new QuestionnaireReponse();
                    $reponse->setQuestion($quizzQuestion);
                    $reponse->setLibelle($request->request->get('question_min_sens'));
                    $reponse->setValeur($min);
                    $this->entityManager->persist($reponse);
                    $reponse = new QuestionnaireReponse();
                    $reponse->setQuestion($quizzQuestion);
                    $reponse->setLibelle($request->request->get('question_max_sens'));
                    $reponse->setValeur($max);
                    $this->entityManager->persist($reponse);

                    for ($i = $min + 1; $i < $max; ++$i) {
                        $reponse = new QuestionnaireReponse();
                        $reponse->setQuestion($quizzQuestion);
                        $reponse->setLibelle($i);
                        $reponse->setValeur($i);
                        $this->entityManager->persist($reponse);
                    }
                    break;
            }

            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'quizz_question.add.success.flash');

            return $this->redirectToRoute('quizz_question_index');
        }

        return $this->render('quizz_question/new.html.twig', [
            'quizz_question' => $quizzQuestion,
            'form'           => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="quizz_question_show", methods={"GET"})
     */
    public function show(QuestionnaireQuestion $quizzQuestion): Response
    {
        return $this->render('quizz_question/_question.html.twig', [
            'numero'   => 1,
            'question' => $quizzQuestion,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="quizz_question_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, QuestionnaireQuestion $quizzQuestion): Response
    {
        $form = $this->createForm(QuizzQuestionType::class, $quizzQuestion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('quizz_question_index');
        }

        return $this->render('quizz_question/edit.html.twig', [
            'quizz_question' => $quizzQuestion,
            'form'           => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="quizz_question_delete", methods={"DELETE"})
     */
    public function delete(Request $request, QuestionnaireQuestion $quizzQuestion): Response
    {
        if ($this->isCsrfTokenValid('delete' . $quizzQuestion->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($quizzQuestion);
            $entityManager->flush();
        }

        return $this->redirectToRoute('quizz_question_index');
    }

    /**
     * @Route("/{id}/duplicate", name="quizz_question_duplicate", methods="GET|POST")
     */
    public function duplicate(QuestionnaireQuestion $quizzQuestion): Response
    {
        $newQuizzQuestion = clone $quizzQuestion;
        //dupliquer les reponses
        $this->entityManager->persist($newQuizzQuestion);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'quizz_question.duplicate.success.flash');

        return $this->redirectToRoute('quizz_question_edit', ['id' => $newQuizzQuestion->getId()]);
    }
}
