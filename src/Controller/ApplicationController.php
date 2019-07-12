<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/ApplicationController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 4/28/19 8:47 PM
 */

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ApplicationController
 * @package App\Controller
 * @Route("/application")
 */
class ApplicationController extends BaseController
{
    /**
     * @Route("/{onglet}", name="application_index")
     * @param string $onglet
     *
     * @return Response
     */
    public function index($onglet = 'messagerie'): Response
    {
        return $this->render('application/index.html.twig', [
            'onglet' => $onglet
        ]);
    }
}
