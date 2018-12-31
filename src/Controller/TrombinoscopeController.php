<?php

namespace App\Controller;

use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\MesClasses\MyExport;
use App\MesClasses\MyExportListing;
use App\Repository\PersonnelRepository;
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
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function trombiEtudiantExport(
        MyExportListing $myExportListing,
        TypeGroupe $typeGroupe,
        $_format
    ): ?StreamedResponse
    {
        return $myExportListing->genereFichier(
            Constantes::TYPEDOCUMENT_LISTE,
            $_format,
            [],
            $typeGroupe->getId()
        );
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
            $this->dataUserSession->getFormationId()
        );

        return $this->render('trombinoscope/trombiPersonnel.html.twig', [
            'personnels' => $personnels,
            'type'       => $type
        ]);
    }

    /**
     * @Route("/{type}.{_format}", name="trombinoscope_personnel_export", methods="GET", requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport          $myExport
     * @param PersonnelRepository $personnelRepository
     * @param                   $_format
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function trombiPersonnelExport(MyExport $myExport, PersonnelRepository $personnelRepository, $type, $_format): Response
    {
        $personnels = $personnelRepository->findByType($type, $this->dataUserSession->getFormation());
        $response = $myExport->genereFichierGenerique(
            $_format,
            $personnels,
            'listing_'.$type,
            ['utilisateur'],
            ['nom', 'prenom']
        );

        return $response;
    }
}
