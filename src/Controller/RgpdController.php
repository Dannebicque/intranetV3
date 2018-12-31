<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class RgpdController
 * @package App\Controller
 * @Route("/mentions-legales/rgpd")
 */
class RgpdController extends Controller
{
    /**
     * @Route("/", name="rgpd_index")
     */
    public function index(): Response
    {
        return $this->render('rgpd/index.html.twig', [
            'controller_name' => 'RgpdController',
        ]);
    }
}
