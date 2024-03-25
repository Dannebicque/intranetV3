<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/ajax/AdresseAjaxController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\ajax;

use App\Classes\MyAdresse;
use App\Controller\BaseController;
use App\Entity\Adresse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class AbsenceApiController.
 */
#[Route(path: '/ajax/adresse')]
class AdresseAjaxController extends BaseController
{
    #[Route(path: '/edit/{id}', name: 'adresse_ajax_edit', options: ['expose' => true])]
    public function edit(MyAdresse $myAdresse, Request $request, Adresse $adresse): JsonResponse
    {
        $name = $request->request->get('field');
        $value = $request->request->get('value');
        $update = $myAdresse->update($adresse, $name, $value);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
