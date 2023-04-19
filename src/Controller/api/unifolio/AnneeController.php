<?php

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Repository\AnneeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AnneeController extends BaseController
{
    #[Route(path: '/api/unifolio/annee', name: 'api_annee_liste')]
    public function listeAnnee(
        Request $request,
        AnneeRepository $anneeRepository
    )
    {
        $this->checkAccessApi($request);

        $annees = $anneeRepository->findAll();

        $tabAnnee = [];

        foreach ($annees as $annee) {
            $tabAnnee[$annee->getId()] = [
                'id' => $annee->getId(),
                'libelle' => $annee->getLibelle(),
                'ordre' => $annee->getOrdre(),
                'libelle_long' => $annee->getLibelleLong(),
                'opt_alternance' => $annee->getOptAlternance(),
                'actif' => $annee->getActif(),
                'diplome' => $annee->getDiplome()->getLibelle(),
            ];
        }

        return $this->json($tabAnnee);
    }
}