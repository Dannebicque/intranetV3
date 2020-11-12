<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/CovidAttestationEtudiantController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/11/2020 09:46

namespace App\Controller\superAdministration;

use App\Classes\Covid\MyExportPresence;
use App\Controller\BaseController;
use App\Entity\CovidAttestationEtudiant;
use App\Repository\CovidAttestationEtudiantRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/covid/attestation/etudiant", name="sa_")
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
        return $this->render('super-administration/covid_attestation_etudiant/index.html.twig', [
            'covid_attestation_etudiants' => $covidAttestationEtudiantRepository->findAll(),
        ]);
    }

    /**
     * @Route("/export.xlsx", name="covid_attestation_etudiant_export", methods="GET")
     *
     * @param MyExportPresence                   $myExport
     * @param CovidAttestationEtudiantRepository $covidAttestationEtudiantRepository
     *
     * @return Response
     */
    public function export(
        MyExportPresence $myExport,
        CovidAttestationEtudiantRepository $covidAttestationEtudiantRepository
    ): Response {
        $presences = $covidAttestationEtudiantRepository->findAll();

        return $myExport->genereFichierEtudiant($presences);

    }

    /**
     * @Route("/{id}", name="covid_attestation_etudiant_show", methods={"GET"})
     * @param CovidAttestationEtudiant $covidAttestationEtudiant
     *
     * @return Response
     */
    public function show(CovidAttestationEtudiant $covidAttestationEtudiant): Response
    {
        return $this->render('super-administration/covid_attestation_etudiant/show.html.twig', [
            'covid_attestation_etudiant' => $covidAttestationEtudiant,
        ]);
    }


}
