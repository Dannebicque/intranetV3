<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/apc/ApcParcoursController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/11/2022 11:04
 */

namespace App\Controller\administration\apc;

use App\Classes\Apc\ApcStructure;
use App\Controller\BaseController;
use App\Entity\ApcParcours;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\ApcParcoursType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/apc/parcours', name: 'administration_')]
class ApcParcoursController extends BaseController
{
    #[Route(path: '/{diplome}/new', name: 'apc_parcours_new', methods: ['GET', 'POST'])]
    public function new(Request $request, Diplome $diplome): Response
    {
        $apcParcour = new ApcParcours($diplome);
        $form = $this->createForm(ApcParcoursType::class, $apcParcour);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($apcParcour);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apcParcours.create.success.flash');

            return $this->redirectToRoute('administration_apc_parcours_show', ['id' => $apcParcour->getId()]);
        }

        return $this->render('apc/apc_parcours/new.html.twig', [
            'apc_parcour' => $apcParcour,
            'form' => $form->createView(),
            'diplome' => $diplome,
        ]);
    }

    #[Route(path: '/{id}', name: 'apc_parcours_show', methods: ['GET'])]
    public function show(ApcStructure $apcStructure, ApcParcours $apcParcour): Response
    {
        return $this->render('apc/apc_parcours/show.html.twig', [
            'parcour' => $apcParcour,
            'parcoursNiveaux' => $apcStructure->parcoursNiveaux([$apcParcour]),
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'apc_parcours_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ApcParcours $apcParcour): Response
    {
        $form = $this->createForm(ApcParcoursType::class, $apcParcour);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apcParcours.edit.success.flash');

            return $this->redirectToRoute('administration_apc_parcours_show', ['id' => $apcParcour->getId()]);
        }

        return $this->render('apc/apc_parcours/edit.html.twig', [
            'apc_parcour' => $apcParcour,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'apc_parcours_delete', methods: ['DELETE'])]
    public function delete(Request $request, ApcParcours $apcParcour): Response
    {
        $id = $apcParcour->getId();
        if ($this->isCsrfTokenValid('delete' . $apcParcour->getId(), $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            foreach ($apcParcour->getApcParcoursNiveaux() as $apcNiveau) {
                $this->entityManager->remove($apcNiveau);
            }
            $this->entityManager->remove($apcParcour);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apcParcours.delete.success.flash');

            return new JsonResponse(['id' => $id], Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apcParcours.delete.error.flash');

        return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/duplicate', name: 'apc_parcours_duplicate', methods: 'GET|POST')]
    public function duplicate(ApcParcours $apcParcours): Response
    {
        $newApcParcours = clone $apcParcours;
        $this->entityManager->persist($newApcParcours);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apcParcours.duplicate.success.flash');

        return $this->redirectToRoute('administration_apc_parcours_edit', ['id' => $newApcParcours->getId()]);
    }
}
