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
use App\Repository\GroupeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class GroupeController extends BaseController
{
    #[Route(path: '/api/unifolio/groupes', name: 'api_groupes_liste')]
    public function listeGroupes(
        Request $request,
        GroupeRepository $groupeRepository,
    ) {
        $this->checkAccessApi($request);

        $groupes = $groupeRepository->findAll();

        $tabGroupes = [];

            foreach ($groupes as $groupe) {
                $tabGroupes[$groupe->getId()] = [
                    'id' => $groupe->getId(),
                    'libelle' => $groupe->getLibelle(),
                    'code' => $groupe->getCodeApogee(),
                    'ordre' => $groupe->getOrdre(),
                    'type' => $groupe->getTypeGroupe()->getLibelle(),
                ];
            }

        return $this->json($groupes);
    }
}
