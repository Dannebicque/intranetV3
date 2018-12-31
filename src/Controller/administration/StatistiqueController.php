<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StatistiqueController
 * @package App\Controller\administration
 * @Route("/administration/statistique")
 */
class StatistiqueController extends BaseController
{
    /**
     * @Route("/", name="administration_statistique_index")
     */
    public function index(): Response
    {
        return $this->render('administration/statistique/index.html.twig', [
            'controller_name' => 'StatistiqueController',
        ]);
    }
}
