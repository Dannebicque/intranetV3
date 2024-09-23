<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/stage/StagePeriodeOffreController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/09/2024 10:45
 */

namespace App\Controller\administration\stage;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\StagePeriode;
use App\Entity\StagePeriodeOffre;
use App\Form\StagePeriodeOffreType;
use App\Repository\StagePeriodeOffreRepository;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administration/stage/offre')]
class StagePeriodeOffreController extends BaseController
{
    #[Route(path: '/{uuid}', name: 'administration_stage_periode_offre_index', methods: 'GET')]
    public function index(
        #[MapEntity(mapping: ['uuid' => 'uuid'])]
        StagePeriode                $stagePeriode,
        StagePeriodeOffreRepository $stagePeriodeOffreRepository): Response
    {
        //afficher toutes les offres de stage d'un département avec une colonne sur la période
        // $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());

        return $this->render(
            'administration/stage/stage_periode_offre/index.html.twig',
            [
                'stage_periode_offres' => $stagePeriodeOffreRepository->findOffreDepartement($this->dataUserSession->getDepartement()),
                'stagePeriode' => $stagePeriode,
            ]
        );
    }

    #[Route(path: '/{stagePeriode}/export.{_format}', name: 'administration_stage_periode_offre_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport     $myExport, #[MapEntity(mapping: ['stagePeriode' => 'uuid'])]
        StagePeriode $stagePeriode, string $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());
        $offres = $stagePeriode->getStagePeriodeOffres();

        $data = $mySerializer->getDataFromSerialization(
            $offres,
            ['libelle', 'entreprise', 'ville'],
            ['stage_offre_administration'],
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'offres_stage_' . $stagePeriode->getSemestre()?->getLibelle(),
        );
    }

    #[Route(path: '/new/{stagePeriode}', name: 'administration_stage_periode_offre_new', methods: 'GET|POST')]
    public function create(Request $request, #[MapEntity(mapping: ['stagePeriode' => 'uuid'])]
    StagePeriode                   $stagePeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());
        $stagePeriodeOffre = new StagePeriodeOffre($stagePeriode);
        $form = $this->createForm(StagePeriodeOffreType::class, $stagePeriodeOffre, [
            'departement' => $this->getDepartement(),
            'annee' => $stagePeriode->getAnneeUniversitaire(),
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($stagePeriodeOffre);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_periode_offre.create.success.flash');

            return $this->redirectToRoute('administration_stage_periode_offre_index',
                ['uuid' => $stagePeriode->getUuidString()]);
        }

        return $this->render('administration/stage/stage_periode_offre/new.html.twig', [
            'stage_periode_offre' => $stagePeriodeOffre,
            'form' => $form,
            'stagePeriode' => $stagePeriode,
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_stage_periode_offre_edit', methods: 'GET|POST')]
    public function edit(Request $request, StagePeriodeOffre $stagePeriodeOffre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $this->getDepartement());
        $form = $this->createForm(StagePeriodeOffreType::class, $stagePeriodeOffre, [
            'departement' => $this->getDepartement(),
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_periode_offre.edit.success.flash');

            return $this->redirectToRoute('administration_stage_periode_offre_edit',
                ['id' => $stagePeriodeOffre->getId()]);
        }

        return $this->render('administration/stage/stage_periode_offre/edit.html.twig', [
            'stage_periode_offre' => $stagePeriodeOffre,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_stage_periode_offre_duplicate', methods: 'GET')]
    public function duplicate(StagePeriodeOffre $stagePeriodeOffre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $this->getDepartement());
        $newStagePeriodeOffre = clone $stagePeriodeOffre;
        $this->entityManager->persist($newStagePeriodeOffre);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_periode_offre.duplicate.success.flash');

        return $this->redirectToRoute('administration_stage_periode_offre_edit',
            ['id' => $newStagePeriodeOffre->getId()]);
    }

    #[Route(path: '/{id}/{stagePeriode}', name: 'administration_stage_periode_offre_show', methods: 'GET')]
    public function show(StagePeriodeOffre $stagePeriodeOffre, #[MapEntity(mapping: ['stagePeriode' => 'uuid'])]
    StagePeriode                           $stagePeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());

        return $this->render('administration/stage/stage_periode_offre/show.html.twig', [
            'stage_periode_offre' => $stagePeriodeOffre,
            'stagePeriode' => $stagePeriode,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_stage_periode_offre_delete', methods: 'DELETE')]
    public function delete(Request $request, StagePeriodeOffre $date): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $this->getDepartement());
        $id = $date->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($date);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_periode_offre.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'stage_periode_offre.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
