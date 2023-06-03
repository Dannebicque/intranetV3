<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/CompetenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/04/2023 17:09
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Repository\ApcComptenceRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class CompetenceController extends BaseController
{
    #[Route(path: '/api/unifolio/competences', name: 'api_competences')]
    public function competences(
        Request $request,
        ApcComptenceRepository $competenceRepository,
    ) {
        $this->checkAccessApi($request);

        $competences = $competenceRepository->findAll();

        $tabCompetence = [];

        foreach ($competences as $competence) {
            $tabCompetence[$competence->getId()] = [
                'id' => $competence->getId(),
                'libelle' => $competence->getLibelle(),
                'nom_court' => $competence->getNomCourt(),
                'couleur' => $competence->getCouleur(),
                'referentiel' => $competence->getApcReferentiel()->getLibelle(),
            ];
        }

        return $this->json($tabCompetence);
    }


}
