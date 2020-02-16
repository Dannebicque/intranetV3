<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/ScolariteController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\MesClasses\MyEtudiants;
use App\Repository\DepartementRepository;
use App\Repository\EtudiantRepository;
use App\Repository\SemestreRepository;
use Exception;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController
 * @package App\Controller\superAdministration
 * @Route("/administratif/etudiants")
 */
class EtudiantController extends BaseController
{
    /**
     * @Route("/", name="sa_etudiant_index")
     */
    public function index(): Response
    {
        return $this->render('super-administration/etudiant/index.html.twig', []);
    }

    /**
     * @Route("/importer", name="sa_etudiant_importer")
     * @param SemestreRepository $semestreRepository
     * @param MyEtudiants        $myEtudiants
     * @param Request            $request
     *
     * @return RedirectResponse
     * @throws Exception
     */
    public function importerListeEtudiant(
        SemestreRepository $semestreRepository,
        MyEtudiants $myEtudiants,
        Request $request
    ) {
        $semestre = $semestreRepository->find($request->request->get('importer_etudiant_semestre'));
        if ($semestre !== null) {
            $myEtudiants->importListeCsv($request->files->get('fichier_import'), $semestre);
            $this->addFlashBag('error', 'import.fichier.csv.success');

            return $this->redirectToRoute('sa_etudiant_index');
        }

        $this->addFlashBag('error', 'import.fichier.csv.error');

        return $this->redirectToRoute('sa_etudiant_index');
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
