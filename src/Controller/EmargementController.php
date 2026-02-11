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
    public function qrShow(string $key, Request $request, EvenementRepository $evenementRepository): Response
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

        // Pour l'instant on affiche l'id et le libellé; plus tard on pourra afficher la page d'émargement
        return $this->render('emargement/show.html.twig', [
            'evenement' => $evenement,
        ]);
    }
}
