<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/SemestreController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/04/2023 17:09
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Entity\Annee;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SemestreController extends BaseController
{
    #[Route(path: '/api/unifolio/semestre/liste/{annee}', name: 'api_semestre_liste')]
    public function listeSemestre(
        Request $request,
        Annee $annee
    ) {

        $this->checkAccessApi($request);

        $tabSemestre = [];

        foreach ($annee->getSemestres() as $semestre) {
            $tabSemestre[$semestre->getId()] = [
                'id' => $semestre->getId(),
                'libelle' => $semestre->getLibelle(),
                'numero' => $semestre->getOrdreLmd(),
                'code' => $semestre->getCodeElement(),
                'diplome' => $semestre->getAnnee()->getId(),
            ];
        }

        return $this->json($tabSemestre);
    }


}
