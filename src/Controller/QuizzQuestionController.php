<?php
/**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/QuizzQuestionController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 09/11/2019 10:16
 * @lastUpdate 09/11/2019 10:12
 */

namespace App\Controller;

use App\Entity\QuizzQuestion;
use App\Form\QuizzQuestionType;
use App\Repository\QuizzQuestionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/quizz/question")
 */
class QuizzQuestionController extends AbstractController
{
    /**
     * @Route("/", name="quizz_question_index", methods={"GET"})
     * @param QuizzQuestionRepository $quizzQuestionRepository
     *
     * @return Response
     */
    public function index(QuizzQuestionRepository $quizzQuestionRepository): Response
    {
        return $this->render('quizz_question/index.html.twig', [
            'quizz_questions' => $quizzQuestionRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="quizz_question_new", methods={"GET","POST"})
     * @param Request $request
     *
     * @return Response
     */
    public function new(Request $request): Response
    {
        $quizzQuestion = new QuizzQuestion();
        $form = $this->createForm(QuizzQuestionType::class, $quizzQuestion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($quizzQuestion);
            $entityManager->flush();

            return $this->redirectToRoute('quizz_question_index');
        }

        return $this->render('quizz_question/new.html.twig', [
            'quizz_question' => $quizzQuestion,
            'form'           => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="quizz_question_show", methods={"GET"})
     * @param QuizzQuestion $quizzQuestion
     *
     * @return Response
     */
    public function show(QuizzQuestion $quizzQuestion): Response
    {
        return $this->render('quizz_question/show.html.twig', [
            'quizz_question' => $quizzQuestion,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="quizz_question_edit", methods={"GET","POST"})
     * @param Request       $request
     * @param QuizzQuestion $quizzQuestion
     *
     * @return Response
     */
    public function edit(Request $request, QuizzQuestion $quizzQuestion): Response
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
     * @param Request       $request
     * @param QuizzQuestion $quizzQuestion
     *
     * @return Response
     */
    public function delete(Request $request, QuizzQuestion $quizzQuestion): Response
    {
        if ($this->isCsrfTokenValid('delete' . $quizzQuestion->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($quizzQuestion);
            $entityManager->flush();
        }

        return $this->redirectToRoute('quizz_question_index');
    }
}
