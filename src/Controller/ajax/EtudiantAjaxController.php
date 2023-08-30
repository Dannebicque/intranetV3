<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/ajax/EtudiantAjaxController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 10:44
 */

namespace App\Controller\ajax;

use App\Classes\Etudiant\EtudiantUpdate;
use App\Controller\BaseController;
use App\Entity\Etudiant;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceApiController.
 */
#[Route(path: '/ajax/etudiant')]
class EtudiantAjaxController extends BaseController
{
    #[Route(path: '/edit/uuid/{uuid}', name: 'etudiant_ajax_edit_uuid', options: ['expose' => true])]
    public function editUuid(EtudiantUpdate $etudiantUpdate, Request $request, #[MapEntity(mapping: ['uuid' => 'uuid'])]
    Etudiant                                $etudiant): JsonResponse
    {
        return $this->update($request, $etudiantUpdate, $etudiant);
    }

    private function update(Request $request, EtudiantUpdate $etudiantUpdate, Etudiant $etudiant): JsonResponse
    {
        $name = $request->request->get('field');
        $value = $request->request->get('value');

        $update = $etudiantUpdate->update($etudiant, $name, $value);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/edit/{id}', name: 'etudiant_ajax_edit', options: ['expose' => true])]
    public function edit(EtudiantUpdate $etudiantUpdate, Request $request, Etudiant $etudiant): JsonResponse
    {
        return $this->update($request, $etudiantUpdate, $etudiant);
    }
}
