<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/WizardDiplomeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/06/2021 21:20
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Departement;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/structure/diplome-wizard")
 */
class WizardDiplomeController extends BaseController
{
    /**
     * @Route("/new/{departement}", name="sa_diplome_new_wizard_index", methods="GET|POST")
     */
    public function create(Departement $departement): Response
    {
        return $this->render('structure/diplome-wizard/index.html.twig', [
            'departement' => $departement,
            'step' => 1,
        ]);
    }
}
