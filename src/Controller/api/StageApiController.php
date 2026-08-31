<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/StageApiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/08/2026 09:37
 */

declare(strict_types=1);

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\Personnel;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Repository\PersonnelRepository;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class StageApiController extends BaseController
{
    #[Route('/api/generate-token', name: 'api_generate_token', methods: ['POST'])]
    public function generateToken(
        PersonnelRepository $personnelRepository,
        Request             $request): Response
    {
        $currentUser = $this->getUser();
        if (!$currentUser instanceof Personnel) {
            throw $this->createAccessDeniedException('Seuls les personnels peuvent générer un jeton API.');
        }

        $username = trim((string)$request->request->get('username', $currentUser->getUserIdentifier()));
        if ('' === $username) {
            return $this->json(['error' => 'Username manquant'], Response::HTTP_BAD_REQUEST);
        }

        if ($username !== $currentUser->getUserIdentifier()) {
            throw $this->createAccessDeniedException('Vous ne pouvez générer un jeton que pour votre propre compte.');
        }

        $token = bin2hex(random_bytes(32));

        $config = $currentUser->getConfiguration();
        if (!is_array($config)) {
            $config = [];
        }
        $config['api_token'] = hash('sha256', $token);
        $currentUser->setConfiguration($config);
        $personnelRepository->save($currentUser);

        return $this->json(['token' => $token]);
    }

    #[Route('/api/stage-periode/{uuid}', name: 'api_stage_periode')]
    public function stagePeriode(
        PersonnelRepository $personnelRepository,
        Request             $request,
        #[MapEntity(mapping: ['uuid' => 'uuid'])]
        StagePeriode        $stagePeriode
    ): Response
    {
        // vérification du token dans la requête et sa correspondance avec l'utilisateur
        $token = $this->extractApiToken($request->headers->get('Authorization'));
        $login = trim((string)$request->headers->get('X-Username'));

        if (null === $token || '' === $login) {
            return $this->json(['error' => 'Token ou login manquant'], Response::HTTP_UNAUTHORIZED);
        }

        $user = $personnelRepository->findOneBy(['username' => $login]);
        if (null === $user) {
            return $this->json(['error' => 'Utilisateur non trouvé'], Response::HTTP_NOT_FOUND);
        }

        $config = $user->getConfiguration();
        $storedToken = is_array($config) ? ($config['api_token'] ?? null) : null;
        if (!is_string($storedToken) || !$this->isStageApiTokenValid($storedToken, $token)) {
            return $this->json(['error' => 'Token invalide'], Response::HTTP_UNAUTHORIZED);
        }

        if (64 !== strlen($storedToken)) {
            $config['api_token'] = hash('sha256', $token);
            $user->setConfiguration($config);
            $personnelRepository->save($user);
        }


        $etudiants = $stagePeriode->getStageEtudiants();
        $tJson = [];
        /** @var StageEtudiant $etudiant */
        foreach ($etudiants as $etudiant) {
            $etu = $etudiant->getEtudiant();
            $tJson[] = [
                'uuid' => $etu->getUuid(),
                'uuidStageEtudiant' => $etudiant->getUuid(),
                'nom' => $etu->getNom(),
                'prenom' => $etu->getPrenom(),
                'email' => $etu->getMailUniv(),
                'dateDebutStage' => $etudiant->getDateDebutStage()?->format('Y-m-d'),
                'dateFinStage' => $etudiant->getDateFinStage()?->format('Y-m-d'),
                'tuteurUniversitaire' => $etudiant->getTuteurUniversitaire()?->getdisplay() ?? '',
                'entreprise' => $etudiant->getEntreprise()?->getArray() ?? '',
                'entrepriseAdresse' => $etudiant->getEntreprise()?->getAdresse()?->getArray() ?? '',
                'sujetStage' => $etudiant->getSujetStage() ?? '',
                'etatStage' => $etudiant->getEtatStage() ?? '',
                'activites' => $etudiant->getActivites() ?? '',
                'amenagementStage' => $etudiant->getAmenagementStage() ?? '',
                'gratification' => $etudiant->getGratification() ? 'Oui' : 'Non',
                'gratificationMontant' => $etudiant->getGratificationMontant() ?? '',
                'gratificationPeriode' => $etudiant->getGratificationPeriode() ?? '',
                'avantages' => $etudiant->getAvantages() ?? '',
                'dureeHebdomadaire' => $etudiant->getDureeHebdomadaire() ?? '',
                'dureeJoursStage' => $etudiant->getDureeJoursStage() ?? '',
                'periodesInterruptions' => $etudiant->getPeriodesInterruptions(),
            ];
        }

        return $this->json([
            'uuid' => $stagePeriode->getUuid(),
            'intitule' => $stagePeriode->getLibelle(),
            'semestre' => $stagePeriode->getSemestre()?->getLibelle(),
            'etudiants' => $tJson,
        ]);
    }

    private function extractApiToken(?string $authorizationHeader): ?string
    {
        if (null === $authorizationHeader) {
            return null;
        }

        $authorizationHeader = trim($authorizationHeader);
        if ('' === $authorizationHeader) {
            return null;
        }

        if (str_starts_with($authorizationHeader, 'Bearer ')) {
            $authorizationHeader = substr($authorizationHeader, 7);
        }

        $authorizationHeader = trim($authorizationHeader);

        return '' === $authorizationHeader ? null : $authorizationHeader;
    }

    private function isStageApiTokenValid(string $storedToken, string $providedToken): bool
    {
        if (64 === strlen($storedToken)) {
            return hash_equals($storedToken, hash('sha256', $providedToken));
        }

        return hash_equals($storedToken, $providedToken);
    }
}
