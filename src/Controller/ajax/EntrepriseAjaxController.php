<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ajax/EntrepriseAjaxController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:36
 */

namespace App\Controller\ajax;

use App\Classes\MyEntreprise;
use App\Controller\BaseController;
use App\Entity\Entreprise;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceApiController.
 *
 * @IsGranted("ROLE_PERMANENT")
 */
#[Route(path: '/ajax/entreprise')]
class EntrepriseAjaxController extends BaseController
{
    #[Route(path: '/edit/{id}', name: 'entreprise_ajax_edit', options: ['expose' => true])]
    public function edit(MyEntreprise $myEntreprise, Request $request, Entreprise $entreprise): JsonResponse
    {
        $name = $request->request->get('field');
        $value = $request->request->get('value');
        $update = $myEntreprise->update($entreprise, $name, $value);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
