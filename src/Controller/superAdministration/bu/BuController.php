<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/bu/BuController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/01/2026 10:38
 */

namespace App\Controller\superAdministration\bu;

use App\Controller\BaseController;
use App\Entity\StageRapport;
use App\Table\BuRapportTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administratif/bu')]
class BuController extends BaseController
{
    // Autorise GET et POST car le composant de table peut faire des requêtes POST (callbacks / actions)
    #[Route(path: '/', name: 'sa_bu_index', methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        $table = $this->createTable(BuRapportTableType::class, [
            'type' => 'administratif'
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('super-administration/bu/index.html.twig', [
            'table' => $table,
        ]);
    }

    #[Route(path: '/stage/show/rapport/{id}', name: 'app_bu_stage_show_rapport')]
    public function showRapport(StageRapport $stageRapport): Response
    {
        return $this->render('stage/rapport_show.html.twig', [
            'stageRapport' => $stageRapport,
            'type' => 'bu'
        ]);
    }

    #[Route(path: '/stage/download/rapport/{id}', name: 'app_bu_stage_download_rapport')]
    public function downloadRapport(StageRapport $stageRapport): Response
    {
        // If an external link is provided, redirect to it
        if (null !== $stageRapport->getLienFichier()) {
            return $this->redirect($stageRapport->getLienFichier());
        }

        // If a stored document name exists, serve the file from public/upload/rapport-stage
        if (null !== $stageRapport->getDocumentName()) {
            $filePath = $this->getParameter('kernel.project_dir').'/public/upload/rapport-stage/'.$stageRapport->getDocumentName();

            if (!is_file($filePath)) {
                throw $this->createNotFoundException('Fichier de rapport introuvable.');
            }

            // Return a BinaryFileResponse to force download
            return $this->file($filePath, $stageRapport->getDocumentName());
        }

        throw $this->createNotFoundException('Aucun fichier de rapport disponible.');
    }

}
