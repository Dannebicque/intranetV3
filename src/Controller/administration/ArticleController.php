<?php

namespace App\Controller\administration;

use App\Entity\Article;
use App\Form\ArticleType;
use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}/administration/article",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class ArticleController extends Controller
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
        return new Response('', 200);
    }

    /**
    * @Route("/imprimer", name="administration_article_print", methods="GET")
    */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', 200);
    }

    /**
     * @Route("/new", name="administration_article_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function new(Request $request): Response
    {
        $article = new Article();
        $form = $this->createForm(ArticleType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($article);
            $em->flush();

            return $this->redirectToRoute('administration_article_index');
        }

        return $this->render('administration/article/new.html.twig', [
            'article' => $article,
            'form' => $form->createView(),
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
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(Request $request, Article $article): Response
    {
        $form = $this->createForm(ArticleType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('administration_article_edit', ['id' => $article->getId()]);
        }

        return $this->render('administration/article/edit.html.twig', [
            'article' => $article,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_article_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
