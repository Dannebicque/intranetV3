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

#[Route(path: '/application')]
class ApplicationController extends BaseController
{
    #[Route(path: '/', name: 'application_index')]
    public function index(): Response
    {
        $this->breadcrumbHelper->addItem('application.breadcrumb.index', 'application_index');

        return $this->render('application/index.html.twig', [
        ]);
    }
}
