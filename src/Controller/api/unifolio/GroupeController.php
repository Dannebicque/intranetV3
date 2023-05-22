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
use App\Repository\TypeGroupeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class GroupeController extends BaseController
{
    #[Route(path: '/api/unifolio/groupe/', name: 'api_groupe_liste')]
    public function listeGroupe(
        Request     $request,
        GroupeRepository $groupeRepository,
        TypeGroupeRepository $typeGroupeRepository
    )
    {
        $this->checkAccessApi($request);

        $groupes = $groupeRepository->findAll();

        $tabGroupe = [];

        foreach ($groupes as $groupe) {
            if ($groupe->getTypeGroupe() != null) {
                $type = $groupe->getTypeGroupe();
            $typeGroupes = [];
                $typeGroupes[] = [
                    'id' => $type->getId(),
                    'libelle' => $type->getLibelle(),
                ];

                $tabGroupe[] = [
                    'id' => $groupe->getId(),
                    'libelle' => $groupe->getLibelle(),
                    'code' => $groupe->getCodeApogee(),
                    'ordre' => $groupe->getOrdre(),
                    'type' => $typeGroupes,
                ];
            }
        }

        return $this->json($tabGroupe);
    }
}
