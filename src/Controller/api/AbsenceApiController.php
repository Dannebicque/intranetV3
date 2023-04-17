<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/AbsenceApiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/03/2023 06:46
 */

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\TypeGroupe;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceApiController.
 */
#[Route(path: '/api/absence')]
class AbsenceApiController extends BaseController
{
    #[Route(path: '/liste/etudiant/{typegroupe}', name: 'api_absence_liste_etudiant', requirements: ['typegroupe' => '\d+'], options: ['expose' => true])]
    public function listeEtudiant(TypeGroupe $typegroupe): Response
    {
        $this->denyAccessUnlessGranted('ROLE_PERMANENT');

        return $this->render('api/absence/listeEtudiant.html.twig', [
            'selectedTypeGroupe' => $typegroupe,
        ]);
    }
}
