<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/WizardDiplomeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Departement;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administratif/structure/diplome-wizard')]
class WizardDiplomeController extends BaseController
{
    #[Route(path: '/new/{departement}', name: 'sa_diplome_new_wizard_index', methods: 'GET|POST')]
    public function create(Departement $departement): Response
    {
        return $this->render('structure/diplome-wizard/index.html.twig', [
            'departement' => $departement,
            'step' => 1,
        ]);
    }
}
