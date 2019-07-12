<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/ScolariteController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/12/19 11:23 AM
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Repository\DepartementRepository;
use App\Repository\EtudiantRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController
 * @package App\Controller\superAdministration
 */
class ScolariteController extends BaseController
{
    /**
     * @Route("/scolarite", name="sa_scolarite_index")
     */
    public function index(): Response
    {
        return $this->render('super-administration/scolarite/index.html.twig', [

        ]);
    }

    /**
     * @Route("/scolarite/ajouter", name="sa_scolarite_ajouter")
     */
    public function addEtudiants(): Response
    {
        return $this->render('super-administration/scolarite/ajouter.html.twig', [

        ]);
    }

    /**
     * @Route("/importer", name="sa_scolarite_importer")
     */
    public function importerScolarite(): void
    {
        //déjà dans administration ?
    }

    /**
     * @Route("/scolarite/recherche/{needle}", name="sa_scolarite_recherche", options={"expose"=true})
     * @param DepartementRepository $departementRepository
     * @param EtudiantRepository    $etudiantRepository
     * @param                       $needle
     *
     * @return Response
     */
    public function rechercheEtudiants(
        DepartementRepository $departementRepository,
        EtudiantRepository $etudiantRepository,
        $needle
    ): Response {
        $etudiants = $etudiantRepository->searchObject($needle);

        return $this->render('super-administration/scolarite/recherche.html.twig', [
            'etudiants'    => $etudiants,
            'departements' => $departementRepository->findActifs()
        ]);
    }
}
