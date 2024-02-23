<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/EtudiantSemestreController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Classes\MyUpload;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\EtudiantRepository;
use App\Table\EtudiantSemestreTableType;
use Exception;
use JsonException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class EtudiantController.
 */
#[Route(path: '/administration/etudiant/semestre')]
class EtudiantSemestreController extends BaseController
{
    #[Route(path: '/parcours/{semestre}', name: 'administration_etudiant_parcours_semestre_index', requirements: ['semestre' => '\d+'])]
    public function parcoursSemestre(EtudiantRepository $etudiantRepository, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $semestre);
        $etudiants = $etudiantRepository->findBySemestre($semestre);

        return $this->render('administration/etudiant/parcours.html.twig', [
            'semestre' => $semestre,
            'etudiants' => $etudiants,
        ]);
    }

    #[Route(path: '/add/{semestre}', name: 'administration_etudiant_semestre_add', requirements: ['semestre' => '\d+'])]
    public function addEtudiant(AnneeUniversitaireRepository $anneeUniversitaireRepository, Semestre $semestre = null): Response
    {
        if (null === $semestre) {
            $semestre = $this->dataUserSession->getSemestres()[0];
        }
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $semestre);

        return $this->render('administration/etudiant/add.html.twig', [
            'semestre' => $semestre,
            'anneeUniversitaires' => $anneeUniversitaireRepository->findAll(),
        ]);
    }

    #[Route(path: '/import/photo/{semestre}', name: 'administration_etudiant_import_photo', requirements: ['semestre' => '\d+'], methods: ['GET'])]
    public function importPhoto(Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $semestre);

        return $this->render('administration/etudiant/import_photo.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/import/photo/zip/{semestre}', name: 'administration_etudiant_import_photo_zip', requirements: ['semestre' => '\d+'], methods: ['GET|POST'])]
    public function importPhotoZip(MyUpload $myUpload, Request $request, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $semestre);
        $file = $request->files->get('fichierimport');
        $fichier = $myUpload->upload($file);
        $extract = $myUpload->extractZip($fichier, 'ph/');
        if (false === $extract) {
            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'Impossible d\'accéder à l\'archive.');

            return $this->redirectToRoute('administration_etudiant_semestre_add', ['semestre' => $semestre->getId()]);
        }
        // on parcours les fichiers, on renome, on copie et on supprime.
        $myUpload->traitePhoto('ph/', 'etudiants/');
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Photos importées avec succés.');

        return $this->redirectToRoute('administration_etudiant_semestre_add', ['semestre' => $semestre->getId()]);
    }

    /**
     * @throws JsonException
     */
    #[Route(path: '/{semestre}', name: 'administration_etudiant_semestre_index', requirements: ['semestre' => '\d+'])]
    public function semestre(Request $request, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $semestre);
        $table = $this->createTable(EtudiantSemestreTableType::class, [
            'semestre' => $semestre,
            'departement' => $this->getDepartement(),
        ]);
        $table->handleRequest($request);
        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('administration/etudiant/semestre.html.twig', [
            'semestre' => $semestre,
            'table' => $table,
        ]);
    }

    #[Route(path: '/export/{semestre}.{_format}', name: 'administration_etudiant_semestre_export', requirements: ['semestre' => '\d+', '_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function exportEtudiantsSemestre(MySerializer $mySerializer, MyExport $myExport, EtudiantRepository $etudiantRepository, Semestre $semestre, string $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $semestre);
        $etudiants = $etudiantRepository->findBySemestre($semestre);
        $data = $mySerializer->getDataFromSerialization(
            $etudiants,
            [
                'nom',
                'prenom',
                'civilite',
                'numEtudiant',
                'bac',
                'mailUniv',
                'adresse' => ['adresse1', 'adresse2', 'codePostal', 'ville', 'pays'],
                'tel1',
                'tel2',
            ],
            ['etudiants_administration', 'utilisateur', 'adresse']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'etudiants_'.$semestre->getLibelle(),
        );
    }
}
