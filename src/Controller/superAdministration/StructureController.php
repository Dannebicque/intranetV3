<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/StructureController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 4/28/19 8:47 PM
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Departement;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StructureController
 * @package App\Controller\administration
 * @Route("/super-administration/structure")
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
