<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/api/AbsenceApiController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 9/13/18 8:03 AM
 */

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
