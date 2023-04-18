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
use App\Entity\Diplome;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class CompetenceController extends BaseController
{
    #[Route(path: '/api/unifolio/competences/{diplome}', name: 'api_competences')]
    public function competences(
        Request $request,
        Diplome $diplome
    ) {
        //TODO: décommenter ça quand lien avec Unifolio OK
//        $this->checkAccessApi($request);

        $competences = [];
        $referentiel = $diplome->getReferentiel();

        foreach ($referentiel->getApcComptences() as $competence) {
            $competences[$competence->getId()] = [
                'id' => $competence->getId(),
                'libelle' => $competence->getLibelle(),
                'nomCourt' => $competence->getNomCourt(),
                'couleur' => $competence->getCouleur()
            ];

            foreach ($competence->getApcNiveaux() as $niveau) {
                $competences[$competence->getId()]['niveaux'][$niveau->getId()] = [
                    'id' => $niveau->getId(),
                    'libelle' => $niveau->getLibelle(),
                    'ordre' => $niveau->getOrdre(),
                    'ordreAnnee' => $niveau->getOrdreAnnee(),
                ];

                foreach ($niveau->getApcApprentissageCritiques() as $ac) {
                    $competences[$competence->getId()]['niveaux'][$niveau->getId()]['ac'][$ac->getId()] = [
                        'id' => $ac->getId(),
                        'libelle' => $ac->getLibelle(),
                        'code' => $ac->getCode(),
                    ];
                }
            }
        }

        return $this->json($competences);
    }


}
