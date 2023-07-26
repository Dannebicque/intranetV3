<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/compta/BCCentreFinancierController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/07/2022 15:08
 */

namespace App\Controller\superAdministration\compta;

use App\Controller\BaseController;
use App\Entity\BCCentreFinancier;
use App\Entity\Constantes;
use App\Form\BCCentreFinancierType;
use App\Repository\BCCentreFinancierRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administratif/compta/centres-financiers', name: 'sa_bc_centre_financier_')]
class BCCentreFinancierController extends BaseController
{
    #[Route('/', name: 'index', methods: ['GET'])]
    public function index(BCCentreFinancierRepository $bCCentreFinancierRepository): Response
    {
        return $this->render('super-administration/compta/bc_centre_financier/index.html.twig', [
            'bc_centre_financiers' => $bCCentreFinancierRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $bCCentreFinancier = new BCCentreFinancier();
        $form = $this->createForm(BCCentreFinancierType::class, $bCCentreFinancier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($bCCentreFinancier);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bc.centre_financier.add.success.flash');

            return $this->redirectToRoute('sa_bc_centre_financier_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('super-administration/compta/bc_centre_financier/new.html.twig', [
            'bc_centre_financier' => $bCCentreFinancier,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(BCCentreFinancier $bCCentreFinancier): Response
    {
        return $this->render('super-administration/compta/bc_centre_financier/show.html.twig', [
            'bc_centre_financier' => $bCCentreFinancier,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, BCCentreFinancier $bCCentreFinancier): Response
    {
        $form = $this->createForm(BCCentreFinancierType::class, $bCCentreFinancier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bc.centre_financier.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('sa_bc_centre_financier_index', [], Response::HTTP_SEE_OTHER);
            }

            return $this->redirectToRoute('sa_bc_centre_financier_edit', ['id' => $bCCentreFinancier->getId()]);
        }

        return $this->render('super-administration/compta/bc_centre_financier/edit.html.twig', [
            'bc_centre_financier' => $bCCentreFinancier,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, BCCentreFinancier $bCCentreFinancier): Response
    {
        $id = $bCCentreFinancier->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($bCCentreFinancier);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'bc.centre_financier.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'bc.centre_financier.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route('/{id}/duplicate', name: 'duplicate', methods: ['GET', 'POST'])]
    public function duplicate(BCCentreFinancier $bCCentreFinancier): Response
    {
        $newbCCentreFinancier = clone $bCCentreFinancier;

        $this->entityManager->persist($newbCCentreFinancier);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bc.centre_financier.duplicate.success.flash');

        return $this->redirectToRoute('sa_bc_centre_financier_edit', ['id' => $newbCCentreFinancier->getId()]);
    }
}
