<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/StatutController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Status;
use App\Form\StatusType;
use App\Repository\StatusRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/administratif/statuts', name: 'sa_statuts_')]
class StatutController extends BaseController
{
    // todo: finaliser et utiliser . Pas d'export
    #[Route('/', name: 'index', methods: ['GET'])]
    public function index(
        StatusRepository $statusRepository
    ): Response {
        return $this->render('super-administration/status/index.html.twig', [
            'statuts' => $statusRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(
        Request $request
    ): Response {
        $status = new Status();
        $form = $this->createForm(StatusType::class, $status);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($status);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'status.new.success.flash');

            return $this->redirectToRoute('sa_statuts_index');
        }

        return $this->render('super-administration/status/new.html.twig', [
            'status' => $status,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(
        Status $status
    ): Response {
        return $this->render('super-administration/status/show.html.twig', [
            'statut' => $status,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(
        Request $request,
        Status $status
    ): Response {
        $form = $this->createForm(StatusType::class, $status);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'status.edit.success.flash');

            return $this->redirectToRoute('sa_statuts_index');
        }

        return $this->render('super-administration/status/edit.html.twig', [
            'statuts' => $status,
            'form' => $form,
        ]);
    }

    #[Route('/{id}/duplicate', name: 'duplicate', methods: ['GET', 'POST'])]
    public function duplicate(
        Status $status
    ): Response {
        $newStatus = clone $status;

        $this->entityManager->persist($newStatus);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'status.duplicate.success.flash');

        return $this->redirectToRoute('sa_statuts_edit', ['id' => $newStatus->getId()]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(
        Request $request,
        Status $statut
    ): Response {
        $id = $statut->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
//            if (0 === count($statut->getHrs())) {
            $this->entityManager->remove($statut);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'status.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
            // }

            // return $this->json('not_empty', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'status.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
