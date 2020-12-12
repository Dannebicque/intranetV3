<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/RddController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2020 14:31

namespace App\Controller\superAdministration;

use App\Classes\Rdd\MyExportRdd;
use App\Controller\BaseController;
use App\Entity\Annee;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\AnneeType;
use App\Repository\EtudiantRepository;
use App\Repository\RddDiplomeRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/rdd")
 */
class RddController extends BaseController
{


    /**
     * @Route("/", name="sa_rdd_index", methods="GET")
     *
     * @param RddDiplomeRepository $rddDiplomeRepository
     * @param EtudiantRepository   $etudiantRepository
     *
     * @return Response
     * @throws NoResultException
     * @throws NonUniqueResultException
     */
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
                'diplomes'   => $diplomes,
                'etudiants'  => $tEtudiant,
                'nbComplet'  => $nbComplet,
                'nbDiplomes' => count($diplomes)
            ]);
    }

    /**
     * @Route("/export.{_format}", name="sa_rdd_export", methods="GET")
     *
     * @param MyExportRdd          $myExportRdd
     * @param RddDiplomeRepository $rddDiplomeRepository
     * @param EtudiantRepository   $etudiantRepository
     *
     * @return Response
     */
    public function export(
        MyExportRdd $myExportRdd,
        RddDiplomeRepository $rddDiplomeRepository,
        EtudiantRepository $etudiantRepository
    ): Response {
        $diplomes = $rddDiplomeRepository->findAll();
        $etudiants = $etudiantRepository->findAll();
        $tEtudiant = [];
        foreach ($etudiants as $etudiant) {
            $tEtudiant[$etudiant->getNumEtudiant()] = $etudiant;
        }

        return $myExportRdd->genereFichier($diplomes, $tEtudiant);

    }
}
