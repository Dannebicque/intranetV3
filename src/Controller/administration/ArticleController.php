<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/ArticleController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Article;
use App\Entity\ArticleCategorie;
use App\Entity\Constantes;
use App\Form\ArticleType;
use App\Repository\ArticleCategorieRepository;
use App\Repository\ArticleRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/articles")
 */
class ArticleController extends BaseController
{
    /**
     * @Route("/", name="administration_article_index", methods="GET")
     */
    public function index(ArticleRepository $articleRepository): Response
    {
        return $this->render('administration/article/index.html.twig',
            ['articles' => $articleRepository->findByDepartement($this->getDepartement())]);
    }

    /**
     * @Route("/export.{_format}", name="administration_article_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     *
     * @param $_format
     */
    public function export(MyExport $myExport, ArticleRepository $articleRepository, $_format): Response
    {
        $articles = $articleRepository->findByDepartement($this->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $articles,
            'articles',
            ['article_administration', 'utilisateur'],
            ['titre', 'texte', 'categorie' => ['libelle'], 'personnel' => ['nom', 'prenom']]
        );
    }

    /**
     * @Route("/new", name="administration_article_new", methods="GET|POST")
     */
    public function create(Request $request): Response
    {
        $article = new Article($this->getConnectedUser());
        $form = $this->createForm(
            ArticleType::class,
            $article,
            [
                'departement' => $this->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]
        );
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
     */
    public function show(Article $article): Response
    {
        return $this->render('administration/article/show.html.twig', ['article' => $article]);
    }

    /**
     * @Route("/{id}/edit", name="administration_article_edit", methods="GET|POST")
     */
    public function edit(Request $request, Article $article): Response
    {
        $form = $this->createForm(
            ArticleType::class,
            $article,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'article.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_article_index');
            }

            return $this->redirectToRoute('administration_article_edit', ['id' => $article->getId()]);
        }

        return $this->render('administration/article/edit.html.twig', [
            'article' => $article,
            'form'    => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_article_delete", methods="DELETE")
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

    /**
     * @Route("/{id}/duplicate", name="administration_article_duplicate", methods="GET|POST")
     */
    public function duplicate(Article $article): Response
    {
        $newArticle = clone $article;

        $this->entityManager->persist($newArticle);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'article.duplicate.success.flash');

        return $this->redirectToRoute('administration_article_edit', ['id' => $newArticle->getId()]);
    }

    /**
     * @Route("/gestion/categories", name="administration_article_categories", methods="GET|POST")
     */
    public function gestionCategorie(): Response
    {
        return $this->render('administration/article/gestionCategorie.html.twig', [
            'categories' => $this->dataUserSession->getArticlesCategories(),
        ]);
    }

    /**
     * @Route("/gestion/categorie/add", name="administration_article_categorie_add", options={"expose"=true})
     */
    public function addCategorie(
        ArticleCategorieRepository $categorieRepository,
        Request $request
    ): JsonResponse {
        $libelle = $request->request->get('libelle');
        $categorie = new ArticleCategorie();
        $categorie->setDepartement($this->dataUserSession->getDepartement());
        $categorie->setLibelle($libelle);

        $this->entityManager->persist($categorie);
        $this->entityManager->flush();

        return $this->json($categorieRepository->findByDepartementJson($this->dataUserSession->getDepartement()));
    }
}
