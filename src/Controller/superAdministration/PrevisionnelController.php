<?php

namespace App\Controller\superAdministration;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class PrevisionnelController extends BaseController
{
    /**
     * @Route("/previsionnel", name="sa_previsionnel_index")
     */
    public function index()
    {
        return $this->render('super-administration/previsionnel/index.html.twig', [
            'controller_name' => 'ScolariteController',
        ]);
    }
}
