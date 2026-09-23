<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/EtudiantImportController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Controller\administration;

use App\Classes\Etudiant\EtudiantImport;
use App\Classes\MyUpload;
use App\Controller\BaseController;
use App\Repository\SemestreRepository;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/administration/etudiant/import')]
class EtudiantImportController extends BaseController
{
    // todo: a finaliser ou inutile ?
    private $semestreRepository;

    public function __construct(SemestreRepository $semestreRepository)
    {
        $this->semestreRepository = $semestreRepository;
    }

    /**
     * @throws Exception
     */
    #[Route('/liste_csv', name: 'administration_etudiant_import_liste_csv')]
    public function listeCsv(
        Request $request,
        MyUpload $myUpload,
        EtudiantImport $etudiantImport
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        // récupérer les semestres existants du département
        $semestres = $this->semestreRepository->findByDepartement($this->getDepartement());
        // faire un tableau avec les code_element des semestres
        $tabSemestres = [];
        foreach ($semestres as $semestre) {
            $tabSemestres[$semestre->getCodeElement()] = $semestre;
        }
        // traitement de l'import
        $fichier = $myUpload->upload($request->files->get('fichierimportcsv'), 'temp');
        $etudiantImport->importFomCsv($fichier, $tabSemestres);

        return $this->redirectToRoute('administration_etudiant_import_liste_csv'); // page de synthèse ? ou nouvel import ?
    }
}
