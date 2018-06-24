<?php

namespace App\Controller;

use App\Entity\Article;
use App\MesClasses\MyPagination;
use App\Repository\ArticleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
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
     * @Route("/categorie/{categorie}/{page}", name="article_categorie", options={"expose":true})
     * @param ArticleRepository $articleRepository
     * @param                   $categorie
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function categorie(
        MyPagination $myPagination,
        ArticleRepository $articleRepository,
        $categorie,
        $page = 1
    ): Response {
        $articles = $articleRepository->findByTypeFormationBuilder($categorie, $this->dataUserSession->getFormation());

        $myPagination->calculPagination($articles,
            ['path' => 'article_categorie', 'args' => ['categorie' => $categorie]], $page);


        return $this->render('article/articles.html.twig', [
            'pagination' => $myPagination
        ]);
    }

    /**
     * @Route("/show/{slug}", name="article_read_more")
     * @ParamConverter("article", options={"mapping": {"slug": "slug"}})
     * @param ArticleRepository $articleRepository
     * @param                   $slug
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function show(Article $article): Response
    {

        return $this->render('article/article.html.twig', [
            'article' => $article
        ]);
    }

    /**
     * @Route("/like/{slug}", name="article_like", options={"expose":true})
     * @ParamConverter("article", options={"mapping": {"slug": "slug"}})
     * @param ArticleRepository $articleRepository
     * @IsGranted("ROLE_ETUDIANT")
     */
    public function like(Article $article)
    {
        //todo: a tester en tant qu'étudiant. Comment gérer avec personnel et étudiant ? Une vraie entité?
        //todo: gérer si déjà présent et dans ce cas supprimer
        $article->addLike($this->getUser());
        $this->entityManager->flush();

    }
}
