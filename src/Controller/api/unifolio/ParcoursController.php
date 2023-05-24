<?php

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Entity\ApcParcours;
use App\Repository\ApcParcoursRepository;
use App\Repository\ApcReferentielRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ParcoursController extends BaseController
{
    #[Route(path: '/api/unifolio/parcours', name: 'api_parcours_liste')]
    public function listeReferentiel(
        Request                  $request,
        ApcParcoursRepository $parcoursRepository
    )
    {
//        $this->checkAccessApi($request);

        $parcours = $parcoursRepository->findAll();

        $tabApcParcours = [];

        foreach ($parcours as $apcParcours) {
            $tabApcParcours[$apcParcours->getId()] = [
                'id' => $apcParcours->getId(),
                'libelle' => $apcParcours->getLibelle(),
                'code' => $apcParcours->getCode(),
                'actif' => $apcParcours->getActif(),
                'referentiel' => $apcParcours->getApcReferentiel()->getLibelle(),
            ];
        }
        return $this->json($tabApcParcours);
    }
}