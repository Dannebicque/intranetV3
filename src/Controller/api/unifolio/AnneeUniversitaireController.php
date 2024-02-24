<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/AnneeUniversitaireController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:59
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Entity\AnneeUniversitaire;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

class AnneeUniversitaireController extends BaseController
{
    #[Route(path: '/api/unifolio/anneeUniversitaire/liste', name: 'api_anneeUniversitaire_liste')]
    public function liste_annee_universitaire(
        Request $request,
        AnneeUniversitaire $anneeUniversitaire
    ): void
    {
        $this->checkAccessApi($request);

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
