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
            $filePath = $this->getParameter('kernel.project_dir').'/public/upload/rapport-stage/'.$stageRapport->getDocumentName();

            if (!is_file($filePath)) {
                throw $this->createNotFoundException('Fichier de rapport introuvable.');
            }

            // Return a BinaryFileResponse to force download
            return $this->file($filePath, $stageRapport->getDocumentName());
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

        $publicDir = $kernel->getProjectDir().'/public';
        $tempToken = date('YmdHis').'-'.uniqid('', true);
        $pdfDirRelative = 'upload/temp/pdf/'.$tempToken;
        $pdfDirRelativeForGenerator = $pdfDirRelative.'/';
        $pdfDir = $publicDir.'/'.$pdfDirRelative;
        $zipDir = $publicDir.'/upload/temp/zip';

        if (!is_dir($pdfDir) && !mkdir($pdfDir, 0775, true) && !is_dir($pdfDir)) {
            throw new \RuntimeException('Impossible de créer le dossier temporaire des PDFs.');
        }

        if (!is_dir($zipDir) && !mkdir($zipDir, 0775, true) && !is_dir($zipDir)) {
            throw new \RuntimeException('Impossible de créer le dossier temporaire des ZIP.');
        }

        $generatedFiles = [];
        $index = 1;
        $pdfService = $myPdf->pdf();

        foreach ($rapports as $rapport) {
            $nomRapport = $rapport->getTitreRapport() ?? 'rapport';
            $pdfBaseName = sprintf('rapport-%02d-%s-%d',
                $index,
                Tools::slug($nomRapport),
                $rapport->getId()
            );

            $rapportSourcePath = $this->resolveRapportSourcePath($rapport, $pdfDir, $httpClient);
            if (null === $rapportSourcePath) {
                ++$index;
                continue;
            }

            $pdfFileName = $pdfService::genereAndSavePdf('pdf/rapportPDF.html.twig', [
                'stageRapport' => $rapport,
                'includeAttachmentPage' => false,
            ], $pdfBaseName, $pdfDirRelativeForGenerator);

            $finalPdfPath = $this->resolveGeneratedPdfPath($publicDir, $pdfDir, $pdfFileName);
            $finalPdfName = basename($finalPdfPath);

            $isTemporarySourceFile = str_starts_with($rapportSourcePath, $pdfDir.'/rapport-source-');

            try {
                $mergedFileName = $this->mergeRapportPdfWithArchivePage(
                    $finalPdfPath,
                    $rapportSourcePath,
                    $pdfBaseName,
                    $pdfDir,
                    $httpClient
                );
            } finally {
                if ($isTemporarySourceFile && is_file($rapportSourcePath)) {
                    unlink($rapportSourcePath);
                }
            }

            if (is_file($finalPdfPath)) {
                unlink($finalPdfPath);
            }

            $finalPdfPath = $pdfDir.'/'.$mergedFileName;
            $finalPdfName = $mergedFileName;

            $generatedFiles[] = [
                'path' => $finalPdfPath,
                'name' => $finalPdfName,
            ];
            ++$index;
        }

        $zipFileName = sprintf('rapports-%s-%s.zip', $annee ?? 'all', date('YmdHis'));
        $zipPath = $zipDir.'/'.$zipFileName;
        $zip = new ZipArchive();

        if (true !== $zip->open($zipPath, ZipArchive::CREATE | ZipArchive::OVERWRITE)) {
            throw new \RuntimeException('Impossible de créer le fichier ZIP.');
        }

        $addedFilesCount = 0;
        foreach ($generatedFiles as $file) {
            if (is_file($file['path'])) {
                $zip->addFile($file['path'], $file['name']);
                ++$addedFilesCount;
            }
        }

        if (true !== $zip->close()) {
            throw new \RuntimeException('Impossible de finaliser le fichier ZIP.');
        }

        if (0 === $addedFilesCount || !is_file($zipPath)) {
            foreach ($generatedFiles as $file) {
                if (is_file($file['path'])) {
                    unlink($file['path']);
                }
            }

            if (is_dir($pdfDir)) {
                @rmdir($pdfDir);
            }

            throw $this->createNotFoundException('Aucun fichier PDF valide à intégrer dans l\'archive.');
        }

        foreach ($generatedFiles as $file) {
            if (is_file($file['path'])) {
                unlink($file['path']);
            }
        }

        if (is_dir($pdfDir)) {
            @rmdir($pdfDir);
        }

        $response = $this->file($zipPath, $zipFileName);
        $response->deleteFileAfterSend(true);

        return $response;
    }

    private function resolveRapportSourcePath(
        StageRapport $rapport,
        string $pdfDir,
        ClientInterface $httpClient
    ): ?string
    {
        try {
            $downloadResponse = $this->downloadRapport($rapport);
        } catch (\Throwable) {
            return null;
        }

        if ($downloadResponse instanceof BinaryFileResponse) {
            $sourcePath = $downloadResponse->getFile()->getPathname();

            return is_file($sourcePath) ? $sourcePath : null;
        }

        if ($downloadResponse instanceof RedirectResponse) {
            $linkPath = $this->downloadRapportSourceFromUrl($downloadResponse->getTargetUrl(), $rapport->getId(), $pdfDir, $httpClient);

            return is_file($linkPath ?? '') ? $linkPath : null;
        }

        return null;
    }

    private function downloadRapportSourceFromUrl(
        string $url,
        int $rapportId,
        string $pdfDir,
        ClientInterface $httpClient
    ): ?string
    {
        if ('' === trim($url)) {
            return null;
        }

        $url = trim($url);

        try {
            $response = $httpClient->sendRequest(new Psr7Request('GET', $url));
        } catch (\Throwable) {
            return null;
        }

        if ($response->getStatusCode() < 200 || $response->getStatusCode() >= 300) {
            return null;
        }

        $content = $response->getBody()->getContents();
        if ('' === $content) {
            return null;
        }

        $contentType = mb_strtolower($response->getHeaderLine('Content-Type'));
        $looksLikePdf = str_starts_with($content, '%PDF-');
        $isPdfMime = '' === $contentType
            || str_contains($contentType, 'application/pdf')
            || str_contains($contentType, 'application/octet-stream');

        if (!$looksLikePdf && !$isPdfMime) {
            return null;
        }

        $downloadedSourcePath = sprintf(
            '%s/rapport-source-%d-%s.pdf',
            $pdfDir,
            $rapportId,
            uniqid('', true)
        );

        if (false === file_put_contents($downloadedSourcePath, $content)) {
            return null;
        }

        return $downloadedSourcePath;
    }

    private function resolveGeneratedPdfPath(string $publicDir, string $pdfDir, string $pdfFileName): string
    {
        if (str_starts_with($pdfFileName, $publicDir.'/')) {
            return $pdfFileName;
        }

        if (str_starts_with($pdfFileName, '/upload/')) {
            return $publicDir.$pdfFileName;
        }

        if (str_starts_with($pdfFileName, 'upload/')) {
            return $publicDir.'/'.$pdfFileName;
        }

        return $pdfDir.'/'.$pdfFileName;
    }

    private function mergeRapportPdfWithArchivePage(
        string $archivePdfPath,
        string $rapportPdfPath,
        string $outputName,
        string $outputDir,
        ClientInterface $httpClient
    ): string
    {
        try {
            $request = Gotenberg::pdfEngines('http://localhost:3000')
                ->outputFilename($outputName)
                ->merge(
                    Stream::path($archivePdfPath),
                    Stream::path($rapportPdfPath)
                );

            return Gotenberg::save($request, $outputDir, $httpClient);
        } catch (\Throwable $e) {
            throw new \RuntimeException('Impossible d\'assembler le PDF d\'archivage avec le rapport source.', 0, $e);
        }
    }

}
