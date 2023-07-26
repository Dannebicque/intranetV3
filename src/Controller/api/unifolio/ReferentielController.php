<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/ReferentielController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2023 08:42
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Repository\ApcReferentielRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ReferentielController extends BaseController
{

    #[Route(path: '/api/unifolio/referentiel', name: 'api_referentiel_liste')]
    public function listeReferentiel(
        Request     $request,
        ApcReferentielRepository $referentielRepository
    ): JsonResponse
    {
        $this->checkAccessApi($request);

        $referentiels = $referentielRepository->findAll();

        $tabApcReferentiel = [];

        foreach ($referentiels as $referentiel) {
            $tabApcReferentiel[$referentiel->getId()] = [
                'id' => $referentiel->getId(),
                'libelle' => $referentiel->getLibelle(),
                'description' => $referentiel->getDescription(),
                'annee' => $referentiel->getAnneePublication(),
                'departement' => $referentiel->getDepartement()->getLibelle(),
            ];
        }
        return $this->json($tabApcReferentiel);
    }
}
