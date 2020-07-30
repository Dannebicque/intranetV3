<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/InformationController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 13:46

namespace App\Controller;

use App\Entity\Article;
use App\Entity\ArticleCategorie;
use App\Classes\MyArticle;
use App\Classes\MyPagination;
use App\Entity\ArticleLike;
use App\Repository\ArticleRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function count;

/**
 * Class InformationController
 * @package App\Controller
 * @Route("/information")
 */
class InformationController extends BaseController
{
    /**
     * @Route("/", name="informations_index")
     */
    public function index(): Response
    {
        return $this->render('information/index.html.twig', [
            'categories' => $this->dataUserSession->getArticlesCategories()
        ]);
    }

    /**
     * @Route("/categorie/{categorie}/{page}", name="information_categorie", options={"expose":true})
     * @param MyPagination      $myPagination
     * @param ArticleRepository $articleRepository
     * @param                   $categorie
     *
     * @param int               $page
     *
     * @return Response
     */
    public function categorie(
        MyPagination $myPagination,
        ArticleRepository $articleRepository,
        ArticleCategorie $categorie,
        $page = 1
    ): Response
    {
        $articles = $articleRepository->findByTypeDepartementBuilder($categorie->getId(),
            $this->dataUserSession->getDepartement());

        $myPagination->calculPagination(
            $articles,
            ['path' => 'information_categorie', 'args' => ['categorie' => $categorie->getId()]],
            $page
        );

        $mesArticles = [];
        foreach ($this->getConnectedUser()->getArticlesLike() as $like) {
            $mesArticles[] = $like->getArticle()->getId();
        }

        return $this->render('information/articles.html.twig', [
            'pagination'  => $myPagination,
            'mesArticles' => $mesArticles
        ]);
    }

    /**
     * @Route("/show/{slug}", name="information_read_more")
     * @ParamConverter("article", options={"mapping": {"slug": "slug"}})
     * @param Article $article
     *
     * @return Response
     */
    public function show(Article $article): Response
    {
        $like = false;
        /** @var ArticleLike $like */
        foreach ($this->getConnectedUser()->getArticlesLike() as $like) {
            if ($like->getArticle() !== null && $like->getArticle()->getId() === $article->getId()) {
                $like = true;
            }
        }

        return $this->render('information/article.html.twig', [
            'article' => $article,
            'like'    => $like
        ]);
    }

    /**
     * @Route("/like/{slug}", name="information_like", options={"expose":true})
     * @ParamConverter("article", options={"mapping": {"slug": "slug"}})
     * @param MyArticle $myArticle
     * @param Article   $article
     *
     * @return JsonResponse
     */
    public function like(MyArticle $myArticle, Article $article): JsonResponse
    {
        $myArticle->setArticle($article)->saveLike($this->getConnectedUser());

        return $this->json(count($article->getArticleLikes()), Response::HTTP_OK);
    }
}
