<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/GroupeAjaxController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration;

use App\Classes\MyGroupes;
use App\Controller\BaseController;
use App\Entity\Groupe;
use App\Repository\ApcParcoursRepository;
use App\Repository\GroupeRepository;
use App\Repository\ParcourRepository;
use App\Repository\TypeGroupeRepository;
use App\Utils\JsonRequest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administration/groupe/ajax')]
class GroupeAjaxController extends BaseController
{
    #[Route(path: '/update/{id}', name: 'administration_groupe_ajax_edit', options: ['expose' => true], methods: ['POST'])]
    public function update(MyGroupes $myGroupes, Request $request, Groupe $groupe): ?JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $groupe->getTypeGroupe()?->getSemestres()->first());
        $name = JsonRequest::getValueFromRequest($request, 'field');
        $value = JsonRequest::getValueFromRequest($request, 'value');
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
        $groupe = $groupeRepository->find(JsonRequest::getValueFromRequest($request, 'groupe'));

        if (null !== $groupe) {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $groupe->getTypeGroupe()?->getSemestres()->first());
            $parent = JsonRequest::getValueFromRequest($request, 'parent');
            if ($parent !== "") {
                $parent = $groupeRepository->find($parent);
            } else {
                $parent = null;
            }

            $groupe->setParent($parent);
            $this->entityManager->flush();

            return new JsonResponse(true, Response::HTTP_OK);
        }

        return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/update-typegroupe', name: 'administration_groupe_change_typegroupe', options: ['expose' => true], methods: ['POST'])]
    public function updateTypeGroupe(
        TypeGroupeRepository $typeGroupeRepository,
        GroupeRepository $groupeRepository,
        Request          $request
    ): ?JsonResponse
    {
        $groupe = $groupeRepository->find(JsonRequest::getValueFromRequest($request, 'groupe'));
        $typegroupe = $typeGroupeRepository->find(JsonRequest::getValueFromRequest($request, 'typegroupe'));
        if (null !== $groupe && null !== $typegroupe) {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $typegroupe->getSemestres()->first());
            $groupe->setTypeGroupe($typegroupe);
            $this->entityManager->flush();

            return new JsonResponse(true, Response::HTTP_OK);
        }

        return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/update-parcours', name: 'administration_groupe_change_parcours', options: ['expose' => true], methods: ['POST'])]
    public function updateParcours(
        ApcParcoursRepository $apcParcoursRepository,
        ParcourRepository $parcourRepository,
        GroupeRepository  $groupeRepository,
        Request           $request
    ): ?JsonResponse
    {
        $groupe = $groupeRepository->find(JsonRequest::getValueFromRequest($request, 'groupe'));

        if ($groupe === null) {
            return new JsonResponse('Groupe non trouvé', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        $diplome = $groupe->getTypeGroupe()?->getSemestres()->first()->getDiplome();

        if ($diplome === null) {
            return new JsonResponse('Diplome non trouvé', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        if ($diplome->isApc()) {
            $parcours = $apcParcoursRepository->find(JsonRequest::getValueFromRequest($request, 'parcours'));
        } else {
            $parcours = $parcourRepository->find(JsonRequest::getValueFromRequest($request, 'parcours'));
        }

        if (null !== $parcours) {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $groupe->getTypeGroupe()?->getSemestres()->first());

            if ($diplome->isApc()) {
                $groupe->setApcParcours($parcours);
            } else {
                $groupe->setParcours($parcours);
            }
            $this->entityManager->flush();

            return new JsonResponse(true, Response::HTTP_OK);
        }


        return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
