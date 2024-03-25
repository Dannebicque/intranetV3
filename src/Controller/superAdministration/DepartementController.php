<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/DepartementController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/02/2024 14:51
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Form\DepartementType;
use Exception;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route(path: '/{type}/structure/departement', requirements: ['type' => 'administratif|administration'], defaults: ['type' => 'administratif'])]
class DepartementController extends BaseController
{
    /**
     * @throws Exception
     */
    #[Route(path: '/new', name: 'sa_departement_new', methods: 'GET|POST')]
    public function create(Request $request): Response
    {
        $departement = new Departement();
        $form = $this->createForm(DepartementType::class, $departement, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($departement);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'departement.add.success.flash');

            return $this->redirectToRoute('super_admin_homepage');
        }

        return $this->render('structure/departement/new.html.twig', [
            'departement' => $departement,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_departement_show', methods: 'GET')]
    public function show(Departement $departement): Response
    {
        return $this->render('structure/departement/show.html.twig', ['departement' => $departement]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_departement_edit', methods: 'GET|POST')]
    public function edit(Request $request, Departement $departement): Response
    {
        $form = $this->createForm(DepartementType::class, $departement, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'departement.edit.success.flash');

            return $this->redirectToRoute('super_admin_homepage');
        }

        return $this->render('structure/departement/new.html.twig', [
            'departement' => $departement,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_departement_delete', methods: 'DELETE')]
    public function delete(): void
    {
    }

    #[Route(path: '/activate/{departement}/{etat}', name: 'sa_departement_activate', methods: ['GET'])]
    #[IsGranted('ROLE_SUPER_ADMIN')]
    public function activate(Departement $departement, bool $etat): RedirectResponse
    {
        $departement->setActif($etat);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'departement.activate.'.$etat.'.flash');

        return $this->redirectToRoute('super_admin_homepage');
    }
}
