<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/NiveauController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Repository\ApcNiveauRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

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

            $parcours = [];
            foreach ($niveau->getApcParcoursNiveaux() as $apcParcours) {
                $parcours[] = [
                    'id' => $apcParcours->getParcours()->getId(),
                    'libelle' => $apcParcours->getParcours()->getLibelle(),
                    'code' => $apcParcours->getParcours()->getCode(),
                    'actif' => $apcParcours->getParcours()->getActif(),
                    'referentiel' => $apcParcours->getParcours()->getApcReferentiel()->getId(),
                ];
            }

            $tabApcNiveau[$niveau->getId()] = [
                'id' => $niveau->getId(),
                'libelle' => $niveau->getLibelle(),
                'ordre' => $niveau->getOrdre(),
                'competences' => $niveau->getCompetence()->getId(),
                'parcours' => $parcours,
            ];
        }
        return $this->json($tabApcNiveau);
    }
}
