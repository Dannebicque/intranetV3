<?php

namespace App\Service;

use App\Entity\Evenement;
use Psr\Log\LoggerInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class QrCodeService
{
    public function __construct(
        private readonly UrlGeneratorInterface $urlGenerator,
        private readonly ?LoggerInterface $logger = null,
    ) {
    }

    /**
     * Génère un QRCode (PNG base64) pointant vers la page de détail de l'événement.
     * Retourne une data URI (data:image/png;base64,...) ou null en cas d'échec.
     */
    public function generateForEvenement(Evenement $evenement, int $size = 220): ?string
    {
        if (null === $evenement->getId()) {
            return null;
        }

        // Construire une clé obfusquée (base64 de l'id) et générer l'URL vers EmargementController
        $key = base64_encode((string) $evenement->getId());

        $eventUrl = $this->urlGenerator->generate(
            'app_emargement_qr',
            ['key' => $key],
            UrlGeneratorInterface::ABSOLUTE_URL
        );

        // Utilisation d'un service public fiable pour générer le PNG du QRCode.
        // Aucun paquet supplémentaire requis.
        $qrApi = 'https://api.qrserver.com/v1/create-qr-code/';
        $query = http_build_query([
            'size' => sprintf('%dx%d', $size, $size),
            'qzone' => 2, // marge
            'data' => $eventUrl,
        ], '', '&', PHP_QUERY_RFC3986);

        $qrUrl = $qrApi . '?' . $query;

        try {
            $context = stream_context_create([
                'http' => [
                    'timeout' => 5,
                ],
                'ssl' => [
                    'verify_peer' => true,
                    'verify_peer_name' => true,
                ],
            ]);
            $png = @file_get_contents($qrUrl, false, $context);
            if ($png === false || $png === '') {
                return null;
            }
            $b64 = base64_encode($png);
            return 'data:image/png;base64,' . $b64;
        } catch (\Throwable $e) {
            if ($this->logger) {
                $this->logger->warning('QR code generation failed', [
                    'exception' => $e->getMessage(),
                ]);
            }

            return null;
        }
    }
}
