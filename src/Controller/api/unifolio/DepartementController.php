<?php

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Entity\Departement;
use App\Repository\DepartementRepository;
use App\Repository\DiplomeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DepartementController extends BaseController
{
    #[Route(path: '/api/unifolio/departement', name: 'api_departement_liste')]
    public function listeDepartement(
        Request               $request,
        DepartementRepository $departementRepository,
        DiplomeRepository     $diplomeRepository,
    )
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
//                    'libelle' => $diplome->getTypeDiplome()->getLibelle(),
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