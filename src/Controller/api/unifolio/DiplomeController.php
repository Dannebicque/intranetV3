<?php

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Entity\Departement;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DiplomeController extends BaseController
{
    #[Route(path: '/api/unifolio/diplome/liste/{departement}', name: 'api_diplome_liste')]
    public function listeDiplome(
        Request $request,
        Departement $departement
    )
    {
        //TODO: décommenter ça quand lien avec Unifolio OK
//        $this->checkAccessApi($request);

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
}