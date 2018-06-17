<?php

namespace App\Controller\administration;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class StatistiqueController
 * @package App\Controller\administration
 * @Route({"fr":"administration/statistique",
 *         "en":"administration/statistical"}
 *)
 */
class StatistiqueController extends BaseController
{
    /**
     * @Route("/", name="administration_statistique_index")
     */
    public function index()
    {
        return $this->render('administration/statistique/index.html.twig', [
            'controller_name' => 'StatistiqueController',
        ]);
    }
}
