<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/BCDemandeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/12/2022 12:03
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\BCDemande;
use App\Entity\Constantes;
use App\Form\BCDemandeInitialeType;
use App\Table\BCDemandeDepartementType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Workflow\WorkflowInterface;

#[Route('/administration/bon-commande', name: 'administration_bc_demande_')]
class BCDemandeController extends BaseController
{
    /**
     * @throws \JsonException
     */
    #[Route('/', name: 'index', options: ['expose' => true], methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $table = $this->createTable(BCDemandeDepartementType::class, [
            'departement' => $this->getDepartement(),
        ]);

        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('administration/bc_demande/index.html.twig', [
            'table' => $table,
        ]);
    }

    #[Route('/nouvelle-demande', name: 'new', methods: ['GET', 'POST'])]
    public function new(WorkflowInterface $bonCommandeStateMachine, Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $bCDemande = new BCDemande();
        $bCDemande->setDepartement($this->getDepartement());
        // $bCDemande->setResponsable() => trouver le responsable de département ?
        $form = $this->createForm(BCDemandeInitialeType::class, $bCDemande, [
            'departement' => $this->getDepartement(),
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $bonCommandeStateMachine->apply($bCDemande, 'validation_responsable');
            $this->entityManager->persist($bCDemande);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bcdemande.new.success.flash');

            return $this->redirectToRoute('administration_bc_demande_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('administration/bc_demande/new.html.twig', [
            'bc_demande' => $bCDemande,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(BCDemande $bCDemande): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $bCDemande->getDepartement());

        return $this->render('administration/bc_demande/show.html.twig', [
            'bc_demande' => $bCDemande,
        ]);
    }

    #[Route('/{id}/modifier', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(BCDemande $bCDemande): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $bCDemande->getDepartement());

//        $form = $this->createForm(BCDemandeInitialeType::class, $bCDemande, [
//            'departement' => $this->getDepartement()
//        ]);
//        $form->handleRequest($request);
//
//        if ($form->isSubmitted() && $form->isValid()) {
//            $this->entityManager->flush();
//            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bcdemande.edit.success.flash');
//
//            return $this->redirectToRoute('administration_bc_demande_index', [], Response::HTTP_SEE_OTHER);
//        }

        return $this->render('administration/bc_demande/edit.html.twig', [
            'bc_demande' => $bCDemande,
            //  'form' => $form,
        ]);
    }

    #[Route('/{id}/dupliquer', name: 'duplicate', methods: ['GET'])]
    public function duplicate(BCDemande $bCDemande): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $bCDemande->getDepartement());

        $newBCDemande = clone $bCDemande;

        $this->entityManager->persist($newBCDemande);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bcdemande.duplicate.success.flash');

        return $this->redirectToRoute('administration_bc_demande_edit', ['id' => $newBCDemande->getId()]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, BCDemande $bCDemande): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $bCDemande->getDepartement());

        if ($this->isCsrfTokenValid('delete'.$bCDemande->getId(), $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($bCDemande);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bcdemande.delete.success.flash');
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'bcdemande.delete.error.flash');

        return $this->redirectToRoute('administration_bc_demande_index', [], Response::HTTP_SEE_OTHER);
    }
}
