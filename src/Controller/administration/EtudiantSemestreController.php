<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EtudiantSemestreController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/08/2020 12:38

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Form\EtudiantType;
use App\Form\ImportEtudiantType;
use App\Classes\MyExport;
use App\Classes\MyUpload;
use App\Repository\BacRepository;
use App\Repository\DepartementRepository;
use App\Repository\EtudiantRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EtudiantController
 * @package App\Controller\administration
 * @Route("/administration/etudiant/semestre")
 */
class EtudiantSemestreController extends BaseController
{
    /**
     * @Route("/parcours/{semestre}", name="administration_etudiant_parcours_semestre_index",
     *                                requirements={"semestre"="\d+"})
     * @param EtudiantRepository $etudiantRepository
     * @param Semestre           $semestre
     *
     * @return Response
     */
    public function parcoursSemestre(EtudiantRepository $etudiantRepository, Semestre $semestre): Response
    {
        $etudiants = $etudiantRepository->findBySemestre($semestre);

        return $this->render('administration/etudiant/parcours.html.twig', [
            'semestre'  => $semestre,
            'etudiants' => $etudiants
        ]);
    }

    /**
     * @Route("/add/{semestre}", name="administration_etudiant_semestre_add", requirements={"semestre"="\d+"})
     * @param Semestre|null $semestre
     *
     * @return Response
     */
    public function addEtudiant(Semestre $semestre = null): Response
    {
        if ($semestre === null) {
            $semestre = $this->dataUserSession->getSemestres()[0];
        }

        $formImport = $this->createForm(
            ImportEtudiantType::class,
            null,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'semestre'    => $semestre,
                'attr'        => [
                    'data-provide' => 'validation'
                ],
                'action'      => $this->generateUrl('administration_etudiant_import')
            ]
        );

        $etudiant = new Etudiant();
        $etudiant->setSemestre($semestre);
        $formEtudiant = $this->createForm(
            EtudiantType::class,
            $etudiant,
            [
                'attr'        => [
                    'data-provide' => 'validation'
                ],
                'departement' => $this->dataUserSession->getDepartement(),
                'action'      => $this->generateUrl('administration_etudiant_add')
            ]
        );

        return $this->render('administration/etudiant/add.html.twig', [
            'semestre'     => $semestre,
            'formImport'   => $formImport->createView(),
            'formEtudiant' => $formEtudiant->createView()
        ]);
    }


    /**
     * @Route("/import/photo/{semestre}", name="administration_etudiant_import_photo",
     *                                    requirements={"semestre"="\d+"}, methods={"GET"})
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function importPhoto(Semestre $semestre): Response
    {
        return $this->render('administration/etudiant/import_photo.html.twig', [
            'semestre' => $semestre
        ]);
    }

    /**
     * @Route("/import/photo/zip/{semestre}", name="administration_etudiant_import_photo_zip",
     *                                        requirements={"semestre"="\d+"}, methods={"GET|POST"})
     * @param MyUpload $myUpload
     * @param Request  $request
     * @param Semestre $semestre
     *
     * @return Response
     * @throws \Exception
     */
    public function importPhotoZip(MyUpload $myUpload, Request $request, Semestre $semestre): Response
    {
        $file = $request->files->get('fichierimport');
        $fichier = $myUpload->upload($file, 'temp/');
        $extract = $myUpload->extractZip($fichier, 'ph/');

        if ($extract === false) {
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
     * @param DepartementRepository $departementRepository
     * @param BacRepository         $bacRepository
     * @param Semestre              $semestre
     *
     * @return Response
     */
    public function semestre(
        DepartementRepository $departementRepository,
        BacRepository $bacRepository,
        Semestre $semestre
    ): Response {
        return $this->render('administration/etudiant/semestre.html.twig', [
            'semestre' => $semestre,
            'departements' => $departementRepository->findActifs(),
            'bacs' => $bacRepository->findAll()
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
     * @param MyExport           $myExport
     * @param EtudiantRepository $etudiantRepository
     * @param Semestre           $semestre
     * @param                    $_format
     *
     * @return Response
     * @throws Exception
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
