<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Form\EtudiantType;
use App\Form\ImportEtudiantType;
use App\MesClasses\MyExport;
use App\Repository\EtudiantRepository;
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
     * @Route("/parcours/{semestre}", name="administration_etudiant_parcours_semestre_index", requirements={"semestre"="\d+"})
     * @param EtudiantRepository $etudiantRepository
     * @param Semestre           $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function parcoursSemestre(EtudiantRepository $etudiantRepository, Semestre $semestre): Response
    {
        $etudiants = $etudiantRepository->findBySemestre($semestre);

        return $this->render('administration/etudiant/parcours.html.twig', [
            'semestre' => $semestre,
            'etudiants' => $etudiants
        ]);
    }

    /**
     * @Route("/add/{semestre}", name="administration_etudiant_semestre_add", requirements={"semestre"="\d+"})
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    public function addEtudiant(Semestre $semestre = null){
        if ($semestre === null) {
            $semestre = $this->dataUserSession->getSemestres()[0];
        }

        $formImport = $this->createForm(
            ImportEtudiantType::class,
            null,
            [
                'formation' => $this->dataUserSession->getFormation(),
                'semestre' => $semestre,
                'attr'      => [
                    'data-provide' => 'validation'
                ],
                'action' => $this->generateUrl('administration_etudiant_import')
            ]
        );

        $etudiant = new Etudiant();
        $etudiant->setSemestre($semestre);
        $formEtudiant = $this->createForm(
            EtudiantType::class,
            $etudiant,
            [
                'attr'      => [
                    'data-provide' => 'validation'
                ],
                'action' => $this->generateUrl('administration_etudiant_add')
            ]
        );

        return $this->render('administration/etudiant/add.html.twig', [
            'semestre' => $semestre,
            'formImport' => $formImport->createView(),
            'formEtudiant' => $formEtudiant->createView()
        ]);
    }



    /**
     * @Route("/import/photo/{semestre}", name="administration_etudiant_import_photo_zip", requirements={"semestre"="\d+"}, methods={"GET"})
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function importPhoto(Semestre $semestre){
        return $this->render('administration/etudiant/import_photo.html.twig', [
            'semestre' => $semestre
        ]);
    }

    /**
     * @Route("/import/photo/zip/{semestre}", name="administration_etudiant_import_photo", requirements={"semestre"="\d+"}, methods={"GET|POST"})
     * @param Request  $request
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function importPhotoZip(Request $request, Semestre $semestre){
        return $this->render('administration/etudiant/import_photo.html.twig', [
            'semestre' => $semestre
        ]);
    }

    /**
     * @Route("/{semestre}", name="administration_etudiant_semestre_index", requirements={"semestre"="\d+"})
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function semestre(Semestre $semestre): Response
    {
        return $this->render('administration/etudiant/semestre.html.twig', [
            'semestre' => $semestre
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
     * @param MyExport $myExport
     * @param EtudiantRepository $etudiantRepository
     * @param Semestre $semestre
     * @param                    $_format
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function exportAllAbsences(
        MyExport $myExport,
        EtudiantRepository $etudiantRepository,
        Semestre $semestre,
        $_format
    ): Response {
        $etudiants = $etudiantRepository->findBySemestre($semestre);
        $response = $myExport->genereFichierGenerique(
            $_format,
            $etudiants,
            'etudiants_' . $semestre->getLibelle(),
            ['etudiants_administration', 'utilisateur'],
            ['nom', 'prenom', 'sexe', 'numEtudiant', 'bac', 'mailUniv']
        );

        return $response;
    }
}
