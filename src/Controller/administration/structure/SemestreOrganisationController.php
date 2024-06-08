<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/structure/SemestreOrganisationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/04/2024 09:12
 */

namespace App\Controller\administration\structure;

use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SemestreOrganisationController extends BaseController
{
    #[Route('/administration/structure/organisation/semestre', name: 'administration_semestre_organisation_index')]
    public function index(): Response
    {
        $this->dataUserSession->initDataUserSession($this->getUser());
        return $this->render('administration/structure/semestre_organisation/index.html.twig',
            [
                'semestres' => $this->dataUserSession->getSemestres(),
            ]);
    }
}
