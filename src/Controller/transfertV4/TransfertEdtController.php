<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/transfertV4/TransfertEdtController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/12/2024 08:24
 */

namespace App\Controller\transfertV4;

use App\Repository\EdtPlanningRepository;
use App\Repository\EtudiantRepository;
use App\Repository\ScolariteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/transfert')]
class TransfertEdtController extends AbstractController
{
    /**
     * @param EtudiantRepository $etudiantRepository
     * @param ScolariteRepository $scolariteRepository
     * @param int $id
     * @return Response
     */
    #[Route('/edt-intranet', name: 'api_transfert_edt_intranet', methods: ['GET', 'POST'])]
    public function getEdtIntranet(
        EdtPlanningRepository $edtIntranetRepository,
    ): Response
    {
        $edtIntranet = $edtIntranetRepository->findBy(['anneeUniversitaire' => 8]);
        $tabEdtIntranet = [];
        if ($edtIntranet) {
            foreach ($edtIntranet as $edt) {
                // fusionner la date avec l'heure de début
                $debut = $edt->getDate()->format('Y-m-d') . ' ' . $edt->getHeureDebut()?->format('H:i:s');
                $fin = $edt->getDate()->format('Y-m-d') . ' ' . $edt->getHeureFin()?->format('H:i:s');
                $date = $edt->getDate()?->format('Y-m-d') ?? '';
                $tabEdtIntranet[] = [
                    'id' => $edt->getId(),
                    'date' => $date,
                    'debut' => $debut,
                    'fin' => $fin,
                    'matiere' => $edt->getTypeIdMatiere(),
                    'salle' => $edt->getSalle(),
                    'prof' => $edt->getIntervenant()?->getId(),
                    'libprof' => $edt->getIntervenant()?->getDisplayPr(),
                    'groupe' => $edt->getGroupeObjet()?->getId(),
                    'type' => $edt->getType(),
                    'couleur' => $edt->getSemestre()?->getAnnee()?->getCouleur(),
                    'commentaire' => $edt->getCommentaire(),
                    'evaluation' => $edt->getEvaluation(),
                    'codeRh' => $edt->getIntervenant()?->getNumeroHarpege(),
                    'codeGroupe' => $edt->getGroupeObjet()?->getCodeApogee(),
                    'jour' => $edt->getJour(),
                    'libGroupe' => $edt->getGroupeObjet()?->getLibelle(),
                    'semestre' => $edt->getSemestre()?->getId(),
                    'semaine' => $edt->getSemaine() ?? 0,
                    'anneeUniversitaire' => $edt->getAnneeUniversitaire()?->getId(),
                ];
            }
        }

        return $this->json($tabEdtIntranet);
    }
}
