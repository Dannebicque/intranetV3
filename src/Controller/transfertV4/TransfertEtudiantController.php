<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/transfertV4/TransfertEtudiantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/12/2024 08:24
 */

namespace App\Controller\transfertV4;

use App\Repository\EtudiantRepository;
use App\Repository\ScolariteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/transfert')]
class TransfertEtudiantController extends AbstractController
{
    /**
     * @param EtudiantRepository $etudiantRepository
     * @param ScolariteRepository $scolariteRepository
     * @param int $id
     * @return Response
     */
    #[Route('/etudiant/{id}', name: 'api_transfert_etudiant', methods: ['GET', 'POST'])]
public function getScolaritesEtudiant(
    EtudiantRepository  $etudiantRepository,
    ScolariteRepository $scolariteRepository,
    int                 $id
): Response
{
    $etudiant = $etudiantRepository->find($id);
    $tabScolarites = [];

    if ($etudiant) {
        $scolarites = $scolariteRepository->findBy(['etudiant' => $etudiant]);
        $anneeUniversitaire = $etudiant->getAnneeUniversitaire();
        $scolaritesParAnnee = [];

        // Trier les scolarités par année universitaire
        usort($scolarites, function ($a, $b) {
            return $a->getAnneeUniversitaire()?->getId() <=> $b->getAnneeUniversitaire()?->getId();
        });

        $ordre = 1;
        // Grouper les scolarités par année universitaire
        foreach ($scolarites as $scolarite) {
            $anneeId = $scolarite->getAnneeUniversitaire()?->getId();
            if (!isset($scolaritesParAnnee[$anneeId])) {
                $scolaritesParAnnee[$anneeId] = [
                    'annee' => $anneeId,
                    'semestres' => [],
                    'ordre' => $ordre++,
                    'bilan' => [
                        'moyenne' => 0,
                        'nbAbsences' => 0,
                        'moyennesMatieres' => [],
                        'moyennesUes' => []
                    ]
                ];
            }

            // Ajouter les informations du semestre
            $scolaritesParAnnee[$anneeId]['semestres'][] = [
                'id' => $scolarite->getSemestre()?->getId(),
                'decision' => $scolarite->getDecision(),
                'proposition' => $scolarite->getProposition(),
                'moyenne' => $scolarite->getMoyenne(),
                'nbAbsences' => $scolarite->getNbAbsences(),
                'commentaire' => $scolarite->getCommentaire(),
                'moyennesMatieres' => $scolarite->getMoyennesMatieres(),
                'moyennesUes' => $scolarite->getMoyennesUes()
            ];

            // Mettre à jour le bilan
            $scolaritesParAnnee[$anneeId]['bilan']['moyenne'] += $scolarite->getMoyenne() ?? 0;
            $scolaritesParAnnee[$anneeId]['bilan']['nbAbsences'] += $scolarite->getNbAbsences() ?? 0;
            $scolaritesParAnnee[$anneeId]['bilan']['moyennesMatieres'] = array_merge(
                $scolaritesParAnnee[$anneeId]['bilan']['moyennesMatieres'],
                $scolarite->getMoyennesMatieres() ?? []
            );
            $scolaritesParAnnee[$anneeId]['bilan']['moyennesUes'] = array_merge(
                $scolaritesParAnnee[$anneeId]['bilan']['moyennesUes'],
                $scolarite->getMoyennesUes() ?? []
            );
        }

        // Finaliser les bilans
        foreach ($scolaritesParAnnee as $anneeId => $data) {
            $nbSemestres = count($data['semestres']);
            if ($nbSemestres > 0) {
                $data['bilan']['moyenne'] = $data['bilan']['moyenne'] / $nbSemestres;
            }
            $tabScolarites[] = $data;
        }

        // Si l'étudiant n'a pas de scolarité sur l'année universitaire actuelle, on l'ajoute
        if (!isset($scolaritesParAnnee[$anneeUniversitaire?->getId()])) {
            $tabScolarites[] = [
                'annee' => $anneeUniversitaire?->getId(),
                'semestres' => [],
                'bilan' => [
                    'moyenne' => 0,
                    'nbAbsences' => 0,
                    'moyennesMatieres' => [],
                    'moyennesUes' => []
                ]
            ];

            // Ajouter les semestres
                $tabScolarites[count($tabScolarites) - 1]['semestres'][] = [
                    'id' => $etudiant->getSemestre()?->getId(),
                    'decision' => null,
                    'proposition' => null,
                    'moyenne' => 0,
                    'nbAbsences' => 0,
                    'commentaire' => '',
                    'moyennesMatieres' => [],
                    'moyennesUes' => []
                ];
        }

        return $this->json($tabScolarites);
    }

    return $this->json([]);
}
}
