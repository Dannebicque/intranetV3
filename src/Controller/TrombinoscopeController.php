<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/TrombinoscopeController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/10/2020 10:45

namespace App\Controller;

use App\Classes\Pdf\MyPDF;
use App\Entity\Constantes;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Classes\MyExport;
use App\Classes\MyExportListing;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class TrombinoscopeController
 * @package App\Controller
 * @Route("/trombinoscope")
 */
class TrombinoscopeController extends BaseController
{
    /**
     * @Route("/", name="trombinoscope_index")
     */
    public function index(): Response
    {
        return $this->render('trombinoscope/index.html.twig', [
        ]);
    }

    /**
     * @Route("/etudiant/export/{typeGroupe<\d+>}.{_format}", name="trombinoscope_etudiant_export", methods="GET",
     *                                                   requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExportListing  $myExportListing
     * @param TypeGroupe       $typeGroupe
     * @param                  $_format
     *
     * @return null|StreamedResponse
     * @throws Exception
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function trombiEtudiantExport(
        MyExportListing $myExportListing,
        TypeGroupe $typeGroupe,
        $_format
    ): ?StreamedResponse {
        return $myExportListing->genereFichier(
            Constantes::TYPEDOCUMENT_EMARGEMENT,
            $_format,
            [],
            $typeGroupe->getId()
        );
    }

    /**
     * @Route("/etudiant/export-groupe/{groupe<\d+>}.{_format}", name="trombinoscope_etudiant_export_groupe", methods="GET",
     *                                                   requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExportListing  $myExportListing
     * @param Groupe           $groupe
     * @param                  $_format
     *
     * @return null|StreamedResponse
     * @throws Exception
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function trombiEtudiantExportGroupe(
        MyExportListing $myExportListing,
        Groupe $groupe,
        $_format
    ): ?StreamedResponse {
        return $myExportListing->genereFichier(
            Constantes::TYPEDOCUMENT_EMARGEMENT,
            $_format,
            [],
            $groupe
        );
    }


    /**
     * @Route("/etudiant/export-image/{typeGroupe<\d+>}.pdf", name="trombinoscope_etudiant_image", methods="GET")
     * @param MyPDF      $myPDF
     * @param TypeGroupe $typeGroupe
     *
     * @return Response
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function trombiEtudiantExportImage(
        MyPDF $myPDF,
        TypeGroupe $typeGroupe
    ): Response {

        $myPDF::generePdf('pdf/trombinoscope.html.twig',
            [
                'typeGroupe' => $typeGroupe,
                'groupes'    => $typeGroupe->getGroupes(),
                'semestre'   => $typeGroupe->getSemestre()
            ],
            $typeGroupe->getSemestre() !== null ? 'trombinoscope-' . $typeGroupe->getSemestre()->getLibelle() : '',
            $this->getDepartement() !== null ? $this->getDepartement()->getLibelle() : ''
        );

        return new Response(Response::HTTP_OK);
    }

    /**
     * @Route("/etudiant/{semestre<\d+>}", name="trombinoscope_etudiant_semestre", options={"expose":true})
     * @Route("/etudiant/{semestre<\d+>}/{typegroupe<\d+>}", name="trombinoscope_etudiant_semestre_type_groupe",
     *                                                       options={"expose":true})
     * @param GroupeRepository $groupeRepository
     * @param Semestre         $semestre
     *
     * @param TypeGroupe|null  $typegroupe
     * @ParamConverter("typegroupe", options={"id" = "typegroupe"})
     *
     * @return Response
     */
    public function trombiEtudiantSemestre(
        GroupeRepository $groupeRepository,
        Semestre $semestre,
        ?TypeGroupe $typegroupe = null
    ): Response {
        if ($typegroupe !== null) {
            $groupes = $groupeRepository->findByTypeGroupe($typegroupe);
        } else {
            foreach ($semestre->getTypeGroupes() as $typeGroupe) {
                if ($typeGroupe->getDefaut() === true) {
                    $typegroupe = $typeGroupe;
                    $groupes = $typeGroupe->getGroupes();
                }
            }
        }

        return $this->render('trombinoscope/trombiEtudiant.html.twig', [
            'semestre'           => $semestre,
            'selectedTypeGroupe' => $typegroupe,
            'groupes'            => $groupes
        ]);
    }

    /**
     * @Route("/personnel/{type}", name="trombinoscope_personnel", options={"expose":true})
     * @param PersonnelRepository $personnelRepository
     * @param                     $type
     *
     * @return Response
     */
    public function trombiPersonnel(PersonnelRepository $personnelRepository, $type): Response
    {
        $personnels = $personnelRepository->findByType(
            $type,
            $this->dataUserSession->getDepartementId()
        );

        return $this->render('trombinoscope/trombiPersonnel.html.twig', [
            'personnels' => $personnels,
            'type'       => $type
        ]);
    }

    /**
     * @Route("/{type}.{_format}", name="trombinoscope_personnel_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport            $myExport
     * @param PersonnelRepository $personnelRepository
     * @param                     $type
     * @param                     $_format
     *
     * @return Response
     */
    public function trombiPersonnelExport(
        MyExport $myExport,
        PersonnelRepository $personnelRepository,
        $type,
        $_format
    ): Response {
        $personnels = $personnelRepository->findByType($type, $this->dataUserSession->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $personnels,
            'listing_' . $type,
            ['utilisateur'],
            ['nom', 'prenom']
        );
    }
}
