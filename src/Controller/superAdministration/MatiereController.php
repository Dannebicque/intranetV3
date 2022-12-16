<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/MatiereController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/12/2022 12:09
 */

namespace App\Controller\superAdministration;

use App\Classes\MyPpn;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Matiere;
use App\Entity\Ue;
use App\Form\MatiereType;
use App\Form\PpnImportType;
use Exception;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administratif/structure/matiere')]
class MatiereController extends BaseController
{
    #[Route(path: '/', name: 'sa_matiere_index', methods: 'GET')]
    public function index(): Response
    {
        return $this->render('administration/matiere/index.html.twig');
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/import/{departement}', name: 'sa_matiere_import')]
    public function import(MyPpn $myPpn, Request $request, Departement $departement): Response
    {
        $form = $this->createForm(
            PpnImportType::class,
            null,
            [
                'departement' => $departement,
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]
        );
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $myPpn->importCsv($form->getData(), $departement);
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ppn.import.success.flash');
            $this->redirectToRoute('sa_structure_index', ['departement' => $departement->getId()]);
        }

        return $this->render('administration/matiere/import.html.twig',
            [
                'departement' => $departement,
                'form' => $form->createView(),
            ]
        );
    }

    #[Route(path: '/new/{ue}', name: 'sa_matiere_new', methods: 'GET|POST')]
    public function create(Request $request, Ue $ue): Response
    {
        $matiere = new Matiere();
        $matiere->setUe($ue);
        $form = $this->createForm(MatiereType::class, $matiere, [
            'diplome' => $ue->getDiplome(),
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($matiere);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.add.success.flash');

            return $this->redirectToRoute('sa_structure_index',
                ['departement' => $matiere->getSemestre()->getDiplome()->getDepartement()->getId()]);
        }

        return $this->render('structure/matiere/new.html.twig', [
            'matiere' => $matiere,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_matiere_show', methods: 'GET')]
    public function show(Matiere $matiere): Response
    {
        return $this->render('administration/matiere/show.html.twig', ['matiere' => $matiere]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_matiere_edit', methods: 'GET|POST')]
    public function edit(Request $request, Matiere $matiere): Response
    {
        $form = $this->createForm(MatiereType::class, $matiere, [
            'diplome' => $matiere->getSemestre()->getAnnee()->getDiplome(),
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.edit.success.flash');

            return $this->redirectToRoute('sa_structure_index',
                ['departement' => $matiere->getSemestre()->getAnnee()->getDiplome()->getDepartement()->getId()]);
        }

        return $this->render('structure/matiere/edit.html.twig', [
            'matiere' => $matiere,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_matiere_duplicate', methods: 'GET|POST')]
    public function duplicate(Matiere $matiere): Response
    {
        $newMatiere = clone $matiere;
        $this->entityManager->persist($newMatiere);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.duplicate.success.flash');

        return $this->redirectToRoute('sa_matiere_edit', ['id' => $newMatiere->getId()]);
    }

    #[Route(path: '/{id}', name: 'sa_matiere_delete', methods: 'DELETE')]
    public function delete(): void
    {
        // todo: delete
    }

    #[Route(path: '/activate/{matiere}/{etat}', name: 'sa_matiere_activate', methods: ['GET'])]
    #[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_SUPER_ADMIN')]
    public function activate(Matiere $matiere, bool $etat): RedirectResponse
    {
        $matiere->setSuspendu($etat);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.activate.'.$etat.'.flash');

        return $this->redirectToRoute('super_admin_homepage');
    }
}
