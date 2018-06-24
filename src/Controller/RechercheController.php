<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RechercheController
 * @package App\Controller
 */
class RechercheController extends BaseController
{
    /**
     * @Route("/recherche", name="recherche")
     */
    public function index()
    {
        return $this->render('recherche/index.html.twig', [
            'controller_name' => 'RechercheController',
        ]);
    }
}
