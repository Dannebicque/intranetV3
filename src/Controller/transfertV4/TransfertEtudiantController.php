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
            // si une scolarité existe sur l'année universitaire en cours on prend, sinon on en ajoute une
            // on récupere les autres scolarités
            $scolarites = $scolariteRepository->findBy(['etudiant' => $etudiant]);
            $anneeUniversitaire = $etudiant->getAnneeUniversitaire();
            $scolEnCours = false;
            $ordre = 0;
            foreach ($scolarites as $scolarite) {
                if ($scolarite->getAnneeUniversitaire() === $anneeUniversitaire) {
                    $scolEnCours = true;
                }
                $tabScolarites[] = [
                    'id' => $scolarite->getId(),
                    'annee' => $scolarite->getAnneeUniversitaire()?->getId(),
                    'semestre' => $scolarite->getSemestre()?->getId(),
                    'ordre' => $scolarite->getOrdre(),
                    'decision' => $scolarite->getDecision(),
                    'proposition' => $scolarite->getProposition(),
                    'moyenne' => $scolarite->getMoyenne(),
                    'nbAbsences' => $scolarite->getNbAbsences(),
                    'commentaire' => $scolarite->getCommentaire(),
                    'diffuse' => $scolarite->getDiffuse(),
                    'moyennesMatieres' => $scolarite->getMoyennesMatieres(),
                    'moyennesUes' => $scolarite->getMoyennesUes(),
                    'departement' => $etudiant->getDepartement(),
                    'groupes' => $etudiant->getGroupes()
                ];
                $ordre = max($ordre, $scolarite->getOrdre());
            }

            if ($scolEnCours === false) {
                //on ajoute la scolarité pour l'année courante
                $tabScolarites[] = [
                    'id' => null,
                    'annee' => $anneeUniversitaire?->getId(),
                    'semestre' => $etudiant->getSemestre()?->getId(),
                    'ordre' => $ordre + 1,
                    'decision' => null,
                    'proposition' => null,
                    'moyenne' => null,
                    'nbAbsences' => 0,
                    'commentaire' => null,
                    'diffuse' => false,
                    'moyennesMatieres' => [],
                    'moyennesUes' => []
                ];
            }

            return $this->json($tabScolarites);
        }


        return $this->json([]);
    }
}
