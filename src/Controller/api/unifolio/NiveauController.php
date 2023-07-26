<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/NiveauController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2023 08:42
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Repository\ApcNiveauRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class NiveauController extends BaseController
{
    #[Route(path: '/api/unifolio/niveau', name: 'api_niveau_liste')]
    public function listeNiveau(
        Request $request,
        ApcNiveauRepository $niveauRepository
    ): JsonResponse
    {
        $this->checkAccessApi($request);

        $niveaux = $niveauRepository->findAll();

        $tabApcNiveau = [];

        foreach ($niveaux as $niveau) {
            $tabApcNiveau[$niveau->getId()] = [
                'id' => $niveau->getId(),
                'libelle' => $niveau->getLibelle(),
                'ordre' => $niveau->getOrdre(),
                'competences' => $niveau->getCompetence()->getLibelle(),
            ];
        }
        return $this->json($tabApcNiveau);
    }
}
