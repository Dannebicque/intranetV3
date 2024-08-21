<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/TrombinoscopeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2024 19:12
 */

namespace App\Controller;

use App\Classes\Etudiant\GetEtudiants;
use App\Classes\GetGroupeFromSemestre;
use App\Classes\MyExport;
use App\Classes\MyExportListing;
use App\Classes\MySerializer;
use App\Classes\Pdf\PdfManager;
use App\Classes\Personnels\GetPersonnels;
use App\Entity\Constantes;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Exception\SemestreNotFoundException;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use App\Repository\TypeGroupeRepository;
use JsonException;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

#[Route('/trombinoscope')]
class TrombinoscopeController extends BaseController
{
    #[Route(path: '/get-groupe', name: 'trombinoscope_get_groupe')]
    public function getGroupes(
        SemestreRepository   $semestreRepository,
        TypeGroupeRepository $typeGroupeRepository,
        Request              $request
    ): Response
    {
        //en partant de typegroupes, récupérer les groupes
        if ($request->request->has('semestre')) {
            $semestre = $semestreRepository->find($request->request->get('semestre'));
        } else {
            $semestre = null;
        }

        if ($semestre === null) {
            throw new SemestreNotFoundException();
        }

        if ($request->request->has('typegroupe')) {
            $typeGroupe = $typeGroupeRepository->find($request->request->get('typegroupe'));
        } else {
            $typeGroupe = null;
        }

        if ($typeGroupe === null) {
            return $this->json([]);
        }

        $groupes = GetGroupeFromSemestre::GetGroupeFromSemestreToArray($semestre, $typeGroupe);

        return $this->json($groupes);
    }

    #[Route('/{semestre}', name: 'trombinoscope_etudiant_index', requirements: ['semestre' => '\d+'])]
    public function trombinoscopeEtudiant(Semestre $semestre): Response
    {
        $this->breadcrumbHelper->addItem('trombinoscope', 'trombinoscope_etudiant_index', ['semestre' => $semestre->getId()]);
        $typeGroupes = $semestre->getTypeGroupess()->toArray();
        //groupe par défaut
        $typegroupe = null;
        foreach ($typeGroupes as $typeGroupe) {
            if ($typeGroupe->getDefaut()) {
                $groupes = GetGroupeFromSemestre::GetGroupeFromSemestre($semestre, $typeGroupe);
                $typegroupe = $typeGroupe;
            }
        }
        return $this->render('trombinoscope/index.html.twig', [
            'type' => 'etudiant',
            'semestre' => $semestre,
            'typeGroupes' => $typeGroupes,
            'groupes' => $groupes,
            'selectedTypeGroupe' => $typegroupe,
        ]);
    }

    #[Route('/{type}', name: 'trombinoscope_personnel_index')]
    public function trombinoscopePersonnel(string $type): Response
    {
        $this->breadcrumbHelper->addItem('trombinoscope', 'trombinoscope_personnel_index', ['type' => $type]);

        return $this->render('trombinoscope/index.html.twig', [
            'type' => $type
        ]);
    }

    /**
     * @throws Exception
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/etudiant/export/{typeGroupe<\d+>}.{_format}', name: 'trombinoscope_etudiant_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    #[IsGranted('ROLE_PERMANENT')]
    public function trombiEtudiantExport(
        Request            $request,
        SemestreRepository $semestreRepository,
        MyExportListing    $myExportListing,
        TypeGroupe         $typeGroupe,
        string             $_format): Response
    {
        $idSemestre = $request->query->get('semestre');

        if (null !== $idSemestre) {
            $semestre = $semestreRepository->find($idSemestre);
        }

        return $myExportListing->genereFichier(
            Constantes::TYPEDOCUMENT_EMARGEMENT,
            $_format,
            [],
            $typeGroupe->getId(),
            semestre: $semestre ?? null
        );
    }

    /**
     * @throws Exception
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/etudiant/export-groupe/{groupe<\d+>}.{_format}', name: 'trombinoscope_etudiant_export_groupe', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    #[IsGranted('ROLE_PERMANENT')]
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
    #[IsGranted('ROLE_PERMANENT')]
    public function trombiEtudiantExportImage(PdfManager $myPDF, TypeGroupe $typeGroupe): Response
    {
        //todo: à revoir, getSemestre n'existe plus en V4
        return $myPDF->pdf()::generePdf('pdf/trombinoscope.html.twig',
            [
                'typeGroupe' => $typeGroupe,
                'groupes' => $typeGroupe->getGroupes(),
                'semestre' => $typeGroupe->getSemestre(),
            ],
            null !== $typeGroupe->getSemestre() ? 'trombinoscope-' . $typeGroupe->getSemestre()->getLibelle() : ''
        );
    }

    #[Route(path: '/get-data/{type}', name: 'trombinoscope_get_data')]
    public function getDataTrombinoscope(
        GetPersonnels $getPersonnels,
        GetEtudiants  $getEtudiants,
        string        $type,
        Request       $req
    ): Response
    {
        if ($type === 'etudiant') {
            $elements = $getEtudiants->getEtudiants($req->request);
        } else {
            $elements = $getPersonnels->getPersonnels($req->request, $type, $this->getDepartement());
        }

        return $this->render('trombinoscope/_trombi.html.twig', [
            'elements' => $elements,
            'type' => $type,
            'getEtudiants' => $getEtudiants->getData(),
//            'parcours' => $semestre->getDiplome()->getApcParcours(),
//            'semestre' => $semestre,
//            'selectedTypeGroupe' => $typegroupe,
//            'typeGroupes' => $typeGroupes,
//            'groupes' => $groupes,
//            'etudiants' => $etudiants,
//            'siteperso' => $semestre->getDiplome()->getOptEspacePersoVisible(),
//            'etudiantGroupes' => $etudiantRepository->getEtudiantGroupes($semestre),
        ]);
    }

    /**
     * @throws JsonException
     */
    #[Route(path: '/{type}.{_format}', name: 'trombinoscope_personnel_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    #[IsGranted('ROLE_PERMANENT')]
    public function trombiPersonnelExport(
        MySerializer $mySerializer,
        MyExport     $myExport,
        PersonnelRepository $personnelRepository,
        string       $type,
        string       $_format
    ): Response
    {
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
            'listing_' . $type,
        );
    }
}
