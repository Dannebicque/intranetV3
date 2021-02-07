<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/RechercheController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Controller;

use App\Repository\EtudiantRepository;
use App\Repository\PersonnelDepartementRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RechercheController.
 *
 * @Route("/recherche")
 */
class RechercheController extends BaseController
{
    /**
     * @Route("/{keyword}", name="recherche", options={"expose":true}, methods={"GET"})
     *
     * @param $keyword
     */
    public function index(
        EtudiantRepository $etudiantRepository,
        PersonnelDepartementRepository $personnelRepository,
        $keyword
    ): JsonResponse {
        $t['etudiants'] = $etudiantRepository->search($keyword, $this->getDepartement());
        $t['personnels'] = $personnelRepository->search($keyword, $this->getDepartement());
        $t['autres'] = [];
        $t['basepath'] = $this->getParameter('BASE_URL') . 'upload/';

        return $this->json($t);
    }
}
