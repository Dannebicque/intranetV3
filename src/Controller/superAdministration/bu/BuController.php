<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/bu/BuController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/01/2026 10:38
 */

namespace App\Controller\superAdministration\bu;

use App\Classes\Pdf\PdfManager;
use App\Controller\BaseController;
use App\Entity\StageRapport;
use App\Repository\AnneeRepository;
use App\Repository\DepartementRepository;
use App\Repository\StageRapportRepository;
use App\Table\BuRapportTableType;
use App\Utils\Tools;
use GuzzleHttp\Psr7\Request as Psr7Request;
use Gotenberg\Gotenberg;
use Gotenberg\Stream;
use Psr\Http\Client\ClientInterface;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Attribute\Route;
use ZipArchive;

#[Route(path: '/administratif/bu')]
class BuController extends BaseController
{
    // Autorise GET et POST car le composant de table peut faire des requêtes POST (callbacks / actions)
    #[Route(path: '/', name: 'sa_bu_index', methods: ['GET', 'POST'])]
    public function index(Request $request, DepartementRepository $departementRepository, AnneeRepository $anneeRepository): Response
    {
        $departement = null;
        $annee = null;

        [$departementId, $anneeId] = $this->resolveFilterIds($request);

        if (null !== $departementId && '' !== $departementId) {
            $departement = $departementRepository->find($departementId);
        }

        if (null !== $anneeId && '' !== $anneeId) {
            $annee = $anneeRepository->find($anneeId);
        }

        $table = $this->createTable(BuRapportTableType::class, [
            'type' => 'administratif',
            'departement' => $departement,
            'annee' => $annee,
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('super-administration/bu/index.html.twig', [
            'table' => $table,
            'anneeId' => $anneeId,
        ]);
    }

    private function resolveFilterIds(Request $request): array
    {
        $queryFilter = $request->query->all('filter');
        $requestFilter = $request->request->all('filter');

        $departementId = array_key_exists('departement', $requestFilter) ? $requestFilter['departement'] : ($queryFilter['departement'] ?? null);
        $anneeId = array_key_exists('annee', $requestFilter) ? $requestFilter['annee'] : ($queryFilter['annee'] ?? null);

        if ($request->isMethod('POST')) {
            try {
                $payload = json_decode($request->getContent(), true, 512, JSON_THROW_ON_ERROR);
                if (!array_key_exists('departement', $requestFilter) && isset($payload['filter']) && is_array($payload['filter']) && array_key_exists('departement', $payload['filter'])) {
                    $departementId = $payload['filter']['departement'];
                }
                if (!array_key_exists('annee', $requestFilter) && isset($payload['filter']) && is_array($payload['filter']) && array_key_exists('annee', $payload['filter'])) {
                    $anneeId = $payload['filter']['annee'];
                }
            } catch (\JsonException) {
            }
        }

        return [$departementId, $anneeId];
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
            $filePath = $this->resolveStoredRapportFilePath($stageRapport->getDocumentName());

            if (null === $filePath || !is_file($filePath)) {
                throw $this->createNotFoundException('Fichier de rapport introuvable.');
            }

            // Return a BinaryFileResponse to force download
            return $this->file($filePath, basename($filePath));
        }

        throw $this->createNotFoundException('Aucun fichier de rapport disponible.');
    }

    #[Route(path: '/stage/rapport/download/{annee}', name: 'app_bu_stage_rapport_download_all', methods: 'GET')]
    public function downloadAllRapportsByAnnee(
        ?int $annee,
        StageRapportRepository $stageRapportRepository,
        PdfManager $myPdf,
        KernelInterface $kernel,
        ClientInterface $httpClient
    ): Response
    {
        $rapports = $stageRapportRepository->findByAnneeNonConfidentiel($annee);

        if ([] === $rapports) {
            throw $this->createNotFoundException('Aucun rapport non confidentiel trouvé pour cette année.');
        }

        $tempDirectory = $kernel->getProjectDir().'/var/tmp';
        Tools::checkDirectoryExist($tempDirectory);

        $anneeLabel = null === $annee ? 'inconnue' : (string)$annee;
        $zipDownloadName = 'rapports-stage-'.$anneeLabel.'.zip';
        $zipPath = $tempDirectory.'/'.Tools::FileName('rapports-stage-'.$anneeLabel.'-'.date('YmdHis'), 150).'.zip';

        @unlink($zipPath);

        $zip = new ZipArchive();
        if (true !== $zip->open($zipPath, ZipArchive::CREATE | ZipArchive::OVERWRITE)) {
            throw new \RuntimeException('Impossible de créer l’archive ZIP des rapports.');
        }

        $addedFiles = 0;
        foreach ($rapports as $stageRapport) {
            $rapportPdfContent = $this->getRapportPdfContent($stageRapport, $httpClient);
            if (null === $rapportPdfContent) {
                continue;
            }

            try {
                $archivagePdfResponse = $myPdf->pdf()::generePdf(
                    'pdf/rapportPDF.html.twig',
                    ['stageRapport' => $stageRapport],
                    'rapport-archivage-'.$stageRapport->getId()
                );
            } catch (\Throwable) {
                continue;
            }

            $archivagePdfContent = $archivagePdfResponse->getContent();
            if (false === $archivagePdfContent || '' === $archivagePdfContent) {
                continue;
            }

            try {
                $mergeRequest = Gotenberg::pdfEngines('http://localhost:3000')->merge(
                    Stream::string('rapport.pdf', $rapportPdfContent),
                    Stream::string('informations-archivage.pdf', $archivagePdfContent)
                );
                $mergedResponse = Gotenberg::send($mergeRequest, $httpClient);
                $mergedPdfContent = $mergedResponse->getBody()->getContents();
            } catch (\Throwable) {
                continue;
            }

            if ('' === $mergedPdfContent) {
                continue;
            }

            if (false !== $zip->addFromString($this->buildRapportArchiveFileName($stageRapport), $mergedPdfContent)) {
                ++$addedFiles;
            }
        }

        $zip->close();

        if (0 === $addedFiles) {
            @unlink($zipPath);
            throw $this->createNotFoundException('Aucun rapport PDF exploitable pour créer l’archive.');
        }

        $response = new BinaryFileResponse($zipPath);
        $response->setContentDisposition('attachment', $zipDownloadName);
        $response->deleteFileAfterSend(true);

        return $response;
    }

    private function getRapportPdfContent(StageRapport $stageRapport, ClientInterface $httpClient): ?string
    {
        if (null !== $stageRapport->getLienFichier()) {
            try {
                $request = new Psr7Request('GET', $stageRapport->getLienFichier());
                $response = $httpClient->sendRequest($request);

                if ($response->getStatusCode() >= 200 && $response->getStatusCode() < 300) {
                    $content = $response->getBody()->getContents();

                    return '' === $content ? null : $content;
                }
            } catch (\Throwable) {
                return null;
            }

            return null;
        }

        if (null !== $stageRapport->getDocumentName()) {
            $filePath = $this->resolveStoredRapportFilePath($stageRapport->getDocumentName());

            if (null === $filePath || !is_file($filePath)) {
                return null;
            }

            $content = file_get_contents($filePath);

            if (false === $content || '' === $content) {
                return null;
            }

            return $content;
        }

        return null;
    }

    private function buildRapportArchiveFileName(StageRapport $stageRapport): string
    {
        $stageEtudiant = $stageRapport->getStageEtudiant();
        $etudiant = $stageEtudiant?->getEtudiant();
        $baseName = trim(
            ($etudiant?->getNom() ?? '').' '.
            ($etudiant?->getPrenom() ?? '').' '.
            ($stageRapport->getTitreRapport() ?? '')
        );

        if ('' === $baseName) {
            $baseName = 'rapport-stage-'.$stageRapport->getId();
        }

        return $stageRapport->getId().'_'.Tools::FileName($baseName, 180).'.pdf';
    }

    private function resolveStoredRapportFilePath(?string $documentName): ?string
    {
        if (null === $documentName || '' === trim($documentName)) {
            return null;
        }

        $publicDir = $this->getParameter('kernel.project_dir').'/public';
        $documentName = trim($documentName);
        $decodedDocumentName = rawurldecode($documentName);
        $candidates = [];

        foreach (array_unique([$documentName, $decodedDocumentName]) as $candidateDocumentName) {
            if (str_starts_with($candidateDocumentName, $publicDir.'/')) {
                $candidates[] = $candidateDocumentName;
            } elseif (str_starts_with($candidateDocumentName, '/upload/')) {
                $candidates[] = $publicDir.$candidateDocumentName;
            } elseif (str_starts_with($candidateDocumentName, 'upload/')) {
                $candidates[] = $publicDir.'/'.$candidateDocumentName;
            }

            $candidates[] = $publicDir.'/upload/rapport-stage/'.$candidateDocumentName;
            $candidates[] = $publicDir.'/upload/rapport-stage/'.basename($candidateDocumentName);
        }

        foreach (array_unique($candidates) as $candidate) {
            if (is_file($candidate)) {
                return $candidate;
            }
        }

        return null;
    }
}
