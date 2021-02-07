<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/TrombinoscopeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller;

use App\Classes\MyExport;
use App\Classes\MyExportListing;
use App\Classes\Pdf\MyPDF;
use App\Entity\Constantes;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use PhpOffice\PhpSpreadsheet\Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class TrombinoscopeController.
 *
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
     *
     * @param $_format
     *
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
     * @Route("/etudiant/export-groupe/{groupe<\d+>}.{_format}", name="trombinoscope_etudiant_export_groupe",
     *                                                           methods="GET",
     *                                                           requirements={"_format"="csv|xlsx|pdf"})
     *
     * @param $_format
     *
     * @throws Exception
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function trombiEtudiantExportGroupe(
        MyExportListing $myExportListing,
        Groupe $groupe,
        $_format
    ): PdfResponse {
        return $myExportListing->genereFichier(
            Constantes::TYPEDOCUMENT_EMARGEMENT,
            $_format,
            [],
            $groupe
        );
    }

    /**
     * @Route("/etudiant/export-image/{typeGroupe<\d+>}.pdf", name="trombinoscope_etudiant_image", methods="GET")
     *
     * @return Response
     * @throws SyntaxError
     * @throws LoaderError
     *
     * @throws RuntimeError
     */
    public function trombiEtudiantExportImage(
        MyPDF $myPDF,
        TypeGroupe $typeGroupe
    ): PdfResponse {
        return $myPDF::generePdf('pdf/trombinoscope.html.twig',
            [
                'typeGroupe' => $typeGroupe,
                'groupes'    => $typeGroupe->getGroupes(),
                'semestre'   => $typeGroupe->getSemestre(),
            ],
            null !== $typeGroupe->getSemestre() ? 'trombinoscope-' . $typeGroupe->getSemestre()->getLibelle() : '',
            null !== $this->getDepartement() ? $this->getDepartement()->getLibelle() : ''
        );
    }

    /**
     * @Route("/etudiant/{semestre<\d+>}", name="trombinoscope_etudiant_semestre", options={"expose":true})
     * @Route("/etudiant/{semestre<\d+>}/{typegroupe<\d+>}", name="trombinoscope_etudiant_semestre_type_groupe",
     *                                                       options={"expose":true})
     *
     * @ParamConverter("typegroupe", options={"id" = "typegroupe"})
     */
    public function trombiEtudiantSemestre(
        GroupeRepository $groupeRepository,
        Semestre $semestre,
        ?TypeGroupe $typegroupe = null
    ): Response {
        $groupes = null;
        if (null !== $typegroupe) {
            $groupes = $groupeRepository->findByTypeGroupe($typegroupe);
        } else {
            foreach ($semestre->getTypeGroupes() as $typeGroupe) {
                if (true === $typeGroupe->getDefaut()) {
                    $typegroupe = $typeGroupe;
                    $groupes = $typeGroupe->getGroupes();
                }
            }
        }

        return $this->render('trombinoscope/trombiEtudiant.html.twig', [
            'semestre'           => $semestre,
            'selectedTypeGroupe' => $typegroupe,
            'groupes'            => $groupes,
        ]);
    }

    /**
     * @Route("/personnel/{type}", name="trombinoscope_personnel", options={"expose":true})
     *
     * @param $type
     */
    public function trombiPersonnel(PersonnelRepository $personnelRepository, $type): Response
    {
        $personnels = $personnelRepository->findByType(
            $type,
            $this->dataUserSession->getDepartementId()
        );

        return $this->render('trombinoscope/trombiPersonnel.html.twig', [
            'personnels' => $personnels,
            'type'       => $type,
        ]);
    }

    /**
     * @Route("/{type}.{_format}", name="trombinoscope_personnel_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     *
     * @param $type
     * @param $_format
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
