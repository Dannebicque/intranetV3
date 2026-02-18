<?php

namespace App\Service;

use App\Entity\Evenement;
use Psr\Log\LoggerInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use BaconQrCode\Renderer\ImageRenderer;
use BaconQrCode\Renderer\RendererStyle\RendererStyle;
use BaconQrCode\Writer;
use BaconQrCode\Renderer\Image\ImagickImageBackEnd;
use BaconQrCode\Renderer\Image\SvgImageBackEnd;

class QrCodeService
{
    private const KEY_TTL = 86400; // 24 heures

    public function __construct(
        private readonly UrlGeneratorInterface $urlGenerator,
        private readonly ?LoggerInterface $logger = null,
    ) {
    }

    /**
     * Génère un QRCode (PNG ou SVG base64) pointant vers la page de détail de l'événement.
     * Retourne une data URI (data:image/png;base64,... ou data:image/svg+xml;base64,...) ou null en cas d'échec.
     */
    public function generateForEvenement(Evenement $evenement, int $size = 220): ?string
    {
        if (null === $evenement->getId()) {
            return null;
        }

        // Construire une clé signée HMAC et générer l'URL vers EmargementController
        $key = $this->createSignedKey((int) $evenement->getId());

        $eventUrl = $this->urlGenerator->generate(
            'app_emargement_qr',
            ['key' => $key],
            UrlGeneratorInterface::ABSOLUTE_URL
        );

        // Génération locale du PNG/SVG du QRCode avec BaconQrCode (version 3.x)
        try {
            // Choisir le backend d'image : Imagick si disponible (retourne du PNG), sinon SVG
            if (class_exists(\Imagick::class)) {
                $imageBackEnd = new ImagickImageBackEnd('png', 100);
                $mime = 'image/png';
            } else {
                $imageBackEnd = new SvgImageBackEnd();
                $mime = 'image/svg+xml';
            }

            $renderer = new ImageRenderer(
                new RendererStyle($size),
                $imageBackEnd
            );
            $writer = new Writer($renderer);

            $blob = $writer->writeString($eventUrl);

            if ($blob === null || $blob === '') {
                return null;
            }

            // Limite de taille (sécurité) : refus si trop grand (garde pour défense en profondeur)
            if (strlen($blob) > 2000000) { // 2MB
                if ($this->logger) {
                    $this->logger->warning('QR code generated image too large', [
                        'size' => strlen($blob),
                    ]);
                }
                return null;
            }

            $b64 = base64_encode($blob);
            return 'data:' . $mime . ';base64,' . $b64;
        } catch (\Throwable $e) {
            if ($this->logger) {
                $this->logger->warning('QR code generation failed', [
                    'exception' => $e->getMessage(),
                ]);
            }

            return null;
        }
    }

    private function createSignedKey(int $id): string
    {
        $expires = time() + self::KEY_TTL;
        $data = $id . ':' . $expires;
        $secret = $this->getSecret() ?? '';
        $hmac = hash_hmac('sha256', $data, $secret);
        $token = $data . ':' . $hmac;

        return $this->base64UrlEncode($token);
    }

    private function base64UrlEncode(string $data): string
    {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }

    private function getSecret(): ?string
    {
        // Try environment APP_SECRET (Symfony usually exposes it)
        $secret = getenv('APP_SECRET');
        if ($secret !== false && $secret !== '') {
            return $secret;
        }
        if (isset($_ENV['APP_SECRET']) && $_ENV['APP_SECRET'] !== '') {
            return $_ENV['APP_SECRET'];
        }

        if ($this->logger) {
            $this->logger->warning('APP_SECRET not found; using empty secret for QR key signing (insecure)');
        }

        return null;
    }
}
