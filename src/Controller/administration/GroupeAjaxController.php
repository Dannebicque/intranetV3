<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/GroupeAjaxController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/08/2022 10:19
 */

namespace App\Controller\administration;

use App\Classes\MyGroupes;
use App\Controller\BaseController;
use App\Entity\Groupe;
use App\Repository\GroupeRepository;
use App\Repository\ParcourRepository;
use App\Repository\TypeGroupeRepository;
use App\Utils\JsonRequest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/groupe/ajax')]
class GroupeAjaxController extends BaseController
{
    #[Route(path: '/update/{id}', name: 'administration_groupe_ajax_edit', options: ['expose' => true], methods: ['POST'])]
    public function update(MyGroupes $myGroupes, Request $request, Groupe $groupe): ?JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $groupe->getTypeGroupe()?->getSemestre());
        $name = $request->request->get('field');
        $value = $request->request->get('value');
        $update = $myGroupes->update($groupe, $name, $value);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @throws \JsonException
     */
    #[Route(path: '/update-parent', name: 'administration_groupe_change_parent', options: ['expose' => true], methods: ['POST'])]
    public function updateParent(GroupeRepository $groupeRepository, Request $request): ?JsonResponse
    {
        $groupe = $groupeRepository->find(JsonRequest::getValueFromRequest($request,'groupe'));
        $parent = $groupeRepository->find(JsonRequest::getValueFromRequest($request,'parent'));
        if (null !== $groupe && null !== $parent) {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $groupe->getTypeGroupe()?->getSemestre());

            $groupe->setParent($parent);
            $this->entityManager->flush();

            return new JsonResponse(true, Response::HTTP_OK);
        }

        return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/update-typegroupe', name: 'administration_groupe_change_typegroupe', options: ['expose' => true], methods: ['POST'])]
    public function updateTypeGroupe(TypeGroupeRepository $typeGroupeRepository, GroupeRepository $groupeRepository, Request $request): ?JsonResponse
    {
        $groupe = $groupeRepository->find(JsonRequest::getValueFromRequest($request,'groupe'));
        $typegroupe = $typeGroupeRepository->find(JsonRequest::getValueFromRequest($request,'typegroupe'));
        if (null !== $groupe && null !== $typegroupe) {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $typegroupe->getSemestre());

            $groupe->setTypeGroupe($typegroupe);
            $this->entityManager->flush();

            return new JsonResponse(true, Response::HTTP_OK);
        }

        return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/update-parcours', name: 'administration_groupe_change_parcours', options: ['expose' => true], methods: ['POST'])]
    public function updateParcours(ParcourRepository $parcourRepository, GroupeRepository $groupeRepository, Request $request): ?JsonResponse
    {
        $groupe = $groupeRepository->find(JsonRequest::getValueFromRequest($request,'groupe'));
        $parcours = $parcourRepository->find(JsonRequest::getValueFromRequest($request,'parcours'));
        if (null !== $groupe && null !== $parcours) {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $groupe->getTypeGroupe()->getSemestre());

            $groupe->setParcours($parcours);
            $this->entityManager->flush();

            return new JsonResponse(true, Response::HTTP_OK);
        }

        return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
