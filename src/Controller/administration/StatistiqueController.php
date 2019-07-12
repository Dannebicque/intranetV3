<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/StatistiqueController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 8/28/18 1:29 PM
 */

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
