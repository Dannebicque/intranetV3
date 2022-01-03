<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/SousCommission/SousCommissionApc.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/12/2021 09:32
 */

namespace App\Classes\SousCommission;

use App\DTO\EtudiantSousCommissionApc;
use App\DTO\StatitiquesBac;
use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;


class SousCommissionApc extends AbstractSousCommission implements SousCommissionInterface
{
    public const TEMPLATE_LIVE = 'liveApc.html.twig';

    public function calcul(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): void
    {
        $this->semestre = $semestre;
        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->initDataSousCommission();
        $matieres = $this->typeMatiereManager->findBySemestre($semestre);

        $this->sousCommissionEtudiant = [];

        foreach ($this->etudiants as $etudiant) {
            $etudiantSousCommission = new EtudiantSousCommissionApc($etudiant, $semestre);

            //récupérer les notes et calculer la moyenne des matières (sans pénalité)
            $this->etudiantNotes->setEtudiant($etudiant);
            $etudiantSousCommission->moyenneMatieres = $this->etudiantNotes->getMoyenneParMatiereParSemestresEtAnneeUniversitaire($matieres,
                $this->semestre,
                $anneeUniversitaire);
            //récupérer les pénalités d'absence par matière
            $this->etudiantAbsences->setEtudiant($etudiant);
            $this->etudiantAbsences->getPenalitesAbsencesParMatiere($matieres, $anneeUniversitaire,
                $etudiantSousCommission->moyenneMatieres);
            //calculer la moyenne des ues (avec et sans pénalité)
            $etudiantSousCommission->setMoyenneUes($this->etudiantNotes->calculMoyenneApcSemestre($this->semestre, $matieres, $this->ues, $etudiantSousCommission->moyenneMatieres));//todo: le calcul ne devrait pas se faire dans cette classe...

            $etudiantSousCommission->recupereScolarite();

            //calcul de la décision du semestre
            $etudiantSousCommission->calculDecision();

            $this->sousCommissionEtudiant[$etudiant->getId()] = $etudiantSousCommission;
        }
    }



    public function calculStats(array $bacs): array
    {
        $tStats = [];
        foreach ($bacs as $bac) {
            $tStats[$bac->getId()] = new StatitiquesBac();
        }
        $tStats['global'] = new StatitiquesBac();

        return $tStats;
    }

    public function getSousCommissionEtudiant($idEtudiant): ?EtudiantSousCommissionApc
    {
        return $this->sousCommissionEtudiant[$idEtudiant];
    }
}
