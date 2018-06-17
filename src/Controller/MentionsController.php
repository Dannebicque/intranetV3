<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MentionsController
 * @package App\Controller
 * @Route("/{_locale}/mentions-legales",
 *     requirements={
 *         "_locale": "fr|en"})
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
}
