<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/DepartementController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2023 08:42
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Repository\DepartementRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DepartementController extends BaseController
{
    #[Route(path: '/api/unifolio/departement', name: 'api_departement_liste')]
    public function listeDepartement(
        Request               $request,
        DepartementRepository $departementRepository,
    ): JsonResponse
    {

        $this->checkAccessApi($request);

        $departement = $departementRepository->findAll();

        $tabDepartement = [];

        foreach ($departement as $dept) {

        // Récupérer les types de diplomes des diplomes du departement Departement->Diplome->TypeDiplome
            $typeDiplome = [];
            foreach ($dept->getDiplomes() as $diplome) {
//                Créer un tableau avec les types de diplomes
                $typeDiplome[] = [
                    'id' => $diplome->getTypeDiplome()->getId(),
                ];

                $tabDepartement[$dept->getId()] = [
                    'id' => $dept->getId(),
                    'libelle' => $dept->getLibelle(),
                    'couleur' => $dept->getCouleur(),
                    'logo' => $dept->getLogoName(),
                    'tel_contact' => $dept->getTelContact(),
                    'description' => $dept->getDescription(),
                    'typeD' => $typeDiplome,
                ];
            }
        }

//                dd($tabDepartement);
        return $this->json($tabDepartement);

    }
}
