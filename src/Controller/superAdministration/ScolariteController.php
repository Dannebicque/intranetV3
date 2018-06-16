<?php

namespace App\Controller\superAdministration;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ScolariteController extends Controller
{
    /**
     * @Route("/scolarite", name="sa_scolarite_index")
     */
    public function index()
    {
        return $this->render('super-administration/scolarite/index.html.twig', [
            'controller_name' => 'ScolariteController',
        ]);
    }
}
