<?php

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Entity\Diplome;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AnneeController extends BaseController
{
    #[Route(path: '/api/unifolio/annee/liste/{diplome}', name: 'api_annee_liste')]
    public function listeAnnee(
        Request $request,
        Diplome $diplome,
    )
    {
        $this->checkAccessApi($request);

        $tabAnnee = [];

        foreach ($diplome->getAnnees() as $annee) {
            $tabAnnee[$annee->getId()] = [
                'id' => $annee->getId(),
                'libelle' => $annee->getLibelle(),
                'ordre' => $annee->getOrdre(),
                'libelle_long' => $annee->getLibelleLong(),
                'opt_alternance' => $annee->getOptAlternance(),
                'actif' => $annee->getActif(),
                'diplome' => $annee->getDiplome()->getId(),
            ];
        }

        return $this->json($tabAnnee);
    }
}