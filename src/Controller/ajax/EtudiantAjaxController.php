<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ajax/EtudiantAjaxController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:36
 */

namespace App\Controller\ajax;

use App\Classes\Etudiant\EtudiantUpdate;
use App\Controller\BaseController;
use App\Entity\Etudiant;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
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
    /**
     * @ParamConverter("etudiant", options={"mapping": {"uuid": "uuid"}})
     */
    #[Route(path: '/edit/uuid/{uuid}', name: 'etudiant_ajax_edit_uuid', options: ['expose' => true])]
    public function editUuid(EtudiantUpdate $etudiantUpdate, Request $request, Etudiant $etudiant): JsonResponse
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
