<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class MessagerieController
 * @package App\Controller
 * @Route("/{_locale}/messagerie",
 *     requirements={
 *         "_locale": "fr|en"})
 *
 */
class MessagerieController extends Controller
{
    /**
     * @Route("/", name="messagerie_index")
     */
    public function index() :Response
    {
        return $this->render('messagerie/index.html.twig', [
        ]);
    }

    /**
     * @Route("/{message}", name="messagerie_message")
     * @param $message
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function message($message) :Response
    {
        return $this->render('messagerie/message.html.twig', [
        ]);
    }
}
