<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Controller;

use App\Entity\Evenement;
use App\Repository\EtudiantEvenementRepository;
use App\Repository\EtudiantRepository;
use App\Repository\EvenementRepository;
use App\Service\GeolocationService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;

final class EmargementController extends AbstractController
{
    /**
     * Route utilisée par le QR code. La clé est maintenant un token signé HMAC (base64url) contenant id:expires:hmac
     */
    #[Route('/emargement/qr/{key}', name: 'app_emargement_qr', methods: ['GET'])]
    public function qrShow(string $key, Request $request, EvenementRepository $evenementRepository, EtudiantRepository $etudiantRepository, EtudiantEvenementRepository $etudiantEvenementRepository): Response
    {
        $id = $this->validateSignedKey($key);
        if (null === $id) {
            throw $this->createNotFoundException('Clé invalide');
        }

        $evenement = $evenementRepository->find($id);
        if (null === $evenement) {
            throw $this->createNotFoundException('Événement introuvable');
        }

        $etudiants = $etudiantRepository->findByEvenement($evenement->getId());
        // si le user fait partie des étudiants de l'événement, on affiche la page d'émargement
        // sinon, on affiche une page d'erreur (ou on peut aussi afficher la page d'émargement mais sans le bouton d'émargement)
        $user = $this->getUser();
        if (!$user) {
            $attendu = false;
            $userId = null;
        } else {
            $userId = $user->getId();
            $attendu = in_array($userId, array_map(fn($e) => $e->getId(), $etudiants));
        }

        $present = false;
        // récupérer le etudiantEvenement correspondant à l'étudiant connecté et à l'événement
        if ($attendu) {
            $etudiantEvenement = $etudiantEvenementRepository->findOneBy([
                'evenement' => $evenement->getId(),
                'etudiant' => $userId,
            ]);
            if ($etudiantEvenement) {
                $present = $etudiantEvenement->isPresent();
            }
        }

        return $this->render('emargement/show.html.twig', [
            'evenement' => $evenement,
            'attendu' => $attendu,
            'present' => $present,
            'key' => $key,
            'user' => $userId,
        ]);
    }

    #[Route('/emargement/submit/{key}/{etudiantId}', name: 'app_emargement_submit', methods: ['POST', 'GET'])]
    public function submit(
        string $key,
        int $etudiantId,
        Request $request,
        EvenementRepository $evenementRepository,
        EtudiantRepository $etudiantRepository,
        EtudiantEvenementRepository $etudiantEvenementRepository,
        GeolocationService $geoService
    )
    {
        $id = $this->validateSignedKey($key);
        if (null === $id) {
            throw $this->createNotFoundException('Clé invalide');
        }

        $evenement = $evenementRepository->find($id);
        if (null === $evenement) {
            throw $this->createNotFoundException('Événement introuvable');
        }

        $etudiant = $etudiantRepository->find($etudiantId);
        if (null === $etudiant) {
            throw $this->createNotFoundException('Étudiant introuvable');
        }

        // récupérer le etudiantEvenement correspondant à l'étudiant connecté et à l'événement
        $etudiantEvenement = $etudiantEvenementRepository->findOneBy([
            'evenement' => $evenement->getId(),
            'etudiant' => $etudiant->getId(),
        ]);
        if (null === $etudiantEvenement) {
            throw $this->createNotFoundException('Inscription à l\'événement introuvable');
        } elseif ($etudiantEvenement->isPresent()) {
            // Au lieu de retourner du JSON, ajouter un message flash et recharger la page d'émargement
            $this->addFlash('warning', 'Présence déjà enregistrée');
            return $this->redirectToRoute('app_emargement_qr', ['key' => $key]);
        }

        // Déterminer si la géolocalisation est requise : événement avec geoloc true ET une adresse renseignée
        $adresse = $evenement->getAdresse();
        $hasAdresse = false;
        if (is_array($adresse)) {
            $hasAdresse = count(array_filter($adresse)) > 0;
        } elseif (is_string($adresse)) {
            $hasAdresse = trim($adresse) !== '';
        }
        $requiresGeoloc = (bool) $evenement->isGeoloc() && $hasAdresse;

        // Si la géolocalisation n'est pas requise, on enregistre la présence directement
        if (!$requiresGeoloc) {
            $etudiantEvenement->setPresent(true);
            $etudiantEvenement->setDateSignature(new \DateTime());
            $etudiantEvenementRepository->save($etudiantEvenement, true);

            if ($request->isXmlHttpRequest()) {
                return $this->json(['message' => 'Présence enregistrée avec succès'], Response::HTTP_OK);
            }

            $this->addFlash('success', 'Présence enregistrée avec succès');
            return $this->redirectToRoute('app_emargement_qr', ['key' => $key]);
        }

        // --- Géolocalisation requise : lire le body JSON si présent (fetch depuis le client)
        $data = null;
        $contentType = $request->headers->get('Content-Type');
        if (str_contains((string)$contentType, 'application/json')) {
            $content = $request->getContent();
            $data = json_decode($content, true);
        }

        // Si pas de coords fournis -> refuser l'émargement
        if (!is_array($data) || !isset($data['lat']) || !isset($data['lon'])) {
            // AJAX request ? => retourner JSON
            if ($request->isXmlHttpRequest()) {
                return $this->json(['message' => 'Géolocalisation requise pour valider la présence.'], Response::HTTP_BAD_REQUEST);
            }
            // sinon message flash
            $this->addFlash('error', 'Géolocalisation requise pour valider la présence.');
            return $this->redirectToRoute('app_emargement_qr', ['key' => $key]);
        }

        $lat = (float) $data['lat'];
        $lon = (float) $data['lon'];

        // Géocoder l'adresse de l'événement (l'entité conserve l'adresse en base)
        $eventCoords = null;
        if (is_array($adresse) && count($adresse) > 0) {
            // Si adresse est un tableau (structure existante), on la transforme en string
            if (isset($adresse['formatted'])) {
                $addrString = $adresse['formatted'];
            } else {
                // concatener les éléments si nécessaire
                $addrString = implode(', ', array_filter($adresse));
            }
            $eventCoords = $geoService->geocodeAddress($addrString);
        } elseif (is_string($adresse) && trim($adresse) !== '') {
            $eventCoords = $geoService->geocodeAddress($adresse);
        }

        if (null === $eventCoords) {
            // impossible de géocoder l'adresse -> refuser l'émargement par sécurité
            if ($request->isXmlHttpRequest()) {
                return $this->json(['message' => 'Impossible de déterminer la position de l\'événement.'], Response::HTTP_SERVICE_UNAVAILABLE);
            }
            $this->addFlash('error', 'Impossible de déterminer la position de l\'événement.');
            return $this->redirectToRoute('app_emargement_qr', ['key' => $key]);
        }

        // calculer la distance (Haversine)
        $distance = $this->haversineDistance($lat, $lon, $eventCoords['lat'], $eventCoords['lon']);
        $thresholdMeters = 200; // seuil d'acceptation

        if ($distance > $thresholdMeters) {
            if ($request->isXmlHttpRequest()) {
                return $this->json(['message' => sprintf('Vous êtes trop éloigné (%.0f m). Présence non validée.', $distance)], Response::HTTP_FORBIDDEN);
            }
            $this->addFlash('error', sprintf('Vous êtes trop éloigné (%.0f m). Présence non validée.', $distance));
            return $this->redirectToRoute('app_emargement_qr', ['key' => $key]);
        }

        // Si on arrive ici, tout est ok : on enregistre la présence
        $etudiantEvenement->setPresent(true);
        $etudiantEvenement->setDateSignature(new \DateTime());
        $etudiantEvenementRepository->save($etudiantEvenement, true);

        if ($request->isXmlHttpRequest()) {
            return $this->json(['message' => 'Présence enregistrée avec succès'], Response::HTTP_OK);
        }

        $this->addFlash('success', 'Présence enregistrée avec succès');
        return $this->redirectToRoute('app_emargement_qr', ['key' => $key]);
    }

    private function validateSignedKey(string $key): ?int
    {
        // Première tentative : token signé (base64url) attendu : id:expires:hmac
        $decoded = strtr($key, '-_', '+/');
        $padding = strlen($decoded) % 4;
        if ($padding > 0) {
            $decoded .= str_repeat('=', 4 - $padding);
        }

        $token = base64_decode($decoded, true);
        if ($token !== false) {
            $parts = explode(':', $token);
            if (count($parts) === 3) {
                [$idStr, $expiresStr, $hmac] = $parts;
                if (ctype_digit($idStr) && ctype_digit($expiresStr)) {
                    $id = (int) $idStr;
                    $expires = (int) $expiresStr;
                    if (time() <= $expires) {
                        $secret = getenv('APP_SECRET') ?: ($_ENV['APP_SECRET'] ?? '');
                        if ($secret !== '') {
                            $expected = hash_hmac('sha256', $idStr . ':' . $expiresStr, $secret);
                            if (hash_equals($expected, $hmac)) {
                                return $id;
                            }
                        }
                    }
                }
            }
        }

        // Retour arrière : accepter l'ancien format base64(id) pour compatibilité ascendante
        $legacy = base64_decode($key, true);
        if ($legacy !== false && ctype_digit($legacy)) {
            return (int) $legacy;
        }

        return null;
    }

    private function haversineDistance(float $lat1, float $lon1, float $lat2, float $lon2): float
    {
        $earthRadius = 6371000; // mètres
        $dLat = deg2rad($lat2 - $lat1);
        $dLon = deg2rad($lon2 - $lon1);
        $a = sin($dLat/2) * sin($dLat/2) + cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * sin($dLon/2) * sin($dLon/2);
        $c = 2 * atan2(sqrt($a), sqrt(1-$a));
        return $earthRadius * $c;
    }

    #[Route('/', name: 'app_evenement_confirm_presence', methods: ['GET'])]
    public function confirmPresence(int $etudiantEvenementId, EtudiantEvenementRepository $etudiantEvenementRepository): Response
    {
        $etudiantEvenement = $etudiantEvenementRepository->findOneBy(['id' => $etudiantEvenementId]);

        if (!$etudiantEvenement) {
            throw $this->createNotFoundException('Inscription à l\'événement introuvable');
        } elseif ($etudiantEvenement->isPresent()) {
            $this->addFlash('warning', 'Présence déjà enregistrée');
            return $this->redirectToRoute('app_emargement_qr', ['key' => '']);
        } else {
            $etudiantEvenement->setPresent(true);
            $etudiantEvenement->setDateSignature(new \DateTime());
            $etudiantEvenementRepository->save($etudiantEvenement, true);

            $this->addFlash('success', 'Présence enregistrée avec succès');
            return $this->redirectToRoute('app_emargement_qr', ['key' => '']);
        }
    }
}
