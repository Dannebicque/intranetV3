<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/compta/BCCentreFinancierController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/09/2021 18:50
 */

namespace App\Controller\superAdministration\compta;

use App\Entity\BCCentreFinancier;
use App\Form\BCCentreFinancierType;
use App\Repository\BCCentreFinancierRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/b/c/centre/financier')]
class BCCentreFinancierController extends AbstractController
{
    #[Route('/', name: 'b_c_centre_financier_index', methods: ['GET'])]
    public function index(BCCentreFinancierRepository $bCCentreFinancierRepository): Response
    {
        return $this->render('bc_centre_financier/index.html.twig', [
            'b_c_centre_financiers' => $bCCentreFinancierRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'b_c_centre_financier_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $bCCentreFinancier = new BCCentreFinancier();
        $form = $this->createForm(BCCentreFinancierType::class, $bCCentreFinancier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($bCCentreFinancier);
            $entityManager->flush();

            return $this->redirectToRoute('b_c_centre_financier_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('bc_centre_financier/new.html.twig', [
            'b_c_centre_financier' => $bCCentreFinancier,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'b_c_centre_financier_show', methods: ['GET'])]
    public function show(BCCentreFinancier $bCCentreFinancier): Response
    {
        return $this->render('bc_centre_financier/show.html.twig', [
            'b_c_centre_financier' => $bCCentreFinancier,
        ]);
    }

    #[Route('/{id}/edit', name: 'b_c_centre_financier_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, BCCentreFinancier $bCCentreFinancier): Response
    {
        $form = $this->createForm(BCCentreFinancierType::class, $bCCentreFinancier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('b_c_centre_financier_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('bc_centre_financier/edit.html.twig', [
            'b_c_centre_financier' => $bCCentreFinancier,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'b_c_centre_financier_delete', methods: ['POST'])]
    public function delete(Request $request, BCCentreFinancier $bCCentreFinancier): Response
    {
        if ($this->isCsrfTokenValid('delete' . $bCCentreFinancier->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($bCCentreFinancier);
            $entityManager->flush();
        }

        return $this->redirectToRoute('b_c_centre_financier_index', [], Response::HTTP_SEE_OTHER);
    }
}
