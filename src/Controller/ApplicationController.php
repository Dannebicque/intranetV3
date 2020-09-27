<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ApplicationController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 27/09/2020 10:42

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
     * @Route("/{onglet}/{param}", name="application_index", requirements={"param"="\d+"})
     * @param string $onglet
     *
     * @param string $param
     *
     * @return Response
     */
    public function index($onglet = 'messagerie', $param = ''): Response
    {
        return $this->render('application/index.html.twig', [
            'onglet' => $onglet,
            'param'  => $param
        ]);
    }
}
