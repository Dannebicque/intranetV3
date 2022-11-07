<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/TrombinoscopeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2022 17:29
 */

namespace App\Controller;

use App\Classes\Configuration;
use App\Classes\MyExport;
use App\Classes\MyExportListing;
use App\Classes\MySerializer;
use App\Classes\Pdf\MyPDF;
use App\Entity\Constantes;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Exception\DiplomeNotFoundException;
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

        $semestres = [];
        foreach ($this->dataUserSession->getSemestresActifs() as $semestre) {
            if (!array_key_exists($semestre->getOrdreLmd(), $semestres))
            {
                $semestres[$semestre->getOrdreLmd()] = [];
            }
            $semestres[$semestre->getOrdreLmd()][] = $semestre;
        }

        return $this->render('trombinoscope/index.html.twig', [
            'semestres' => $semestres
        ]);
    }

    /**
     * @throws Exception
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/etudiant/export/{typeGroupe<\d+>}.{_format}', name: 'trombinoscope_etudiant_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function trombiEtudiantExport(MyExportListing $myExportListing, TypeGroupe $typeGroupe, string $_format): Response
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
    public function trombiEtudiantExportGroupe(MyExportListing $myExportListing, Groupe $groupe, string $_format): Response
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
     * @throws \App\Exception\DiplomeNotFoundException
     */
    #[Route(path: '/etudiant/{semestre<\d+>}', name: 'trombinoscope_etudiant_semestre', options: ['expose' => true])]
    #[Route(path: '/etudiant/{semestre<\d+>}/{typegroupe<\d+>}', name: 'trombinoscope_etudiant_semestre_type_groupe', options: ['expose' => true])]
    #[ParamConverter('typegroupe', options: ['id' => 'typegroupe'])]
    public function trombiEtudiantSemestre(
        EtudiantRepository $etudiantRepository,
        GroupeRepository $groupeRepository,
        Semestre $semestre,
        ?TypeGroupe $typegroupe = null
    ): Response {
        if (null !== $semestre->getDiplome() && null !== $semestre->getDiplome()->getParent()) {
            $dip = $semestre->getDiplome()?->getParent();
        } else {
            $dip = $semestre->getDiplome();
        }

        if (null === $dip) {
            throw new DiplomeNotFoundException();
        }

        $typeGroupes = $semestre->getTypeGroupess();

        $groupes = null;
        if (null !== $typegroupe) {
            $groupes = $groupeRepository->findByTypeGroupe($typegroupe);
        } else {
            foreach ($typeGroupes as $typeGroupe) {
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
            'parcours' => $semestre->getDiplome()->getApcParcours(),
            'semestre' => $semestre,
            'selectedTypeGroupe' => $typegroupe,
            'typeGroupes' => $typeGroupes,
            'groupes' => $groupes,
            'etudiants' => $etudiants,
            'etudiantGroupes' => $etudiantRepository->getEtudiantGroupes($semestre),
        ]);
    }

    #[Route(path: '/personnel/{type}', name: 'trombinoscope_personnel', options: ['expose' => true])]
    public function trombiPersonnel(
        Configuration $configuration,
        PersonnelRepository $personnelRepository,
        string $type
    ): Response {
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

    /**
     * @throws \JsonException
     */
    #[Route(path: '/{type}.{_format}', name: 'trombinoscope_personnel_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function trombiPersonnelExport(
        MySerializer $mySerializer,
        MyExport $myExport,
        PersonnelRepository $personnelRepository,
        string $type,
        string $_format
    ): Response {
        $personnels = $personnelRepository->findByType($type, $this->dataUserSession->getDepartement());

        $data = $mySerializer->getDataFromSerialization(
            $personnels,
            [
                'nom',
                'prenom',
                'mailUniv',
            ],
            ['utilisateur']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'listing_'.$type,
        );
    }
}
