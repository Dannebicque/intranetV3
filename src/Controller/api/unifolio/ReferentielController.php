<?php

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Entity\Departement;
use App\Repository\ApcReferentielRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ReferentielController extends BaseController
{

    #[Route(path: '/api/unifolio/referentiel', name: 'api_referentiel_liste')]
    public function listeReferentiel(
        Request     $request,
        ApcReferentielRepository $referentielRepository
    )
    {
        $this->checkAccessApi($request);

        $referentiels = $referentielRepository->findAll();

        $tabApcReferentiel = [];

        foreach ($referentiels as $referentiel) {
            $tabApcReferentiel[$referentiel->getId()] = [
                'id' => $referentiel->getId(),
                'libelle' => $referentiel->getLibelle(),
                'description' => $referentiel->getDescription(),
                'annee' => $referentiel->getAnneePublication(),
                'departement' => $referentiel->getDepartement()->getLibelle(),
            ];
        }
        return $this->json($tabApcReferentiel);
    }
}