<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/ArticleController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 09:23
 */

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Article;
use App\Entity\ArticleCategorie;
use App\Entity\Constantes;
use App\Form\ArticleType;
use App\Repository\ArticleCategorieRepository;
use App\Repository\ArticleRepository;
use App\Table\ArticleTableType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/articles')]
class ArticleController extends BaseController
{
    /**
     * @throws \JsonException
     */
    #[Route('/', name: 'administration_article_index', options: ['expose' => true], methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $table = $this->createTable(ArticleTableType::class, [
            'departement' => $this->getDepartement(),
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('administration/article/index.html.twig',
            ['table' => $table]);
    }

    #[Route(path: '/export.{_format}', name: 'administration_article_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, ArticleRepository $articleRepository, string $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        $articles = $articleRepository->findByDepartement($this->getDepartement());
        $data = $mySerializer->getDataFromSerialization(
            $articles,
            ['titre', 'texte', 'categorie' => ['libelle'], 'personnel' => ['nom', 'prenom']],
            ['article_administration', 'utilisateur']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'articles_'.$this->getDepartement()?->getLibelle(),
        );
    }

    #[Route(path: '/new', name: 'administration_article_new', methods: 'GET|POST')]
    public function create(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        $article = new Article($this->getUser());
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
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_article_show', methods: 'GET')]
    public function show(Article $article): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $article->getCategorie()?->getDepartement());

        return $this->render('administration/article/show.html.twig', ['article' => $article]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_article_edit', methods: 'GET|POST')]
    public function edit(Request $request, Article $article): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $article->getCategorie()?->getDepartement());
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
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_article_delete', methods: 'DELETE')]
    public function delete(Request $request, Article $article): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $article->getCategorie()?->getDepartement());
        $id = $article->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($article);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'article.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'article.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_article_duplicate', methods: 'GET|POST')]
    public function duplicate(Article $article): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $article->getCategorie()?->getDepartement());
        $newArticle = clone $article;
        $this->entityManager->persist($newArticle);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'article.duplicate.success.flash');

        return $this->redirectToRoute('administration_article_edit', ['id' => $newArticle->getId()]);
    }

    #[Route(path: '/gestion/categories', name: 'administration_article_categories', methods: 'GET|POST')]
    public function gestionCategorie(): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        return $this->render('administration/article/gestionCategorie.html.twig', [
            'categories' => $this->getDepartement() ? $this->getDepartement()->getArticleCategories() : [],
        ]);
    }

    #[Route(path: '/gestion/categorie/add', name: 'administration_article_categorie_add', options: ['expose' => true])]
    public function addCategorie(ArticleCategorieRepository $categorieRepository, Request $request): JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        $libelle = $request->request->get('libelle');
        $categorie = new ArticleCategorie();
        $categorie->setDepartement($this->dataUserSession->getDepartement());
        $categorie->setLibelle($libelle);
        $this->entityManager->persist($categorie);
        $this->entityManager->flush();

        return $this->json($categorieRepository->findByDepartementJson($this->dataUserSession->getDepartement()));
    }
}
