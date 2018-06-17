<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MessagerieController
 * @package App\Controller
 * @Route("/{_locale}/messagerie",
 *     requirements={
 *         "_locale": "fr|en"})
 *
 */
class MessagerieController extends BaseController
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
     * @param $filtre
     * @Route("/filtre/{filtre}", name="messagerie_filtre", options={"expose":true})
     *
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function filtre($filtre): JsonResponse
    {
        $t = array();

        return $this->json($t);
    }

    /**
     * @Route("/{message}", name="messagerie_message", options={"expose":true})
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
