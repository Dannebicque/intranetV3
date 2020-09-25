<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ajax/EntrepriseAjaxController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/09/2020 08:59

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
 * Class AbsenceApiController
 * @package App\Controller
 * @Route("/ajax/entreprise")
 * @IsGranted("ROLE_PERMANENT")
 */
class EntrepriseAjaxController extends BaseController
{
    /**
     * @Route("/edit/{id}", name="entreprise_ajax_edit", options={"expose":true})
     *
     * @param MyEntreprise $myEntreprise
     * @param Request      $request
     *
     * @param Entreprise   $entreprise
     *
     * @return JsonResponse
     */
    public function edit(MyEntreprise $myEntreprise, Request $request, Entreprise $entreprise): JsonResponse
    {
        $name = $request->request->get('field');
        $value = $request->request->get('value');

        $update = $myEntreprise->update($entreprise, $name, $value);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
