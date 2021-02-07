<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/api/AbsenceApiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:36
 */

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\TypeGroupe;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceApiController.
 *
 * @Route("/api/absence")
 */
class AbsenceApiController extends BaseController
{
    /**
     * @Route("/liste/etudiant/{typegroupe}", name="api_absence_liste_etudiant", requirements={"typegroupe"="\d+"},
     *                                        options={"expose":true})
     */
    public function listeEtudiant(TypeGroupe $typegroupe): Response
    {
        return $this->render('api/absence/listeEtudiant.html.twig', [
            'selectedTypeGroupe' => $typegroupe,
        ]);
    }
}
