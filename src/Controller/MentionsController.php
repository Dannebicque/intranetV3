<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class MentionsController
 * @package App\Controller
 * @Route("/{_locale}/mentions-legales",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class MentionsController extends Controller
{
    /**
     * @Route("/", name="mentions_index")
     */
    public function index()
    {
        return $this->render('mentions/index.html.twig', [
        ]);
    }
}
