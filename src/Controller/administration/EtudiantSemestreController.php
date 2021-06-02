<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EtudiantSemestreController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/06/2021 13:13
 */

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Classes\MyUpload;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Repository\BacRepository;
use App\Repository\DepartementRepository;
use App\Repository\EtudiantRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EtudiantController.
 *
 * @Route("/administration/etudiant/semestre")
 */
class EtudiantSemestreController extends BaseController
{
    /**
     * @Route("/parcours/{semestre}", name="administration_etudiant_parcours_semestre_index",
     *                                requirements={"semestre"="\d+"})
     */
    public function parcoursSemestre(EtudiantRepository $etudiantRepository, Semestre $semestre): Response
    {
        $etudiants = $etudiantRepository->findBySemestre($semestre);

        return $this->render('administration/etudiant/parcours.html.twig', [
            'semestre' => $semestre,
            'etudiants' => $etudiants,
        ]);
    }

    /**
     * @Route("/add/{semestre}", name="administration_etudiant_semestre_add", requirements={"semestre"="\d+"})
     */
    public function addEtudiant(Semestre $semestre = null): Response
    {
        if (null === $semestre) {
            $semestre = $this->dataUserSession->getSemestres()[0];
        }

        return $this->render('administration/etudiant/add.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    /**
     * @Route("/import/photo/{semestre}", name="administration_etudiant_import_photo",
     *                                    requirements={"semestre"="\d+"}, methods={"GET"})
     */
    public function importPhoto(Semestre $semestre): Response
    {
        return $this->render('administration/etudiant/import_photo.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    /**
     * @Route("/import/photo/zip/{semestre}", name="administration_etudiant_import_photo_zip",
     *                                        requirements={"semestre"="\d+"}, methods={"GET|POST"})
     *
     * @throws \Exception
     */
    public function importPhotoZip(MyUpload $myUpload, Request $request, Semestre $semestre): Response
    {
        $file = $request->files->get('fichierimport');
        $fichier = $myUpload->upload($file, 'temp/');
        $extract = $myUpload->extractZip($fichier, 'ph/');

        if (false === $extract) {
            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'Impossible d\'accéder à l\'archive.');

            return $this->redirectToRoute('administration_etudiant_semestre_add', ['semestre' => $semestre->getId()]);
        }
        //on parcours les fichiers, on renome, on copie et on supprime.
        $myUpload->traitePhoto('ph/', 'etudiants/');
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Photos importées avec succés.');

        return $this->redirectToRoute('administration_etudiant_semestre_add', ['semestre' => $semestre->getId()]);
    }

    /**
     * @Route("/{semestre}", name="administration_etudiant_semestre_index", requirements={"semestre"="\d+"})
     */
    public function semestre(
        DepartementRepository $departementRepository,
        BacRepository $bacRepository,
        Semestre $semestre
    ): Response {
        return $this->render('administration/etudiant/semestre.html.twig', [
            'semestre' => $semestre,
            'departements' => $departementRepository->findActifs(),
            'bacs' => $bacRepository->findAll(),
        ]);
    }

    /**
     * @Route("/export/{semestre}.{_format}",
     *     name="administration_etudiant_semestre_export",
     *     methods="GET",
     *     requirements={
     *     "semestre"="\d+",
     *     "_format"="csv|xlsx|pdf"
     * })
     */
    public function exportAllAbsences(
        MyExport $myExport,
        EtudiantRepository $etudiantRepository,
        Semestre $semestre,
        $_format
    ): Response {
        $etudiants = $etudiantRepository->findBySemestre($semestre);

        return $myExport->genereFichierGenerique(
            $_format,
            $etudiants,
            'etudiants_' . $semestre->getLibelle(),
            ['etudiants_administration', 'utilisateur'],
            ['nom', 'prenom', 'sexe', 'numEtudiant', 'bac', 'mailUniv']
        );
    }
}
