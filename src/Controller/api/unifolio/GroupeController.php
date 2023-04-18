<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/GroupeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/04/2023 17:09
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Entity\Semestre;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class GroupeController extends BaseController
{
    #[Route(path: '/api/unifolio/groupes/liste/{semestre}', name: 'api_groupes_liste')]
    public function listeGroupes(
        Request $request,
        Semestre $semestre
    ) {
        $this->checkAccessApi($request);

        $groupes = [];

        foreach ($semestre->getTypeGroupess() as $typeGroupess) {
            $groupes[$typeGroupess->getId()] = [
                'id' => $typeGroupess->getId(),
                'libelle' => $typeGroupess->getLibelle(),
                'ordre_semestre' => $typeGroupess->getOrdreSemestre(),
            ];

            foreach ($typeGroupess->getGroupes() as $groupe) {
                $groupes[$typeGroupess->getId()]['groupes'][$groupe->getId()] = [
                    'id' => $groupe->getId(),
                    'libelle' => $groupe->getLibelle(),
                    'code' => $groupe->getCodeApogee(),
                    'ordre' => $groupe->getOrdre(),
                ];
            }
        }

        return $this->json($groupes);
    }


}
