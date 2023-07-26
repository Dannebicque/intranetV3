<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/TypeGroupeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2023 08:42
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Repository\TypeGroupeRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class TypeGroupeController extends BaseController
{
    #[Route(path: '/api/unifolio/type_groupe', name: 'api_type_groupe_liste')]
    public function listeTypeGroupe(
        TypeGroupeRepository $typeGroupeRepository
    ): JsonResponse
    {

//        $this->checkAccessApi($request);

        $typeGroupes = $typeGroupeRepository->findAll();

        $tabTypeGroupe = [];

        foreach ($typeGroupes as $typeGroupe) {
            $semestres = [];
            foreach ($typeGroupe->getSemestres() as $semestre) {
                $semestres[] = [
                    'id' => $semestre->getId(),
                    'libelle' => $semestre->getLibelle(),
                    'code' => $semestre->getCodeElement(),
                ];
            }

            $tabTypeGroupe[] = [
                'id' => $typeGroupe->getId(),
                'libelle' => $typeGroupe->getLibelle(),
                'ordre' => $typeGroupe->getOrdreSemestre(),
                'type' => $typeGroupe->getType(),
                'semestres' => $semestres,
            ];
        }


        return $this->json($tabTypeGroupe);

    }
}
