<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class AgendaController
 * @package App\Controller
 * @Route("/{_locale}/internationale",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class InternationaleController extends Controller
{
    /**
     * @Route("/", name="internationale_index")
     * @param ArticleRepository $articleRepository
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(ArticleRepository $articleRepository)
    {
        $articles = $articleRepository->FindByTypeFormation('ri', 1);

        return $this->render('internationale/index.html.twig', [
            'articles' => $articles
        ]);
    }
}
