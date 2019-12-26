<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/TrombinoscopeController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller;

use App\Entity\Constantes;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\MesClasses\MyExport;
use App\MesClasses\MyExportListing;
use App\Repository\PersonnelRepository;
use Dompdf\Dompdf;
use Dompdf\Options;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;

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
     * @Route("/etudiant/export/{typeGroupe}.{_format}", name="trombinoscope_etudiant_export", methods="GET",
     *                                                   requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExportListing  $myExportListing
     * @param TypeGroupe       $typeGroupe
     * @param                  $_format
     *
     * @return null|StreamedResponse
     * @throws Exception
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
     * @Route("/etudiant/export-groupe/{groupe}.{_format}", name="trombinoscope_etudiant_export_groupe", methods="GET",
     *                                                   requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExportListing  $myExportListing
     * @param Groupe       $groupe
     * @param                  $_format
     *
     * @return null|StreamedResponse
     * @throws Exception
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
            $groupe->getTypeGroupe()->getId()
        );
    }



    /**
     * @Route("/etudiant/export-image/{typeGroupe}.pdf", name="trombinoscope_etudiant_image", methods="GET",
     *                                                   )
     * @param TypeGroupe $typeGroupe
     *
     * @return null|StreamedResponse
     */
    public function trombiEtudiantExportImage(
        TypeGroupe $typeGroupe
    ): Response {

        $html = $this->renderView('pdf/trombinoscope.html.twig', [
            'typeGroupe' => $typeGroupe,
            'groupes'    => $typeGroupe->getGroupes(),
            'semestre'   => $typeGroupe->getSemestre()
        ]);

        $options = new Options();
        $options->set('isRemoteEnabled', true);
        $options->set('isPhpEnabled', true);

        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);
        $dompdf->render();

        return new Response($dompdf->stream('trombinoscope-' . $typeGroupe->getSemestre()->getLibelle(),
            ['Attachment' => 1]));
    }

    /**
     * @Route("/etudiant/{semestre}/{typegroupe}", name="trombinoscope_etudiant_semestre", options={"expose":true})
     * @param Semestre        $semestre
     *
     * @param TypeGroupe|null $typegroupe
     *
     * @return Response
     */
    public function trombiEtudiantSemestre(Semestre $semestre, TypeGroupe $typegroupe = null): Response
    {
        return $this->render('trombinoscope/trombiEtudiant.html.twig', [
            'semestre'           => $semestre,
            'selectedTypeGroupe' => $typegroupe

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
     * @throws Exception
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
