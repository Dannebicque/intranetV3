<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/ApprentissageCritiqueController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Repository\ApcApprentissageCritiqueRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

class ApprentissageCritiqueController extends BaseController
{
    #[Route(path: '/api/unifolio/apprentissage_critique', name: 'api_apprentissage_critique_liste')]
    public function listeApprentissageCritique(
        Request $request,
        ApcApprentissageCritiqueRepository $apprentissageCritiqueRepository
    ): JsonResponse
    {
        $this->checkAccessApi($request);

        $apprentissageCritiques = $apprentissageCritiqueRepository->findAll();

        $tabApcApprentissageCritique = [];

        foreach ($apprentissageCritiques as $apprentissageCritique) {
            $tabApcApprentissageCritique[$apprentissageCritique->getId()] = [
                'id' => $apprentissageCritique->getId(),
                'libelle' => $apprentissageCritique->getLibelle(),
                'code' => $apprentissageCritique->getCode(),
                'niveau' => $apprentissageCritique->getNiveau()->getId(),
            ];
        }
        return $this->json($tabApcApprentissageCritique);
    }

}
