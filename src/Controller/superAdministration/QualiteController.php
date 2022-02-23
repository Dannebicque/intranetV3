<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/QualiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:36
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administratif/qualite')]
class QualiteController extends BaseController
{
    #[Route(path: '/', name: 'sa_qualite_index', methods: 'GET')]
    public function index(): Response
    {
        return $this->render('super-administration/qualite/index.html.twig');
    }
}
