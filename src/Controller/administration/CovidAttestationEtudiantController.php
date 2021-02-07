<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/CovidAttestationEtudiantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\administration;

use App\Classes\Covid\MyExportPresence;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\CovidAttestationEtudiant;
use App\Entity\Etudiant;
use App\Form\CovidAttestationEtudiantType;
use App\Repository\CovidAttestationEtudiantRepository;
use DateTime;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * @Route("/administration/covid/attestation/etudiant", name="administration_")
 */
class CovidAttestationEtudiantController extends BaseController
{
    /**
     * @Route("/", name="covid_attestation_etudiant_index", methods={"GET"})
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
                'departement' => $this->getDepartement(),
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
     *
     * @return Response
     * @throws SyntaxError
     * @throws LoaderError
     *
     * @throws RuntimeError
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
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     *
     * @return Response
     */
    public function sendOne(
        MyExportPresence $myExportPresence,
        CovidAttestationEtudiant $covidAttestationEtudiant,
        Etudiant $etudiant
    ): ?Response {
        $myExportPresence->sendOneConvocation($covidAttestationEtudiant, $etudiant);

        return $this->redirectToRoute('administration_covid_attestation_etudiant_show',
            ['id' => $covidAttestationEtudiant->getId()]);
    }

    /**
     * @Route("/{id}/send-all", name="covid_attestation_etudiant_send_all", methods={"GET"})
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function sendAll(
        MyExportPresence $myExportPresence,
        CovidAttestationEtudiant $covidAttestationEtudiant
    ): ?Response {
        $myExportPresence->sendAllConvocation($covidAttestationEtudiant);
        $covidAttestationEtudiant->setConvocationEnvoyee(true);
        $covidAttestationEtudiant->setDateEnvoi(new DateTime());
        $this->entityManager->flush();

        return $this->redirectToRoute('administration_covid_attestation_etudiant_show',
            ['id' => $covidAttestationEtudiant->getId()]);
    }

    /**
     * @Route("/{id}/edit", name="covid_attestation_etudiant_edit", methods={"GET","POST"})
     */
    public function edit(
        Request $request,
        CovidAttestationEtudiant $covidAttestationEtudiant
    ): Response {
        $form = $this->createForm(CovidAttestationEtudiantType::class, $covidAttestationEtudiant,
            [
                'departement' => $this->getDepartement(),
            ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'covid_attestation_etudiant.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
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
     */
    public function delete(
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
     */
    public function duplicate(
        CovidAttestationEtudiant $covidAttestationEtudiant
    ): Response {
        $newcovidAttestationEtudiant = clone $covidAttestationEtudiant;

        $this->entityManager->persist($newcovidAttestationEtudiant);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'covid_attestation_etudiant.duplicate.success.flash');
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS,
            'covid_attestation_etudiant.attestations_envoyees.success.flash');

        return $this->redirectToRoute('administration_covid_attestation_etudiant_edit',
            ['id' => $newcovidAttestationEtudiant->getId()]);
    }
}
