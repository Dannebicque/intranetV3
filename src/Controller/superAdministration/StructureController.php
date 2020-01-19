<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/StructureController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Departement;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StructureController
 * @package App\Controller\administration
 * @Route("/administratif/structure")
 */
class StructureController extends BaseController
{
    /**
     * @Route("/detail/{departement}", name="sa_structure_index")
     * @param Departement $departement
     *
     * @return Response
     */
    public function index(Departement $departement): Response
    {
        return $this->render('structure/index.html.twig', [
            'departement' => $departement,
        ]);
    }
}
