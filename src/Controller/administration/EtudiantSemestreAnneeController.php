<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/EtudiantSemestreAnneeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2026 10:34
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\EtudiantSemestreAnnee;
use App\Form\EtudiantSemestreAnneeType;
use App\Repository\EtudiantSemestreAnneeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administration/etudiant/semestre-annee')]
class EtudiantSemestreAnneeController extends BaseController
{
    #[Route(path: '/', name: 'administration_etudiant_semestre_annee_index')]
    public function index(EtudiantSemestreAnneeRepository $repository): Response
    {
        //$this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL');

        $departement = $this->getDepartement();

        $entries = $repository->findByDepartement($departement);

        return $this->render('administration/etudiant_semestre_annee/index.html.twig', [
            'entries' => $entries,
        ]);
    }

    #[Route(path: '/edit/{id}', name: 'administration_etudiant_semestre_annee_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, EtudiantSemestreAnnee $etudiantSemestreAnnee): Response
    {
        //$this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL');

        $form = $this->createForm(EtudiantSemestreAnneeType::class, $etudiantSemestreAnnee);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag('success', 'Année universitaire modifiée.');
            return $this->redirectToRoute('administration_etudiant_semestre_annee_index');
        }

        return $this->render('administration/etudiant_semestre_annee/edit.html.twig', [
            'entry' => $etudiantSemestreAnnee,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/delete/{id}', name: 'administration_etudiant_semestre_annee_delete', methods: ['POST'])]
    public function delete(Request $request, EtudiantSemestreAnnee $etudiantSemestreAnnee): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL');

        if ($this->isCsrfTokenValid('delete' . $etudiantSemestreAnnee->getId(), $request->request->get('_token'))) {
            $this->entityManager->remove($etudiantSemestreAnnee);
            $this->entityManager->flush();
            $this->addFlashBag('success', 'Entrée supprimée.');
        }

        return $this->redirectToRoute('administration_etudiant_semestre_annee_index');
    }
}
