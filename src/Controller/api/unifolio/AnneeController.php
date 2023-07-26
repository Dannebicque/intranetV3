<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/AnneeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2023 08:42
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Repository\AnneeRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AnneeController extends BaseController
{
    #[Route(path: '/api/unifolio/annee', name: 'api_annee_liste')]
    public function listeAnnee(
        Request $request,
        AnneeRepository $anneeRepository
    ): JsonResponse
    {
        $this->checkAccessApi($request);

        $annees = $anneeRepository->findAll();

        $tabAnnee = [];

        foreach ($annees as $annee) {
            $tabAnnee[$annee->getId()] = [
                'id' => $annee->getId(),
                'libelle' => $annee->getLibelle(),
                'ordre' => $annee->getOrdre(),
                'libelle_long' => $annee->getLibelleLong(),
                'opt_alternance' => $annee->getOptAlternance(),
                'actif' => $annee->getActif(),
                'diplome' => $annee->getDiplome()->getId(),
            ];
        }

        return $this->json($tabAnnee);
    }
}
