<?php

namespace App\Controller;

use App\Repository\HelpRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class HelpController
 * @package App\Controller
 * @Route("/aide")
 */
class HelpController extends BaseController
{
    /**
     * @Route("/", name="help_index")
     */
    public function index(): Response
    {
        return $this->render('help/index.html.twig', [
        ]);
    }

    /**
     * @Route("/article/{sujet}", name="help_article")
     * @param HelpRepository $helpRepository
     * @param                $sujet
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function article(HelpRepository $helpRepository, $sujet) :Response
    {
        $article = $helpRepository->findBySlug($sujet);

        return $this->render('help/article.html.twig', [
            'article' => $article
        ]);
    }

    /**
     * @Route("/imprimer/{sujet}", name="help_print")
     * @param $sujet
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function imprimer($sujet) :Response
    {
        return $this->render('help/article.html.twig', [
        ]);
    }
}
