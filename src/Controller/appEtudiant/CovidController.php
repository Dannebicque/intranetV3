<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appEtudiant/CovidController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 10:53
 */

namespace App\Controller\appEtudiant;

use App\Classes\Covid\MyExportPresence;
use App\Controller\BaseController;
use App\Entity\CovidAttestationEtudiant;
use App\Repository\CovidAttestationEtudiantRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class AbsenceController.
 */
#[Route(path: '/application/etudiant/covid')]
class CovidController extends BaseController
{
    public function index(CovidAttestationEtudiantRepository $covidAttestationEtudiantRepository): Response
    {
        return $this->render('appEtudiant/covid/_index.html.twig', [
            'convocations' => $covidAttestationEtudiantRepository->findNext($this->getUser()),
        ]);
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/export/{id}.pdf', name: 'app_etudiant_covid_attestation_pdf')]
    #[ParamConverter('absence', options: ['mapping' => ['uuid' => 'uuid']])]
    public function details(MyExportPresence $myExportPresence, CovidAttestationEtudiant $attestationEtudiant): Response
    {
        // vérifier s'il est autorisé
        $autorise = false;
        foreach ($attestationEtudiant->getGroupes() as $groupe) {
            foreach ($groupe->getEtudiants() as $etudiant) {
                if ($etudiant->getId() === $this->getUser()->getId()) {
                    $autorise = true;
                }
            }
        }
        if ($autorise) {
            // exporter le PDF
            $myExportPresence->genereConvocationPdf($attestationEtudiant, $this->getUser());

            return new Response();
        }

        return $this->redirectToRoute('erreur_666');
    }
}
