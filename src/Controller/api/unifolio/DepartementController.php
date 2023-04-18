<?php

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Entity\Departement;
use App\Repository\DepartementRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DepartementController extends BaseController
{
    #[Route(path: '/api/unifolio/departement/liste', name: 'api_departement_liste')]
    public function listeDepartement(
        Request $request,
        DepartementRepository $departementRepository
    )
    {
        //TODO: décommenter ça quand lien avec Unifolio OK
//        $this->checkAccessApi($request);

        $departement = $departementRepository->findAll();

        $tabDepartement = [];

        foreach ($departement as $dept) {
            $tabDepartement[$dept->getId()] = [
                'id' => $dept->getId(),
                'libelle' => $dept->getLibelle(),
                'couleur' => $dept->getCouleur(),
                'logo' => $dept->getLogoName(),
                'tel_contact' => $dept->getTelContact(),
                'description' => $dept->getDescription(),
            ];
        }

        return $this->json($tabDepartement);

    }
}