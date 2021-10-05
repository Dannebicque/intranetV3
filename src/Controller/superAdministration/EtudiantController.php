<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/EtudiantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/10/2021 15:03
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
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController.
 *
 * @Route("/administratif/etudiants")
 */
class EtudiantController extends BaseController
{
    /**
     * @Route("/", name="sa_etudiant_index")
     */
    public function index(): Response
    {
        return $this->render('super-administration/etudiant/index.html.twig', []);
    }

    /**
     * @Route("/importer", name="sa_etudiant_importer")
     *
     * @throws Exception
     */
    public function importerListeEtudiant(
        SemestreRepository $semestreRepository,
        MyEtudiants $myEtudiants,
        Request $request
    ): RedirectResponse {
        $semestre = $semestreRepository->find($request->request->get('importer_etudiant_semestre'));
        if (null !== $semestre) {
            $myEtudiants->importListeCsv($request->files->get('fichier_import'), $semestre);
            $this->addFlashBag('success', 'import.fichier.csv.success');

            return $this->redirectToRoute('sa_etudiant_index');
        }

        $this->addFlashBag('error', 'import.fichier.csv.error');

        return $this->redirectToRoute('sa_etudiant_index');
    }

    /**
     * @Route("/recherche/{needle}", name="sa_etudiant_recherche", options={"expose"=true})
     *
     * @param \App\Repository\DepartementRepository $departementRepository
     * @param \App\Repository\EtudiantRepository    $etudiantRepository
     * @param                                       $needle
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function rechercheEtudiants(
        SemestreRepository $semestreRepository,
        DepartementRepository $departementRepository,
        EtudiantRepository $etudiantRepository,
        $needle
    ): Response {
        $etudiants = $etudiantRepository->searchScolarite($needle);

        return $this->render('super-administration/etudiant/recherche.html.twig', [
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
                'departement' => $this->dataUserSession->getDepartement(),
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
            'form' => $form->createView(),
        ]);
    }
}
