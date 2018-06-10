<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ArticleController
 * @package App\Controller
 * @Route({"fr":"informations",
 *         "en":"information"})
 */
class ArticleController extends BaseController
{
    /**
     * @Route("/categorie/{categorie}", name="article_categorie")
     * @param ArticleRepository $articleRepository
     * @param                   $categorie
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function categorie(ArticleRepository $articleRepository, $categorie): Response
    {
        $articles = $articleRepository->findByTypeFormation($categorie, $this->dataUserSession->getFormation());

        return $this->render('article/articles.html.twig', [
            'articles' => $articles
        ]);
    }

    /**
     * @Route("/show/{slug}", name="article_read_more")
     * @param ArticleRepository $articleRepository
     * @param                   $slug
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function show(ArticleRepository $articleRepository, $slug): Response
    {
        $article = $articleRepository->findOneBySlug($slug);

        return $this->render('article/article.html.twig', [
            'article' => $article
        ]);
    }
}
