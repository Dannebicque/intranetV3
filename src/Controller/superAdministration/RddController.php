<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/RddController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:38
 */

namespace App\Controller\superAdministration;

use App\Classes\Rdd\MyExportRdd;
use App\Controller\BaseController;
use App\Repository\EtudiantRepository;
use App\Repository\RddDiplomeRepository;
use function count;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administratif/rdd')]
class RddController extends BaseController
{
    /**
     * @throws NoResultException
     * @throws NonUniqueResultException
     */
    #[Route(path: '/', name: 'sa_rdd_index', methods: 'GET')]
    public function index(RddDiplomeRepository $rddDiplomeRepository, EtudiantRepository $etudiantRepository): Response
    {
        $diplomes = $rddDiplomeRepository->findAll();
        $etudiants = $etudiantRepository->findAll();
        $tEtudiant = [];
        foreach ($etudiants as $etudiant) {
            $tEtudiant[$etudiant->getNumEtudiant()] = $etudiant;
        }
        $nbComplet = $rddDiplomeRepository->countComplet();

        return $this->render('super-administration/scolarite/rdd/index.html.twig',
            [
                'diplomes' => $diplomes,
                'etudiants' => $tEtudiant,
                'nbComplet' => $nbComplet,
                'nbDiplomes' => count($diplomes),
            ]);
    }

    #[Route(path: '/export.{_format}', name: 'sa_rdd_export', methods: 'GET')]
    public function export(MyExportRdd $myExportRdd, RddDiplomeRepository $rddDiplomeRepository, EtudiantRepository $etudiantRepository): Response
    {
        $diplomes = $rddDiplomeRepository->findAll();
        $etudiants = $etudiantRepository->findAll();
        $tEtudiant = [];
        foreach ($etudiants as $etudiant) {
            $tEtudiant[$etudiant->getNumEtudiant()] = $etudiant;
        }

        return $myExportRdd->genereFichier($diplomes, $tEtudiant);
    }
}
