<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/ParcoursController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2023 08:42
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Entity\ApcParcoursNiveau;
use App\Repository\ApcParcoursRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ParcoursController extends BaseController
{
    #[Route(path: '/api/unifolio/parcours', name: 'api_parcours_liste')]
    public function listeReferentiel(
        Request $request,
        ApcParcoursRepository $parcoursRepository
    ): JsonResponse
    {
        $this->checkAccessApi($request);

        $parcours = $parcoursRepository->findAll();

        $tabApcParcours = [];

        foreach ($parcours as $apcParcours) {
            $niveaux = [];
            /** @var ApcParcoursNiveau $niveau */
            foreach ($apcParcours->getApcParcoursNiveaux() as $niveau) {
                $niveaux[] = [
                    'id' => $niveau->getNiveau()->getId(),
                    'libelle' => $niveau->getNiveau()->getLibelle(),
                    'ordre' => $niveau->getNiveau()->getOrdre(),
                    'competences' => $niveau->getNiveau()->getCompetence()->getId(),
                ];
            }
            $tabApcParcours[$apcParcours->getId()] = [
                'id' => $apcParcours->getId(),
                'libelle' => $apcParcours->getLibelle(),
                'code' => $apcParcours->getCode(),
                'actif' => $apcParcours->getActif(),
                'referentiel' => $apcParcours->getApcReferentiel()->getId(),
                'niveaux' => $niveaux,
            ];
        }
        return $this->json($tabApcParcours);
    }
}
