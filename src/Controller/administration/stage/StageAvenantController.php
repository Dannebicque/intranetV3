<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/stage/StageAvenantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
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
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * @Route("/administration/stage/avenant")
 */
class StageAvenantController extends BaseController
{
    /**
     * @Route("/{stageEtudiant}", name="administration_stage_avenant_index", methods={"GET"})
     */
    public function index(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('administration/stage/stage_avenant/index.html.twig', [
            'stage_avenants' => $stageEtudiant->getStageAvenants(),
            'stagePeriode'   => $stageEtudiant->getStagePeriode(),
            'stageEtudiant'  => $stageEtudiant,
        ]);
    }

    /**
     * @Route("/avenant/pdf/{id}", name="administration_stage_avenant_pdf", methods="GET")
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function avenantPdf(MyPDF $myPDF, StageAvenant $stageAvenant): PdfResponse
    {
        return $myPDF::generePdf('pdf/stage/avenantStage.html.twig',
            [
                'stage_avenant' => $stageAvenant,
                'proposition'   => $stageAvenant->getStageEtudiant(),
            ],
            'avenant-' . $stageAvenant->getStageEtudiant()->getEtudiant()->getNom(),
            $this->dataUserSession->getDepartement()
        );
    }

    /**
     * @Route("/new/{stageEtudiant}", name="administration_stage_avenant_new", methods={"GET","POST"})
     */
    public function new(Request $request, StageEtudiant $stageEtudiant): Response
    {
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
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/voir/{id}", name="administration_stage_avenant_show", methods={"GET"})
     */
    public function show(StageAvenant $stageAvenant): Response
    {
        return $this->render('administration/stage/stage_avenant/show.html.twig', [
            'stage_avenant' => $stageAvenant,
            'stageEtudiant' => $stageAvenant->getStageEtudiant(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="administration_stage_avenant_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, StageAvenant $stageAvenant): Response
    {
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
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_stage_avenant_delete", methods={"DELETE"})
     */
    public function delete(Request $request, StageAvenant $stageAvenant): Response
    {
        $id = $stageAvenant->getStageEtudiant()->getId();
        if ($this->isCsrfTokenValid('delete' . $stageAvenant->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($stageAvenant);
            $entityManager->flush();
        }

        return $this->redirectToRoute('administration_stage_avenant_index', ['stageEtudiant' => $id]);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_stage_avenant_duplicate", methods="GET")
     */
    public function duplicate(StageAvenant $stageAvenant): Response
    {
        $newstageAvenant = clone $stageAvenant;
        $this->entityManager->persist($newstageAvenant);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_periode.duplicate.success.flash');

        return $this->redirectToRoute('administration_stage_avenant_edit', ['id' => $newstageAvenant->getId()]);
    }
}
