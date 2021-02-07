<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ApplicationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ApplicationController.
 *
 * @Route("/application")
 */
class ApplicationController extends BaseController
{
    /**
     * @Route("/{onglet}/{param}", name="application_index", requirements={"param"="\d+"})
     *
     * @param string $onglet
     * @param string $param
     */
    public function index($onglet = 'messagerie', $param = ''): Response
    {
        return $this->render('application/index.html.twig', [
            'onglet' => $onglet,
            'param'  => $param,
        ]);
    }
}
