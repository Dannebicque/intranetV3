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
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;

final class EmargementController extends AbstractController
{
    /**
     * Route utilisée par le QR code. La clé est une base64 de l'ID de l'événement.
     */
    #[Route('/emargement/qr/{key}', name: 'app_emargement_qr', methods: ['GET'])]
    public function qrShow(string $key, Request $request, EvenementRepository $evenementRepository, EtudiantRepository $etudiantRepository, EtudiantEvenementRepository $etudiantEvenementRepository): Response
    {
        $decoded = base64_decode($key, true);
        if (false === $decoded || !ctype_digit($decoded)) {
            throw $this->createNotFoundException('Clé invalide');
        }

        $id = (int) $decoded;
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
        EtudiantEvenementRepository $etudiantEvenementRepository
    )
    {
        $decoded = base64_decode($key, true);
        if (false === $decoded || !ctype_digit($decoded)) {
            throw $this->createNotFoundException('Clé invalide');
        }

        $id = (int) $decoded;
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
        } else {
            $etudiantEvenement->setPresent(true);
            $etudiantEvenementRepository->save($etudiantEvenement, true);
        }

        // Après enregistrement, ajouter un message flash et recharger la page d'émargement
        $this->addFlash('success', 'Présence enregistrée avec succès');
        return $this->redirectToRoute('app_emargement_qr', ['key' => $key]);
    }
}
