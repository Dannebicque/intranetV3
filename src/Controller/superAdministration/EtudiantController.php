<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/EtudiantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/04/2024 06:28
 */

namespace App\Controller\superAdministration;

use App\Classes\MyEtudiants;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Form\EtudiantType;
use App\Repository\DepartementRepository;
use App\Repository\EtudiantRepository;
use App\Repository\SemestreRepository;
use Exception;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class ScolariteController.
 */
#[Route(path: '/administratif/etudiants')]
class EtudiantController extends BaseController
{
    #[Route(path: '/', name: 'sa_etudiant_index')]
    public function index(): Response
    {
        return $this->render('super-administration/etudiant/index.html.twig');
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/importer', name: 'sa_etudiant_importer')]
    public function importerListeEtudiant(SemestreRepository $semestreRepository, MyEtudiants $myEtudiants, Request $request): RedirectResponse
    {
        $semestre = $semestreRepository->find($request->request->get('importer_etudiant_semestre'));
        if (null !== $semestre) {
            $myEtudiants->importListeCsv($request->files->get('fichier_import'), $semestre);
            $this->addFlashBag('success', 'import.fichier.csv.success');

            return $this->redirectToRoute('sa_etudiant_index');
        }
        $this->addFlashBag('error', 'import.fichier.csv.error');

        return $this->redirectToRoute('sa_etudiant_index');
    }

    #[Route(path: '/recherche/{needle}', name: 'sa_etudiant_recherche', options: ['expose' => true])]
    public function rechercheEtudiants(SemestreRepository $semestreRepository, DepartementRepository $departementRepository, EtudiantRepository $etudiantRepository, string $needle): Response
    {
        $etudiants = $etudiantRepository->searchScolarite($needle);

        return $this->render('super-administration/etudiant/_recherche.html.twig', [
            'etudiants' => $etudiants,
            'departements' => $departementRepository->findActifs(),
            'semestres' => $semestreRepository->findAll(),
        ]);
    }

    #[Route('/edit/{id}', name: 'sadm_etudiant_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Etudiant $etudiant): Response
    {
        $form = $this->createForm(
            EtudiantType::class,
            $etudiant,
            [
                'attr' => [
                    'data-provide' => 'validation',
                ],
                'departement' => $this->getDepartement(),
            ]
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($etudiant);
            $this->entityManager->flush();

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'etudiant.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('sa_etudiant_index');
            }
        }

        return $this->render('super-administration/etudiant/edit.html.twig', [
            'etudiant' => $etudiant,
            'form' => $form,
        ]);
    }
}
