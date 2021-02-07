<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/InformationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Controller;

use App\Classes\MyArticle;
use App\Classes\MyPagination;
use App\Entity\Article;
use App\Entity\ArticleCategorie;
use App\Entity\ArticleLike;
use App\Repository\ArticleRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class InformationController.
 *
 * @Route("/information")
 */
class InformationController extends BaseController
{
    /**
     * @Route("", name="informations_index")
     */
    public function index(): Response
    {
        return $this->render('information/index.html.twig', [
            'categories' => $this->dataUserSession->getArticlesCategories(),
        ]);
    }

    /**
     * @Route("/categorie/{categorie}/{page}", name="information_categorie", options={"expose":true})
     *
     * @param     $categorie
     * @param int $page
     */
    public function categorie(
        MyPagination $myPagination,
        ArticleRepository $articleRepository,
        ArticleCategorie $categorie,
        $page = 1
    ): Response {
        $articles = $articleRepository->findByTypeDepartementBuilder($categorie->getId(),
            $this->dataUserSession->getDepartement());

        $myPagination->calculPagination(
            $articles,
            ['path' => 'information_categorie', 'args' => ['categorie' => $categorie->getId()]],
            $page
        );

        $mesArticles = [];
        foreach ($this->getConnectedUser()->getArticlesLike() as $like) {
            if (null !== $like->getArticle()) {
                $mesArticles[] = $like->getArticle()->getId();
            }
        }

        return $this->render('information/articles.html.twig', [
            'pagination'  => $myPagination,
            'mesArticles' => $mesArticles,
        ]);
    }

    /**
     * @Route("/show/{slug}", name="information_read_more")
     * @ParamConverter("article", options={"mapping": {"slug": "slug"}})
     */
    public function show(Article $article): Response
    {
        $like = false;
        /** @var ArticleLike $like */
        foreach ($this->getConnectedUser()->getArticlesLike() as $like) {
            if (null !== $like->getArticle() && $like->getArticle()->getId() === $article->getId()) {
                $like = true;
            }
        }

        return $this->render('information/article.html.twig', [
            'article' => $article,
            'like'    => $like,
        ]);
    }

    /**
     * @Route("/like/{slug}", name="information_like", options={"expose":true})
     * @ParamConverter("article", options={"mapping": {"slug": "slug"}})
     */
    public function like(MyArticle $myArticle, Article $article): JsonResponse
    {
        $myArticle->setArticle($article)->saveLike($this->getConnectedUser());

        return $this->json(\count($article->getArticleLikes()), Response::HTTP_OK);
    }
}
