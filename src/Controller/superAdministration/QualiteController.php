<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/QualiteController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller\superAdministration;

use App\Controller\BaseController;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/qualite")
 */
class QualiteController extends BaseController
{


    /**
     * @Route("/", name="sa_qualite_index", methods="GET")
     *
     * @return Response
     */
    public function index(): Response
    {
        return $this->render('super-administration/qualite/index.html.twig');
    }
}
