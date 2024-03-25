<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/stage/StagePeriodeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration\stage;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\StagePeriode;
use App\Form\StagePeriodeType;
use App\Repository\StagePeriodeRepository;
use Exception;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administration/stage-periode')]
class StagePeriodeController extends BaseController
{
    #[Route(path: '/', name: 'administration_stage_periode_index', methods: 'GET')]
    public function index(StagePeriodeRepository $stagePeriodeRepository): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $this->getDepartement());

        return $this->render(
            'administration/stage/stage_periode/index.html.twig',
            ['stage_periodes' => $stagePeriodeRepository->findByDepartement($this->dataUserSession->getDepartement())]
        );
    }

    #[Route(path: '/export.{_format}', name: 'administration_stage_periode_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, StagePeriodeRepository $stagePeriodeRepository, string $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $this->getDepartement());
        $stagePeriodes = $stagePeriodeRepository->findByDepartement($this->dataUserSession->getDepartement());
        $data = $mySerializer->getDataFromSerialization(
            $stagePeriodes,
            ['numeroPeriode', 'libelle', 'numeroPeriode', 'dateDebut', 'dateFin', 'nbSemaines', 'nbJours', 'nbEcts'],
            ['stage_periode_administration'],
            ['dateDebut' => MySerializer::ONLY_DATE, 'dateFin' => MySerializer::ONLY_DATE]
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'periodes_stage_'.$this->getDepartement()?->getLibelle(),
        );
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/new', name: 'administration_stage_periode_new', methods: 'GET|POST')]
    public function create(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $this->getDepartement());
        $stagePeriode = new StagePeriode();
        $stagePeriode->setAnneeUniversitaire($this->dataUserSession->getAnneeUniversitaire());
        $form = $this->createForm(StagePeriodeType::class, $stagePeriode, [
            'departement' => $this->getDepartement(),
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($stagePeriode);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_periode.create.success.flash');

            return $this->redirectToRoute('administration_stage_periode_index');
        }

        return $this->render('administration/stage/stage_periode/new.html.twig', [
            'stage_periode' => $stagePeriode,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_stage_periode_show', methods: 'GET')]
    public function show(#[MapEntity(mapping: ['id' => 'uuid'])]
                         StagePeriode $stagePeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());

        return $this->render('administration/stage/stage_periode/show.html.twig', ['stage_periode' => $stagePeriode]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_stage_periode_edit', methods: 'GET|POST')]
    public function edit(Request $request, #[MapEntity(mapping: ['id' => 'uuid'])]
    StagePeriode                 $stagePeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());
        $form = $this->createForm(StagePeriodeType::class, $stagePeriode, [
            'departement' => $this->dataUserSession->getDepartement(),
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_periode.edit.success.flash');

            return $this->redirectToRoute('administration_stage_periode_edit',
                ['id' => $stagePeriode->getUuidString()]);
        }

        return $this->render('administration/stage/stage_periode/edit.html.twig', [
            'stage_periode' => $stagePeriode,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_stage_periode_delete', methods: 'DELETE')]
    public function delete(Request $request, #[MapEntity(mapping: ['id' => 'uuid'])]
    StagePeriode                   $stagePeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());
        // la suppression entraine la suppression des offres, des templates et des stages déjà présent.
        $id = $stagePeriode->getUuidString();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($stagePeriode);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'stage_periode.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'stage_periode.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_stage_periode_duplicate', methods: 'GET')]
    public function duplicate(#[MapEntity(mapping: ['id' => 'uuid'])]
                              StagePeriode $stagePeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());
        $newStagePeriode = clone $stagePeriode;
        $this->entityManager->persist($newStagePeriode);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_periode.duplicate.success.flash');

        return $this->redirectToRoute('administration_stage_periode_edit', ['id' => $newStagePeriode->getUuidString()]);
    }
}
