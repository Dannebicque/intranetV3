<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ajax/EtudiantAjaxController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/09/2020 08:52

namespace App\Controller\ajax;

use App\Classes\Etudiant\EtudiantUpdate;
use App\Classes\MyContact;
use App\Controller\BaseController;
use App\Entity\Adresse;
use App\Entity\Etudiant;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceApiController
 * @package App\Controller
 * @Route("/ajax/etudiant")
 * @IsGranted("ROLE_PERMANENT")
 */
class EtudiantAjaxController extends BaseController
{
    /**
     * @Route("/edit/uuid/{uuid}", name="etudiant_ajax_edit_uuid", options={"expose":true})
     * @ParamConverter("etudiant", options={"mapping": {"uuid": "uuid"}})
     * @param EtudiantUpdate $etudiantUpdate
     * @param Request        $request
     *
     * @param Etudiant       $etudiant
     *
     * @return JsonResponse
     */
    public function editUuid(EtudiantUpdate $etudiantUpdate, Request $request, Etudiant $etudiant): JsonResponse
    {
        return $this->update($request, $etudiantUpdate, $etudiant);
    }

    /**
     * @param Request        $request
     * @param EtudiantUpdate $etudiantUpdate
     * @param Etudiant       $etudiant
     *
     * @return JsonResponse
     */
    private function update(Request $request, EtudiantUpdate $etudiantUpdate, Etudiant $etudiant): JsonResponse
    {
        $name = $request->request->get('field');
        $value = $request->request->get('value');

        $update = $etudiantUpdate->update($etudiant, $name, $value);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/edit/{id}", name="etudiant_ajax_edit", options={"expose":true})
     *
     * @param EtudiantUpdate $etudiantUpdate
     * @param Request        $request
     *
     * @param Etudiant       $etudiant
     *
     * @return JsonResponse
     */
    public function edit(EtudiantUpdate $etudiantUpdate, Request $request, Etudiant $etudiant): JsonResponse
    {
        return $this->update($request, $etudiantUpdate, $etudiant);
    }


}
