<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/GroupeAjaxController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:17
 */

namespace App\Controller\administration;

use App\Classes\MyGroupes;
use App\Controller\BaseController;
use App\Entity\Groupe;
use App\Repository\GroupeRepository;
use App\Repository\ParcourRepository;
use App\Repository\TypeGroupeRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/groupe/ajax")
 */
class GroupeAjaxController extends BaseController
{
    /**
     * @Route("/update/{id}", name="administration_groupe_ajax_edit", methods={"POST"}, options={"expose":true})
     */
    public function update(MyGroupes $myGroupes, Request $request, Groupe $groupe): ?JsonResponse
    {
        $name = $request->request->get('field');
        $value = $request->request->get('value');

        $update = $myGroupes->update($groupe, $name, $value);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/update-parent", name="administration_groupe_change_parent", methods={"POST"}, options={"expose":true})
     */
    public function updateParent(GroupeRepository $groupeRepository, Request $request): ?JsonResponse
    {
        $groupe = $groupeRepository->find($request->request->get('groupe'));
        $parent = $groupeRepository->find($request->request->get('parent'));

        if (null !== $groupe && null !== $parent) {
            $groupe->setParent($parent);
            $this->entityManager->flush();

            return new JsonResponse(true, Response::HTTP_OK);
        }

        return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/update-typegroupe", name="administration_groupe_change_typegroupe", methods={"POST"},
     *                              options={"expose":true})
     */
    public function updateTypeGroupe(
        TypeGroupeRepository $typeGroupeRepository,
        GroupeRepository $groupeRepository,
        Request $request
    ): ?JsonResponse {
        $groupe = $groupeRepository->find($request->request->get('groupe'));
        $typegroupe = $typeGroupeRepository->find($request->request->get('typegroupe'));

        if (null !== $groupe && null !== $typegroupe) {
            $groupe->setTypeGroupe($typegroupe);
            $this->entityManager->flush();

            return new JsonResponse(true, Response::HTTP_OK);
        }

        return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/update-parcours", name="administration_groupe_change_parcours", methods={"POST"},
     *                            options={"expose":true})
     */
    public function updateParcours(
        ParcourRepository $parcourRepository,
        GroupeRepository $groupeRepository,
        Request $request
    ): ?JsonResponse {
        $groupe = $groupeRepository->find($request->request->get('groupe'));
        $parcours = $parcourRepository->find($request->request->get('parcours'));

        if (null !== $groupe && null !== $parcours) {
            $groupe->setParcours($parcours);
            $this->entityManager->flush();

            return new JsonResponse(true, Response::HTTP_OK);
        }

        return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
