<?php

namespace App\Controller;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

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
    public function categorie(ArticleRepository $articleRepository,  $categorie)
    {
        $articles = $articleRepository->FindByTypeFormation($categorie, $this->dataUserSession->getFormation());

        return $this->render('article/articles.html.twig', [
            'articles' => $articles
        ]);
    }

    /**
     * @Route("/show/{slug}", name="article_read_more")
     * @param Article $article
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function show(ArticleRepository $articleRepository, $slug)
    {
        $article = $articleRepository->findOneBySlug($slug);

        return $this->render('article/article.html.twig', [
            'article' => $article
        ]);
    }
}
