<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/ScolariteController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Repository\DepartementRepository;
use App\Repository\EtudiantRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController
 * @package App\Controller\superAdministration
 * @Route("/super-administration/etudiants")
 */
class EtudiantController extends BaseController
{
    /**
     * @Route("/", name="sa_etudiant_index")
     */
    public function index(): Response
    {
        return $this->render('super-administration/etudiant/index.html.twig', [

        ]);
    }

    /**
     * @Route("/ajouter", name="sa_etudiant_ajouter")
     */
    public function addEtudiants(): Response
    {
        return $this->render('super-administration/etudiant/ajouter.html.twig', [

        ]);
    }

    /**
     * @Route("/importer", name="sa_etudiant_importer")
     */
    public function importerScolarite(): void
    {
        //déjà dans administration ?
    }

    /**
     * @Route("/recherche/{needle}", name="sa_etudiant_recherche", options={"expose"=true})
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

        return $this->render('super-administration/etudiant/recherche.html.twig', [
            'etudiants'    => $etudiants,
            'departements' => $departementRepository->findActifs()
        ]);
    }
}
