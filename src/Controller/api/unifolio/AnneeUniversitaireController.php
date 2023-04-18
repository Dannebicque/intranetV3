<?php

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Entity\AnneeUniversitaire;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AnneeUniversitaireController extends BaseController
{
    #[Route(path: '/api/unifolio/anneeUniversitaire/liste', name: 'api_anneeUniversitaire_liste')]
    public function listeAnneeUniversitaire(
        Request $request,
        AnneeUniversitaire $anneeUniversitaire
    )
    {
        //TODO: décommenter ça quand lien avec Unifolio OK
//        $this->checkAccessApi($request);

        $tabAnneeUniversitaire = [];

        foreach ($anneeUniversitaire as $anneeUniv) {
            $tabAnneeUniversitaire[$anneeUniv->getId()] = [
                'id' => $anneeUniv->getId(),
                'libelle' => $anneeUniv->getLibelle(),
                'annee' => $anneeUniv->getAnnee(),
                'active' => $anneeUniv->getActive(),
            ];
        }
    }
}