<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/GroupeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2023 08:42
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Repository\GroupeRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class GroupeController extends BaseController
{
    #[Route(path: '/api/unifolio/groupe', name: 'api_groupe_liste')]
    public function listeGroupe(
        Request $request,
        GroupeRepository $groupeRepository,

    ): JsonResponse
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
                $semestre = $type->getSemestre()->getCodeElement();
            } else {
                $typeGroupes = [];
            }

            if ($groupe->getApcParcours() != null) {
                $parcours = $groupe->getApcParcours();
                $parcoursGroupes = [];
                $parcoursGroupes[] = [
                    'id' => $parcours->getId(),
                    'libelle' => $parcours->getLibelle(),
                ];
            } else {
                $parcoursGroupes = [];
            }

                $tabGroupe[] = [
                    'id' => $groupe->getId(),
                    'libelle' => $groupe->getLibelle(),
                    'code' => $groupe->getCodeApogee(),
                    'ordre' => $groupe->getOrdre(),
                    'type' => $typeGroupes,
                    'parcours' => $parcoursGroupes,
                    'semestre' => $semestre,
                ];
            }

        return $this->json($tabGroupe);
    }
}
