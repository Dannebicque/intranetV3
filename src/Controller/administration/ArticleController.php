<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Article;
use App\Entity\Constantes;
use App\Form\ArticleType;
use App\Repository\ArticleRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/article",
 *         "en":"administration/news"}
 *)
 */
class ArticleController extends BaseController
{
    /**
     * @Route("/", name="administration_article_index", methods="GET")
     * @param ArticleRepository $articleRepository
     *
     * @return Response
     */
    public function index(ArticleRepository $articleRepository): Response
    {
        return $this->render('administration/article/index.html.twig', ['articles' => $articleRepository->findAll()]);
    }

    /**
     * @Route("/help", name="administration_article_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('administration/article/help.html.twig');
    }

    /**
     * @Route("/save", name="administration_article_save", methods="GET")
     */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer", name="administration_article_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new", name="administration_article_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $article = new Article($this->getUser());
        $form = $this->createForm(ArticleType::class, $article,
            ['formation' => $this->dataUserSession->getFormation()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($article);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'article.add.success.flash');

            return $this->redirectToRoute('administration_article_index');
        }

        return $this->render('administration/article/new.html.twig', [
            'article' => $article,
            'form'    => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_article_show", methods="GET")
     * @param Article $article
     *
     * @return Response
     */
    public function show(Article $article): Response
    {
        return $this->render('administration/article/show.html.twig', ['article' => $article]);
    }

    /**
     * @Route("/{id}/edit", name="administration_article_edit", methods="GET|POST")
     * @param Request $request
     * @param Article $article
     *
     * @return Response
     */
    public function edit(Request $request, Article $article): Response
    {
        $form = $this->createForm(ArticleType::class, $article,
            ['formation' => $this->dataUserSession->getFormation()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'article.edit.success.flash');

            return $this->redirectToRoute('administration_article_edit', ['id' => $article->getId()]);
        }

        return $this->render('administration/article/edit.html.twig', [
            'article' => $article,
            'form'    => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_article_delete", methods="DELETE")
     * @param Request $request
     * @param Article $article
     *
     * @return Response
     */
    public function delete(Request $request, Article $article): Response
    {
        $id = $article->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {

            $this->entityManager->remove($article);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'article.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'article.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
