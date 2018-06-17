<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use Symfony\Component\Routing\Annotation\Route;

class ScolariteController extends BaseController
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
