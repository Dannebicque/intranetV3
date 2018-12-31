<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class InformationController
 * @package App\Controller
 * @Route("/information")
 */
class InformationController extends BaseController
{
    /**
     * @Route("/", name="informations_index")
     */
    public function index(): Response
    {
        return $this->render('informations/index.html.twig', [
        ]);
    }
}
