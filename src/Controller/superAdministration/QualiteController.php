<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/AnneeController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

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
