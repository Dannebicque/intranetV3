<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/api/AbsenceApiController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\TypeGroupe;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceApiController
 * @package App\Controller
 * @Route("/api/absence")
 */
class AbsenceApiController extends BaseController
{
    /**
     * @Route("/liste/etudiant/{typegroupe}", name="api_absence_liste_etudiant", requirements={"typegroupe"="\d+"},
     *                                        options={"expose":true})
     *
     * @param TypeGroupe $typegroupe
     *
     * @return Response
     */
    public function listeEtudiant(TypeGroupe $typegroupe): Response
    {
        return $this->render('api/absence/listeEtudiant.html.twig', [
            'selectedTypeGroupe' => $typegroupe
        ]);
    }
}
