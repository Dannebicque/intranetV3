<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/stage/StagePeriodeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\administration\stage;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\StagePeriode;
use App\Form\StagePeriodeType;
use App\Repository\StagePeriodeRepository;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/stage-periode")
 */
class StagePeriodeController extends BaseController
{
    /**
     * @Route("/", name="administration_stage_periode_index", methods="GET")
     */
    public function index(StagePeriodeRepository $stagePeriodeRepository): Response
    {
        return $this->render(
            'administration/stage/stage_periode/index.html.twig',
            ['stage_periodes' => $stagePeriodeRepository->findByDepartement($this->dataUserSession->getDepartement())]
        );
    }

    /**
     * @Route("/export.{_format}", name="administration_stage_periode_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     *
     * @param $_format
     */
    public function export(MyExport $myExport, StagePeriodeRepository $stagePeriodeRepository, $_format): Response
    {
        $dates = $stagePeriodeRepository->findByDepartement($this->dataUserSession->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $dates,
            'periodes_stage',
            ['stage_periode_administration'],
            ['numeroPeriode', 'libelle', 'numeroPeriode', 'dateDebut', 'dateFin', 'nbSemaines', 'nbJours', 'nbEcts']
        );
    }

    /**
     * @Route("/new", name="administration_stage_periode_new", methods="GET|POST")
     *
     * @throws Exception
     */
    public function create(Request $request): Response
    {
        $stagePeriode = new StagePeriode();
        $stagePeriode->setAnneeUniversitaire($this->dataUserSession->getAnneeUniversitaire());
        $form = $this->createForm(StagePeriodeType::class, $stagePeriode, [
            'departement' => $this->dataUserSession->getDepartement(),
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
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_stage_periode_show", methods="GET")
     * @ParamConverter("stagePeriode", options={"mapping": {"id": "uuid"}})
     */
    public function show(StagePeriode $stagePeriode): Response
    {
        return $this->render('administration/stage/stage_periode/show.html.twig', ['stage_periode' => $stagePeriode]);
    }

    /**
     * @Route("/{id}/edit", name="administration_stage_periode_edit", methods="GET|POST")
     * @ParamConverter("stagePeriode", options={"mapping": {"id": "uuid"}})
     */
    public function edit(Request $request, StagePeriode $stagePeriode): Response
    {
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
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_stage_periode_delete", methods="DELETE")
     * @ParamConverter("stagePeriode", options={"mapping": {"id": "uuid"}})
     */
    public function delete(Request $request, StagePeriode $stagePeriode): Response
    {
        //la suppression entraine la suppression des offres, des templates et des stages déjà présent.
        $id = $stagePeriode->getUuidString();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
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

    /**
     * @Route("/{id}/duplicate", name="administration_stage_periode_duplicate", methods="GET")
     * @ParamConverter("stagePeriode", options={"mapping": {"id": "uuid"}})
     */
    public function duplicate(StagePeriode $stagePeriode): Response
    {
        $newStagePeriode = clone $stagePeriode;
        $this->entityManager->persist($newStagePeriode);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_periode.duplicate.success.flash');

        return $this->redirectToRoute('administration_stage_periode_edit', ['id' => $newStagePeriode->getUuidString()]);
    }
}
