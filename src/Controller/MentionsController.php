<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MentionsController
 * @package App\Controller
 * @Route("/mentions-legales")
 */
class MentionsController extends BaseController
{
    /**
     * @Route("/", name="mentions_index")
     */
    public function index(): Response
    {
        return $this->render('mentions/index.html.twig', [
        ]);
    }

    /**
     * @Route("/about", name="mentions_about")
     */
    public function about(): Response
    {
        return $this->render('mentions/about.html.twig', [
        ]);
    }
}
