<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RgpdController
 * @package App\Controller
 * @Route("/mentions-legales/rgpd")
 */
class RgpdController extends BaseController
{
    /**
     * @Route("/", name="rgpd_index")
     */
    public function index(): Response
    {
        return $this->render('rgpd/index.html.twig', [
        ]);
    }
}
