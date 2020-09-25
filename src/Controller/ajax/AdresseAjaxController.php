<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ajax/AdresseAjaxController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/09/2020 09:01

namespace App\Controller\ajax;

use App\Classes\MyContact;
use App\Controller\BaseController;
use App\Entity\Adresse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceApiController
 * @package App\Controller
 * @Route("/ajax/adresse")
 * @IsGranted("ROLE_PERMANENT")
 */
class AdresseAjaxController extends BaseController
{
    /**
     * @Route("/edit/{id}", name="adresse_ajax_edit", options={"expose":true})
     *
     * @param MyContact $myAdresse
     * @param Request   $request
     *
     * @param Adresse   $adresse
     *
     * @return JsonResponse
     */
    public function edit(MyContact $myAdresse, Request $request, Adresse $adresse): JsonResponse
    {
        $name = $request->request->get('field');
        $value = $request->request->get('value');

        $update = $myAdresse->update($adresse, $name, $value);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
