<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/ApplicationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class ApplicationController.
 */
#[Route(path: '/application')]
class ApplicationController extends BaseController
{
    #[Route(path: '/{onglet}/{param}', name: 'application_index', requirements: ['param' => '\d+'])]
    public function index(string $onglet = 'messagerie', string $param = ''): Response
    {
        $this->breadcrumbHelper->addItem('application.breadcrumb.index', 'application_index', ['onglet' => $onglet, 'param' => $param]);

        return $this->render('application/index.html.twig', [
            'onglet' => $onglet,
            'param' => $param,
        ]);
    }
}
