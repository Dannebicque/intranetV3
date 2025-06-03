<?php
/*
 * Copyright (c) 2025. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/StageApiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/06/2025 14:32
 */

declare(strict_types=1);

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Repository\PersonnelRepository;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class StageApiController extends BaseController
{
    #[Route('/api/generate-token', name: 'api_generate_token')]
    public function generateToken(
        PersonnelRepository $personnelRepository,
        Request             $request): Response
    {
        $log = $request->request->get('username');
        $user = $personnelRepository->findOneBy(['username' => $log]);
        $token = md5(bin2hex(random_bytes(16)) . md5($log));
        // Stockez le token dans la base de données ou un cache temporaire
        if (null === $user) {
            return $this->json(['error' => 'Utilisateur non trouvé'], Response::HTTP_NOT_FOUND);
        }
        //ajouter le token à l'utilisateur dans la base de données dans le champ configuration qui est un tableau json

        $config = $user->getConfiguration();
        if (!is_array($config)) {
            $config = [];
        }
        $config['api_token'] = $token;
        $user->setConfiguration($config);
        $personnelRepository->save($user);

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
        $token = $request->headers->get('Authorization');
        $login = $request->headers->get('X-Username');

        if (null === $token || null === $login) {
            return $this->json(['error' => 'Token ou login manquant'], Response::HTTP_UNAUTHORIZED);
        }

        $user = $personnelRepository->findOneBy(['username' => $login]);
        if (null === $user) {
            return $this->json(['error' => 'Utilisateur non trouvé'], Response::HTTP_NOT_FOUND);
        }

        $config = $user->getConfiguration();
        if (!is_array($config) || !isset($config['api_token']) || $config['api_token'] !== $token) {
            return $this->json(['error' => 'Token invalide'], Response::HTTP_UNAUTHORIZED);
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
}
