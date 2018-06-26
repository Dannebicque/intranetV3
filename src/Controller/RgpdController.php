<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class RgpdController
 * @package App\Controller
 */
class RgpdController extends Controller
{
    /**
     * @Route("/rgpd", name="rgpd")
     */
    public function index()
    {
        return $this->render('rgpd/index.html.twig', [
            'controller_name' => 'RgpdController',
        ]);
    }
}
