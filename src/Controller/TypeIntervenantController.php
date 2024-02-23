<?php

/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/TypeIntervenantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:43
 */

namespace App\Controller;

use App\Entity\TypeIntervenant;
use App\Form\TypeIntervenantType;
use App\Repository\TypeIntervenantRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/type/intervenant')]
class TypeIntervenantController extends AbstractController
{
    #[Route('/', name: 'app_type_intervenant_index', methods: ['GET'])]
    public function index(TypeIntervenantRepository $typeIntervenantRepository): Response
    {
        return $this->render('type_intervenant/index.html.twig', [
            'type_intervenants' => $typeIntervenantRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_type_intervenant_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $typeIntervenant = new TypeIntervenant();
        $form = $this->createForm(TypeIntervenantType::class, $typeIntervenant);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($typeIntervenant);
            $entityManager->flush();

            return $this->redirectToRoute('app_type_intervenant_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('type_intervenant/new.html.twig', [
            'type_intervenant' => $typeIntervenant,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_type_intervenant_show', methods: ['GET'])]
    public function show(TypeIntervenant $typeIntervenant): Response
    {
        return $this->render('type_intervenant/show.html.twig', [
            'type_intervenant' => $typeIntervenant,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_type_intervenant_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, TypeIntervenant $typeIntervenant, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(TypeIntervenantType::class, $typeIntervenant);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_type_intervenant_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('type_intervenant/edit.html.twig', [
            'type_intervenant' => $typeIntervenant,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_type_intervenant_delete', methods: ['POST'])]
    public function delete(Request $request, TypeIntervenant $typeIntervenant, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $typeIntervenant->getId(), $request->request->get('_token'))) {
            $entityManager->remove($typeIntervenant);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_type_intervenant_index', [], Response::HTTP_SEE_OTHER);
    }
}
