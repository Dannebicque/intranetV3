<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/TrombinoscopeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/06/2021 10:28
 */

namespace App\Controller;

use App\Classes\Configuration;
use App\Classes\MyExport;
use App\Classes\MyExportListing;
use App\Classes\Pdf\MyPDF;
use App\Entity\Constantes;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use PhpOffice\PhpSpreadsheet\Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

#[Route('/trombinoscope')]
class TrombinoscopeController extends BaseController
{
    #[Route('/', name: 'trombinoscope_index')]
    public function index(): Response
    {
        $this->breadcrumbHelper->addItem('trombinoscope', 'trombinoscope_index');

        return $this->render('trombinoscope/index.html.twig', [
        ]);
    }

    /**
     * @throws Exception
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/etudiant/export/{typeGroupe<\d+>}.{_format}', name: 'trombinoscope_etudiant_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function trombiEtudiantExport(MyExportListing $myExportListing, TypeGroupe $typeGroupe, $_format)
    {
        return $myExportListing->genereFichier(
            Constantes::TYPEDOCUMENT_EMARGEMENT,
            $_format,
            [],
            $typeGroupe->getId()
        );
    }

    /**
     * @throws Exception
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/etudiant/export-groupe/{groupe<\d+>}.{_format}', name: 'trombinoscope_etudiant_export_groupe', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function trombiEtudiantExportGroupe(MyExportListing $myExportListing, Groupe $groupe, $_format)
    {
        return $myExportListing->genereFichier(
            Constantes::TYPEDOCUMENT_EMARGEMENT,
            $_format,
            [],
            $groupe
        );
    }

    /**
     * @throws SyntaxError
     * @throws LoaderError
     * @throws RuntimeError
     */
    #[Route(path: '/etudiant/export-image/{typeGroupe<\d+>}.pdf', name: 'trombinoscope_etudiant_image', methods: 'GET')]
    public function trombiEtudiantExportImage(MyPDF $myPDF, TypeGroupe $typeGroupe): PdfResponse
    {
        return $myPDF::generePdf('pdf/trombinoscope.html.twig',
            [
                'typeGroupe' => $typeGroupe,
                'groupes' => $typeGroupe->getGroupes(),
                'semestre' => $typeGroupe->getSemestre(),
            ],
            null !== $typeGroupe->getSemestre() ? 'trombinoscope-'.$typeGroupe->getSemestre()->getLibelle() : ''
        );
    }

    /**
     * @ParamConverter("typegroupe", options={"id" = "typegroupe"})
     */
    #[Route(path: '/etudiant/{semestre<\d+>}', name: 'trombinoscope_etudiant_semestre', options: ['expose' => true])]
    #[Route(path: '/etudiant/{semestre<\d+>}/{typegroupe<\d+>}', name: 'trombinoscope_etudiant_semestre_type_groupe', options: ['expose' => true])]
    public function trombiEtudiantSemestre(EtudiantRepository $etudiantRepository, GroupeRepository $groupeRepository, Semestre $semestre, ?TypeGroupe $typegroupe = null): Response
    {
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
        if (null !== $typegroupe) {
            $etudiants = $groupeRepository->getEtudiantsByGroupes($typegroupe);
        } else {
            $etudiants = [];
        }

        return $this->render('trombinoscope/trombiEtudiant.html.twig', [
            'semestre' => $semestre,
            'selectedTypeGroupe' => $typegroupe,
            'groupes' => $groupes,
            'etudiants' => $etudiants,
            'etudiantGroupes' => $etudiantRepository->getEtudiantGroupes($semestre),
        ]);
    }

    #[Route(path: '/personnel/{type}', name: 'trombinoscope_personnel', options: ['expose' => true])]
    public function trombiPersonnel(Configuration $configuration, PersonnelRepository $personnelRepository, $type): Response
    {
        $personnels = $personnelRepository->findByType(
            $type,
            $this->getDepartement(),
            $configuration->get('AFFICHAGE_TROMBI')
        );

        return $this->render('trombinoscope/trombiPersonnel.html.twig', [
            'personnels' => $personnels,
            'type' => $type,
        ]);
    }

    #[Route(path: '/{type}.{_format}', name: 'trombinoscope_personnel_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function trombiPersonnelExport(MyExport $myExport, PersonnelRepository $personnelRepository, $type, $_format): Response
    {
        $personnels = $personnelRepository->findByType($type, $this->dataUserSession->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $personnels,
            'listing_'.$type,
            ['utilisateur'],
            ['nom', 'prenom']
        );
    }
}
