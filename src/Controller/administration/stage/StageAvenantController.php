<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/stage/StageAvenantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration\stage;

use App\Classes\Pdf\MyPDF;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\StageAvenant;
use App\Entity\StageEtudiant;
use App\Form\StageAvenantType;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

#[Route(path: '/administration/stage/avenant')]
class StageAvenantController extends BaseController
{
    #[Route(path: '/{stageEtudiant}', name: 'administration_stage_avenant_index', methods: ['GET'])]
    public function index(StageEtudiant $stageEtudiant): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stageEtudiant->getStagePeriode()?->getSemestre());

        return $this->render('administration/stage/stage_avenant/index.html.twig', [
            'stage_avenants' => $stageEtudiant->getStageAvenants(),
            'stagePeriode' => $stageEtudiant->getStagePeriode(),
            'stageEtudiant' => $stageEtudiant,
        ]);
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/avenant/pdf/{id}', name: 'administration_stage_avenant_pdf', methods: 'GET')]
    public function avenantPdf(MyPDF $myPDF, StageAvenant $stageAvenant): PdfResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE',
            $stageAvenant->getStageEtudiant()?->getStagePeriode()?->getSemestre());

        return $myPDF::generePdf('pdf/stage/avenantStage.html.twig',
            [
                'stage_avenant' => $stageAvenant,
                'proposition' => $stageAvenant->getStageEtudiant(),
            ],
            'avenant-'.$stageAvenant->getStageEtudiant()->getEtudiant()->getNom()
        );
    }

    #[Route(path: '/new/{stageEtudiant}', name: 'administration_stage_avenant_new', methods: ['GET', 'POST'])]
    public function new(Request $request, StageEtudiant $stageEtudiant): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stageEtudiant->getStagePeriode()?->getSemestre());
        $stageAvenant = new StageAvenant($stageEtudiant);
        $form = $this->createForm(StageAvenantType::class, $stageAvenant);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $cas = $request->request->get('stage_avenant_cas');
            $stageAvenant->setCas($cas);
            $this->entityManager->persist($stageAvenant);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_avenant.new.success.flash');

            return $this->redirectToRoute('administration_stage_avenant_show', ['id' => $stageAvenant->getId()]);
        }

        return $this->render('administration/stage/stage_avenant/new.html.twig', [
            'stage_avenant' => $stageAvenant,
            'stageEtudiant' => $stageEtudiant,
            'form' => $form,
        ]);
    }

    #[Route(path: '/voir/{id}', name: 'administration_stage_avenant_show', methods: ['GET'])]
    public function show(StageAvenant $stageAvenant): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE',
            $stageAvenant->getStageEtudiant()?->getStagePeriode()?->getSemestre());

        return $this->render('administration/stage/stage_avenant/show.html.twig', [
            'stage_avenant' => $stageAvenant,
            'stageEtudiant' => $stageAvenant->getStageEtudiant(),
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_stage_avenant_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, StageAvenant $stageAvenant): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE',
            $stageAvenant->getStageEtudiant()?->getStagePeriode()?->getSemestre());
        $form = $this->createForm(StageAvenantType::class, $stageAvenant);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $cas = $request->request->get('stage_avenant_cas');
            $stageAvenant->setCas($cas);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_avenant.edit.success.flash');

            return $this->redirectToRoute('administration_stage_avenant_show', ['id' => $stageAvenant->getId()]);
        }

        return $this->render('administration/stage/stage_avenant/edit.html.twig', [
            'stage_avenant' => $stageAvenant,
            'stageEtudiant' => $stageAvenant->getStageEtudiant(),
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_stage_avenant_delete', methods: ['DELETE'])]
    public function delete(Request $request, StageAvenant $stageAvenant): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE',
            $stageAvenant->getStageEtudiant()?->getStagePeriode()?->getSemestre());
        $id = $stageAvenant->getStageEtudiant()->getId();
        if ($this->isCsrfTokenValid('delete'.$stageAvenant->getId(), $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($stageAvenant);
            $this->entityManager->flush();
        }

        return $this->redirectToRoute('administration_stage_avenant_index', ['stageEtudiant' => $id]);
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_stage_avenant_duplicate', methods: 'GET')]
    public function duplicate(StageAvenant $stageAvenant): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE',
            $stageAvenant->getStageEtudiant()?->getStagePeriode()?->getSemestre());
        $newstageAvenant = clone $stageAvenant;
        $this->entityManager->persist($newstageAvenant);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_periode.duplicate.success.flash');

        return $this->redirectToRoute('administration_stage_avenant_edit', ['id' => $newstageAvenant->getId()]);
    }
}
