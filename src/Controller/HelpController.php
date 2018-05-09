<?php

namespace App\Controller;

use App\Repository\HelpRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class HelpController
 * @package App\Controller
 * @Route("/{_locale}/aide",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class HelpController extends Controller
{
    /**
     * @Route("/", name="help_index")
     */
    public function index()
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
    public function article(HelpRepository $helpRepository, $sujet)
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
    public function imprimer($sujet)
    {
        return $this->render('help/article.html.twig', [
        ]);
    }
}
