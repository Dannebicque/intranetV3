<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/CovidAttestationEtudiantController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 10/11/2020 16:33

namespace App\Controller\administration;

use App\Classes\Covid\MyExportPresence;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\CovidAttestationEtudiant;
use App\Entity\Etudiant;
use App\Form\CovidAttestationEtudiantType;
use App\Repository\CovidAttestationEtudiantRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/covid/attestation/etudiant", name="administration_")
 */
class CovidAttestationEtudiantController extends BaseController
{
    /**
     * @Route("/", name="covid_attestation_etudiant_index", methods={"GET"})
     * @param CovidAttestationEtudiantRepository $covidAttestationEtudiantRepository
     *
     * @return Response
     */
    public function index(CovidAttestationEtudiantRepository $covidAttestationEtudiantRepository): Response
    {
        return $this->render('administration/covid_attestation_etudiant/index.html.twig', [
            'covid_attestation_etudiants' => $covidAttestationEtudiantRepository->findByDepartement($this->getDepartement()),
        ]);
    }

    /**
     * @Route("/new", name="covid_attestation_etudiant_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $covidAttestationEtudiant = new CovidAttestationEtudiant();
        $form = $this->createForm(CovidAttestationEtudiantType::class, $covidAttestationEtudiant,
            [
                'departement' => $this->getDepartement()
            ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($covidAttestationEtudiant);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'covid_attestation_etudiant.add.success.flash');

            return $this->redirectToRoute('administration_covid_attestation_etudiant_show',
                ['id' => $covidAttestationEtudiant->getId()]);
        }

        return $this->render('administration/covid_attestation_etudiant/new.html.twig', [
            'covid_attestation_etudiant' => $covidAttestationEtudiant,
            'form'                       => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="covid_attestation_etudiant_show", methods={"GET"})
     * @param CovidAttestationEtudiant $covidAttestationEtudiant
     *
     * @return Response
     */
    public function show(CovidAttestationEtudiant $covidAttestationEtudiant): Response
    {
        return $this->render('administration/covid_attestation_etudiant/show.html.twig', [
            'covid_attestation_etudiant' => $covidAttestationEtudiant,
        ]);
    }

    /**
     * @Route("/{id}/{etudiant}.pdf", name="covid_attestation_etudiant_export_one", methods={"GET"},
     *                                requirements={"etudiant":"\d+"})
     * @param MyExportPresence         $myExportPresence
     * @param CovidAttestationEtudiant $covidAttestationEtudiant
     * @param Etudiant                 $etudiant
     *
     * @return Response
     */
    public function pdf(
        MyExportPresence $myExportPresence,
        CovidAttestationEtudiant $covidAttestationEtudiant,
        Etudiant $etudiant
    ): ?Response {
        $myExportPresence->genereConvocationPdf($covidAttestationEtudiant, $etudiant);

        return new Response();
    }

    /**
     * @Route("/{id}/{etudiant}/send-one", name="covid_attestation_etudiant_send_one", methods={"GET"},
     *                                     requirements={"etudiant":"\d+"})
     * @param MyExportPresence         $myExportPresence
     * @param CovidAttestationEtudiant $covidAttestationEtudiant
     * @param Etudiant                 $etudiant
     *
     * @return Response
     */
    public function sendOne(
        MyExportPresence $myExportPresence,
        CovidAttestationEtudiant $covidAttestationEtudiant,
        Etudiant $etudiant
    ): ?Response {
        $myExportPresence->sendOneConvocation($covidAttestationEtudiant, $etudiant);

        return new Response();

    }

    /**
     * @Route("/{id}/send-all", name="covid_attestation_etudiant_send_all", methods={"GET"})
     * @param MyExportPresence         $myExportPresence
     * @param CovidAttestationEtudiant $covidAttestationEtudiant
     *
     * @return Response|null
     */
    public function sendAll(
        MyExportPresence $myExportPresence,
        CovidAttestationEtudiant $covidAttestationEtudiant
    ): ?Response {
        $myExportPresence->sendAllConvocation($covidAttestationEtudiant);

        return new Response();

    }


    /**
     * @Route("/{id}/edit", name="covid_attestation_etudiant_edit", methods={"GET","POST"})
     * @param Request                  $request
     * @param CovidAttestationEtudiant $covidAttestationEtudiant
     *
     * @return Response
     */
    public
    function edit(
        Request $request,
        CovidAttestationEtudiant $covidAttestationEtudiant
    ): Response {
        $form = $this->createForm(CovidAttestationEtudiantType::class, $covidAttestationEtudiant);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'covid_attestation_etudiant.edit.success.flash');

            if ($request->request->get('btn_update') !== null) {
                return $this->redirectToRoute('administration_covid_attestation_etudiant_index');
            }

            return $this->redirectToRoute('administration_covid_attestation_etudiant_edit',
                ['id' => $covidAttestationEtudiant->getId()]);

        }

        return $this->render('administration/covid_attestation_etudiant/edit.html.twig', [
            'covid_attestation_etudiant' => $covidAttestationEtudiant,
            'form'                       => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="covid_attestation_etudiant_delete", methods="DELETE")
     * @param Request                  $request
     * @param CovidAttestationEtudiant $covidAttestationEtudiant
     *
     * @return Response
     */
    public
    function delete(
        Request $request,
        CovidAttestationEtudiant $covidAttestationEtudiant
    ): Response {
        $id = $covidAttestationEtudiant->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($covidAttestationEtudiant);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'covid_attestation_etudiant.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'covid_attestation_etudiant.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/duplicate", name="covid_attestation_etudiant_duplicate", methods="GET|POST")
     * @param CovidAttestationEtudiant $covidAttestationEtudiant
     *
     * @return Response
     */
    public
    function duplicate(
        CovidAttestationEtudiant $covidAttestationEtudiant
    ): Response {
        $newcovidAttestationEtudiant = clone $covidAttestationEtudiant;

        $this->entityManager->persist($newcovidAttestationEtudiant);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'covid_attestation_etudiant.duplicate.success.flash');

        return $this->redirectToRoute('administration_covid_attestation_etudiant_edit',
            ['id' => $newcovidAttestationEtudiant->getId()]);
    }
}
