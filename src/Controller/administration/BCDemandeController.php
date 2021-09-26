<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/BCDemandeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/09/2021 18:50
 */

namespace App\Controller\administration;

use App\Controller\BaseController;

//use App\Entity\BCDemande;
//use App\Entity\Constantes;
//use App\Form\BCDemandeInitialeType;
//use App\Repository\BCDemandeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/bon-commande', name: 'administration_bc_demande_')]
class BCDemandeController extends BaseController
{
//    #[Route('/', name: 'index', methods: ['GET'])]
//    public function index(BCDemandeRepository $bCDemandeRepository): Response
//    {
//        return $this->render('administration/bc_demande/index.html.twig', [
//            'bc_demandes' => $bCDemandeRepository->findAll(),
//        ]);
//    }
//
//    #[Route('/nouvelle-demande', name: 'new', methods: ['GET', 'POST'])]
//    public function new(Request $request): Response
//    {
//        $bCDemande = new BCDemande();
//        $form = $this->createForm(BCDemandeInitialeType::class, $bCDemande, [
//            'departement' => $this->getDepartement()
//        ]);
//        $form->handleRequest($request);
//
//        if ($form->isSubmitted() && $form->isValid()) {
//
//            $this->entityManager->persist($bCDemande);
//            $this->entityManager->flush();
//            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bcdemande.new.success.flash');
//
//            return $this->redirectToRoute('administration_bc_demande_index', [], Response::HTTP_SEE_OTHER);
//        }
//
//        return $this->renderForm('administration/bc_demande/new.html.twig', [
//            'bc_demande' => $bCDemande,
//            'form' => $form,
//        ]);
//    }
//
//    #[Route('/{id}', name: 'show', methods: ['GET'])]
//    public function show(BCDemande $bCDemande): Response
//    {
//        return $this->render('administration/bc_demande/show.html.twig', [
//            'bc_demande' => $bCDemande,
//        ]);
//    }
//
//    #[Route('/{id}/modifier', name: 'edit', methods: ['GET', 'POST'])]
//    public function edit(Request $request, BCDemande $bCDemande): Response
//    {
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
//
//        return $this->renderForm('administration/bc_demande/edit.html.twig', [
//            'bc_demande' => $bCDemande,
//            'form' => $form,
//        ]);
//    }
//
//    #[Route('/{id}/dupliquer', name: 'duplicate', methods: ['GET'])]
//    public function duplicate(BCDemande $BCDemande): Response
//    {
//        $newBCDemande = clone $BCDemande;
//
//        $this->entityManager->persist($newBCDemande);
//        $this->entityManager->flush();
//        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bcdemande.duplicate.success.flash');
//
//        return $this->redirectToRoute('administration_bc_demande_edit', ['id' => $newBCDemande->getId()]);
//    }
//
//    #[Route('/{id}', name: 'delete', methods: ['POST'])]
//    public function delete(Request $request, BCDemande $bCDemande): Response
//    {
//        if ($this->isCsrfTokenValid('delete'.$bCDemande->getId(), $request->request->get('_token'))) {
//            $this->entityManager->remove($bCDemande);
//            $this->entityManager->flush();
//            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bcdemande.delete.success.flash');
//
//        }
//        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'bcdemande.delete.error.flash');
//
//        return $this->redirectToRoute('administration_bc_demande_index', [], Response::HTTP_SEE_OTHER);
//    }
}
