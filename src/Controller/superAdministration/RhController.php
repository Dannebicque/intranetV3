<?php

namespace App\Controller\superAdministration;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class RhController extends Controller
{
    /**
     * @Route("/rh", name="sa_rh_index")
     */
    public function index()
    {
        return $this->render('super-administration/rh/index.html.twig', [
            'controller_name' => 'ScolariteController',
        ]);
    }
}
