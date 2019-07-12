<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/RechercheController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/12/19 11:21 AM
 */

namespace App\Controller;

use App\Repository\EtudiantRepository;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RechercheController
 * @package App\Controller
 * @Route("/recherche")
 */
class RechercheController extends BaseController
{
    /**
     * @Route("/{keyword}", name="recherche", options={"expose":true})
     * @param EtudiantRepository $etudiantRepository
     * @param PersonnelRepository $personnelRepository
     * @param                     $keyword
     *
     * @return JsonResponse
     */
    public function index(
        EtudiantRepository $etudiantRepository,
        PersonnelRepository $personnelRepository,
        $keyword
    ): JsonResponse {
        $t['etudiants'] = $etudiantRepository->search($keyword);
        $t['personnels'] = $personnelRepository->search($keyword);
        $t['autres'] = [];

        return $this->json($t);
    }
}
