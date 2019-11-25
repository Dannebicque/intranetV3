<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/InformationController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller;

use App\Entity\Article;
use App\Entity\ArticleCategorie;
use App\MesClasses\MyPagination;
use App\Repository\ArticleRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
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
    ): Response {
        $articles = $articleRepository->findByTypeDepartementBuilder($categorie->getId(),
            $this->dataUserSession->getDepartement());

        $myPagination->calculPagination(
            $articles,
            ['path' => 'information_categorie', 'args' => ['categorie' => $categorie->getId()]],
            $page
        );


        return $this->render('information/articles.html.twig', [
            'pagination' => $myPagination
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
        return $this->render('information/article.html.twig', [
            'article' => $article
        ]);
    }

    /**
     * @Route("/like/{slug}", name="information_like", options={"expose":true})
     * @ParamConverter("article", options={"mapping": {"slug": "slug"}})
     * @param Article $article
     *
     * @return JsonResponse
     * @IsGranted("ROLE_ETUDIANT")
     */
    public function like(Article $article): JsonResponse
    {
        //todo: a tester en tant qu'étudiant. Comment gérer avec personnel et étudiant ? Une vraie entité?
        //todo: gérer si déjà présent et dans ce cas supprimer
        $article->addLike($this->getConnectedUser());
        $this->entityManager->flush();

        return $this->json(count($article->getLikes()), Response::HTTP_OK);
    }
}
