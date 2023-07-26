<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/InformationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 10:44
 */

namespace App\Controller;

use App\Classes\MyArticle;
use App\Classes\MyPagination;
use App\Entity\Article;
use App\Entity\ArticleCategorie;
use App\Entity\ArticleLike;
use App\Repository\ArticleRepository;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use function count;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class InformationController.
 */
#[Route(path: '/information')]
class InformationController extends BaseController
{
    #[Route(path: '', name: 'informations_index')]
    public function index(): Response
    {
        return $this->render('information/index.html.twig', [
            'categories' => $this->getDepartement() ? $this->getDepartement()->getArticleCategories() : [],
        ]);
    }

    #[Route(path: '/categorie/{categorie}/{page}', name: 'information_categorie', options: ['expose' => true])]
    public function categorie(MyPagination $myPagination, ArticleRepository $articleRepository, ArticleCategorie $categorie, int $page = 1): Response
    {
        $articles = $articleRepository->findByTypeDepartementBuilder($categorie->getId(),
            $this->getDepartement(), $this->isEtudiant());
        $myPagination->calculPagination(
            $articles,
            ['path' => 'information_categorie', 'args' => ['categorie' => $categorie->getId()]],
            $page
        );
        $mesArticles = [];
        foreach ($this->getUser()->getArticlesLike() as $like) {
            if (null !== $like->getArticle()) {
                $mesArticles[] = $like->getArticle()->getId();
            }
        }

        return $this->render('information/articles.html.twig', [
            'pagination' => $myPagination,
            'mesArticles' => $mesArticles,
        ]);
    }

    #[Route(path: '/show/{slug}', name: 'information_read_more')]
    public function show(#[MapEntity(mapping: ['slug' => 'slug'])]
                         Article $article): Response
    {
        $like = false;
        /** @var ArticleLike $like */
        foreach ($this->getUser()->getArticlesLike() as $like) {
            if (null !== $like->getArticle() && $like->getArticle()->getId() === $article->getId()) {
                $like = true;
            }
        }

        return $this->render('information/article.html.twig', [
            'article' => $article,
            'like' => $like,
        ]);
    }

    #[Route(path: '/like/{slug}', name: 'information_like', options: ['expose' => true])]
    public function like(MyArticle $myArticle, #[MapEntity(mapping: ['slug' => 'slug'])]
    Article                        $article): JsonResponse
    {
        $myArticle->setArticle($article)->saveLike($this->getUser());

        return $this->json(count($article->getArticleLikes()), Response::HTTP_OK);
    }
}
