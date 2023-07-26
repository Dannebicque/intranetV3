<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/DiplomeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2023 08:42
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Entity\Departement;
use App\Repository\DiplomeRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DiplomeController extends BaseController
{
    #[Route(path: '/api/unifolio/diplome/{departement}', name: 'api_diplome_liste')]
    public function listeDiplome(
        Request     $request,
        Departement $departement
    ): JsonResponse
    {
        $this->checkAccessApi($request);

        $tabDiplome = [];

        foreach ($departement->getDiplomes() as $diplome) {
            $tabDiplome[$diplome->getId()] = [
                'id' => $diplome->getId(),
                'libelle' => $diplome->getLibelle(),
                'sigle' => $diplome->getSigle(),
                'departement' => $diplome->getDepartement()->getId(),
            ];
        }

        return $this->json($tabDiplome);
    }

    #[Route(path: '/api/unifolio/diplome/', name: 'api_diplome_all')]
    public function allDiplome(
        DiplomeRepository $diplomeRepository
    ): JsonResponse
    {
//        $this->checkAccessApi($request);

        $diplomes = $diplomeRepository->findAll();

        $tabDiplome = [];

        foreach ($diplomes as $diplome) {
            if ($diplome->getTypeDiplome()->getId() == 4) {

                if ($diplome->getApcParcours() != null) {
                    $parcours = $diplome->getApcParcours();
                    $apcParcours = [];
                    $apcParcours[] = [
                        'id' => $parcours->getId(),
                        'libelle' => $parcours->getLibelle(),
                    ];
                }
                else {
                    $apcParcours = [];
                }

                $tabDiplome[$diplome->getId()] = [
                    'id' => $diplome->getId(),
                    'libelle' => $diplome->getLibelle(),
                    'sigle' => $diplome->getSigle(),
                    'departement' => $diplome->getDepartement()->getLibelle(),
                    'type' => $diplome->getTypeDiplome()->getId(),
                    'parcours' => $apcParcours,
                ];
            }
        }
        return $this->json($tabDiplome);
    }
}
