<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/apc/ApcReferentielImportController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\superAdministration\apc;

use App\Classes\MyUpload;
use App\Classes\Structure\DiplomeImport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Repository\PpnRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administratif/apc/referentiel/import', name: 'sa_apc_referentiel_import_')]
class ApcReferentielImportController extends BaseController
{
    #[Route('/{diplome}', name: 'index', requirements: ['diplome' => '\d+'], methods: ['GET'])]
    public function index(Diplome $diplome): Response
    {
        return $this->render('super-administration/apc/referentiel/import/index.html.twig', [
            'diplome' => $diplome,
        ]);
    }

    #[Route('/{diplome}', name: 'import', requirements: ['diplome' => '\d+'], methods: ['POST'])]
    public function import(
        PpnRepository $ppnRepository,
        MyUpload $myUpload,
        DiplomeImport $diplomeImport,
        Request $request,
        Diplome $diplome
    ): Response {
        if ($request->isMethod('POST')) {
            $ppn = null;
            if (null !== $request->request->get('ppn')) {
                $ppn = $ppnRepository->find($request->request->get('ppn'));
            }

            if (null !== $ppn) {
                $fichier = $myUpload->upload($request->files->get('fichierXML'), 'temp/', ['xml']);
                $diplomeImport->import($diplome, $fichier, 'competences', $ppn);
                unlink($fichier);
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Maquette importée avec succès');
            } else {
                $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'Vous devez indiquer un PN pour l\'import du référentiel de compétences');

                return $this->redirectToRoute('sa_apc_referentiel_import_index', [
                    'diplome' => $diplome->getId(),
                ]);
            }
        }

        return $this->redirectToRoute('administration_apc_referentiel_index', [
            'diplome' => $diplome->getId(),
        ]);
    }
}
