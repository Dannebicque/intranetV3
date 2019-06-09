<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/ArticleController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:47 PM
 *  * @lastUpdate 4/28/19 8:42 PM
 *  *
 *
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Article;
use App\Entity\ArticleCategorie;
use App\Entity\Constantes;
use App\Form\ArticleType;
use App\MesClasses\MyExport;
use App\Repository\ArticleCategorieRepository;
use App\Repository\ArticleRepository;
use PhpOffice\PhpSpreadsheet\Exception;
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
     * @param ArticleRepository $articleRepository
     *
     * @return Response
     */
    public function index(ArticleRepository $articleRepository): Response
    {
        return $this->render('administration/article/index.html.twig', ['articles' => $articleRepository->findByDepartement($this->dataUserSession->getDepartement())]);
    }

    /**
     * @Route("/export.{_format}", name="administration_article_export", methods="GET", requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport          $myExport
     * @param ArticleRepository $articleRepository
     * @param                   $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExport $myExport, ArticleRepository $articleRepository, $_format): Response
    {
        $articles = $articleRepository->findByDepartement($this->dataUserSession->getDepartement(), 0);
        $response = $myExport->genereFichierGenerique(
            $_format,
            $articles,
            'articles',
            ['article_administration', 'utilisateur'],
            ['titre', 'texte', 'categorie' => ['libelle'], 'personnel' => ['nom', 'prenom']]
        );

        return $response;
    }

    /**
     * @Route("/new", name="administration_article_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $article = new Article($this->getConnectedUser());
        $form = $this->createForm(
            ArticleType::class,
            $article,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr'      => [
                    'data-provide' => 'validation'
                ]
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
        $form = $this->createForm(
            ArticleType::class,
            $article,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr'      => [
                    'data-provide' => 'validation'
                ]
            ]
        );
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

    /**
     * @Route("/{id}/duplicate", name="administration_article_duplicate", methods="GET|POST")
     * @param Article $article
     *
     * @return Response
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
     *
     * @return Response
     */
    public function gestionCategorie(): Response
    {
        return $this->render('administration/article/gestionCategorie.html.twig', [
            'categories' => $this->dataUserSession->getArticlesCategories()
        ]);
    }

    /**
     * @param ArticleCategorieRepository $categorieRepository
     * @param Request                    $request
     *
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     * @Route("/gestion/categorie/add", name="administration_article_categorie_add", options={"expose"=true})
     *
     */
    public function addCategorie(ArticleCategorieRepository $categorieRepository, Request $request): \Symfony\Component\HttpFoundation\JsonResponse
    {
       $libelle = $request->request->get('libelle');
       $categorie = new ArticleCategorie();
       $categorie->setDepartement($this->dataUserSession->getDepartement());
       $categorie->setLibelle($libelle);

       $this->entityManager->persist($categorie);
       $this->entityManager->flush();

       return $this->json($categorieRepository->findByDepartementJson($this->dataUserSession->getDepartement()));

    }
}
