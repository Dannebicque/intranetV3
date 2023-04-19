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
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SemestreController extends BaseController
{
    #[Route(path: '/api/unifolio/semestre', name: 'api_semestre_liste')]
    public function listeSemestre(
        Request $request,
        SemestreRepository $semestreRepository,
    ) {

        $this->checkAccessApi($request);

        $semestres = $semestreRepository->findAll();

        $tabSemestre = [];

        foreach ($semestres as $semestre) {
            $tabSemestre[$semestre->getId()] = [
                'id' => $semestre->getId(),
                'libelle' => $semestre->getLibelle(),
                'ordreLmd' => $semestre->getOrdreLmd(),
                'ordreAnnee' => $semestre->getOrdreAnnee(),
                'code' => $semestre->getCodeElement(),
                'actif' => $semestre->getActif(),
                'nb_groupes_cm' => $semestre->getNbGroupesCm(),
                'nb_groupes_td' => $semestre->getNbGroupesTd(),
                'nb_groupes_tp' => $semestre->getNbGroupesTp(),
                'annee' => $semestre->getAnnee()->getLibelle(),
            ];
        }

        return $this->json($tabSemestre);
    }


}
