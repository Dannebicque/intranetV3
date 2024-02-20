<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/mcc/superAdmin/MccTypeEpreuveController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\mcc\superAdmin;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\MccTypeEpreuve;
use App\Form\MccTypeEpreuveType;
use App\Repository\MccTypeEpreuveRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/administratif/mcc/type-epreuve', name: 'sa_mcc_type_epreuve_')]
class MccTypeEpreuveController extends BaseController
{
    #[Route('/', name: 'index', methods: ['GET'])]
    public function index(MccTypeEpreuveRepository $mccTypeEpreuveRepository): Response
    {
        return $this->render('mcc/superAdmin/type_epreuve/index.html.twig', [
            'mcc_type_epreuves' => $mccTypeEpreuveRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, MccTypeEpreuveRepository $mccTypeEpreuveRepository): Response
    {
        $mccTypeEpreuve = new MccTypeEpreuve();
        $form = $this->createForm(MccTypeEpreuveType::class, $mccTypeEpreuve);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $mccTypeEpreuveRepository->save($mccTypeEpreuve, true);
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'mcc_type_epreuve.new.success.flash');

            return $this->redirectToRoute('sa_mcc_type_epreuve_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('mcc/superAdmin/type_epreuve/new.html.twig', [
            'mcc_type_epreuve' => $mccTypeEpreuve,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(MccTypeEpreuve $mccTypeEpreuve): Response
    {
        return $this->render('mcc/superAdmin/type_epreuve/show.html.twig', [
            'mcc_type_epreuve' => $mccTypeEpreuve,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(
        Request $request,
        MccTypeEpreuve $mccTypeEpreuve,
        MccTypeEpreuveRepository $mccTypeEpreuveRepository
    ): Response {
        $form = $this->createForm(MccTypeEpreuveType::class, $mccTypeEpreuve);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $mccTypeEpreuveRepository->save($mccTypeEpreuve, true);
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'mcc_type_epreuve.edit.success.flash');

            return $this->redirectToRoute('sa_mcc_type_epreuve_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('mcc/superAdmin/type_epreuve/edit.html.twig', [
            'mcc_type_epreuve' => $mccTypeEpreuve,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}/duplicate', name: 'duplicate', methods: 'GET|POST')]
    public function duplicate(MccTypeEpreuve $typeEpreuve): Response
    {
        $newTypeEpreuve = clone $typeEpreuve;
        $this->entityManager->persist($newTypeEpreuve);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'mcc_type_epreuve.duplicate.success.flash');

        return $this->redirectToRoute('sa_mcc_type_epreuve_edit', ['id' => $newTypeEpreuve->getId()]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(
        Request $request,
        MccTypeEpreuve $mccTypeEpreuve,
        MccTypeEpreuveRepository $mccTypeEpreuveRepository
    ): Response {
        if ($this->isCsrfTokenValid('delete' . $mccTypeEpreuve->getId(), $request->request->get('_token'))) {
            $mccTypeEpreuveRepository->remove($mccTypeEpreuve, true);
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'mcc_type_epreuve.delete.success.flash');
        }

        return $this->redirectToRoute('sa_mcc_type_epreuve_index', [], Response::HTTP_SEE_OTHER);
    }
}
