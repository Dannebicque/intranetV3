<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Article;
use App\Entity\Constantes;
use App\Form\ArticleType;
use App\MesClasses\MyExport;
use App\Repository\ArticleRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/article",
 *         "en":"administration/news"}
 *)
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
        return $this->render('administration/article/index.html.twig', ['articles' => $articleRepository->findAll()]);
    }

    /**
     * @Route("/export.{_format}", name="administration_article_export", methods="GET", requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport          $myExport
     * @param ArticleRepository $articleRepository
     * @param                   $_format
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function export(MyExport $myExport, ArticleRepository $articleRepository, $_format): Response
    {
        $articles = $articleRepository->findByFormation($this->dataUserSession->getFormation(), 0);
        $response = $myExport->genereFichierGenerique($_format, $articles, 'articles',
            ['article_administration', 'utilisateur'], ['titre', 'texte', 'type', 'personnel' => ['nom', 'prenom']]);

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
        $article = new Article($this->getUser());
        $form = $this->createForm(ArticleType::class, $article,
            [
                'formation' => $this->dataUserSession->getFormation(),
                'attr'      => [
                    'data-provide' => 'validation'
                ]
            ]);
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
        $form = $this->createForm(ArticleType::class, $article,
            [
                'formation' => $this->dataUserSession->getFormation(),
                'attr'      => [
                    'data-provide' => 'validation'
                ]
            ]);
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
}
