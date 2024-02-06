<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/SousCommission/SousCommission.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/02/2024 14:14
 */

namespace App\Classes\SousCommission;

use App\DTO\EtudiantSousCommission;
use App\DTO\MoyenneMatiere;
use App\DTO\MoyenneUe;
use App\DTO\StatitiquesBac;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Scolarite;
use App\Entity\ScolaritePromo;
use App\Entity\Semestre;
use App\Enums\DecisionSemestreEnum;
use App\Utils\Tools;
use function array_key_exists;

class SousCommission extends AbstractSousCommission implements SousCommissionInterface
{
    final public const TEMPLATE_LIVE = 'live.html.twig';
    final public const TEMPLATE_TRAVAIL = 'travail.html.twig';

    public function calcul(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): void
    {
        $this->semestre = $semestre;
        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->initDataSousCommission();
        $matieres = $this->typeMatiereManager->findBySemestre($semestre);

        $this->sousCommissionEtudiant = [];

        foreach ($this->etudiants as $etudiant) {
            $etudiantSousCommission = new EtudiantSousCommission($etudiant, $semestre);

            // récupérer les notes et calculer la moyenne des matières (sans pénalité)
            $this->etudiantNotes->setEtudiant($etudiant);
            $etudiantSousCommission->moyenneMatieres = $this->etudiantNotes->getMoyenneParMatiereParSemestresEtAnneeUniversitaire($matieres,
                $this->semestre,
                $anneeUniversitaire);
            // récupérer les pénalités d'absence par matière
            $this->etudiantAbsences->setEtudiant($etudiant);
            $this->etudiantAbsences->getPenalitesAbsencesParMatiere($matieres, $anneeUniversitaire,
                $etudiantSousCommission->moyenneMatieres);
            // calculer la moyenne des ues (avec et sans pénalité)
            $etudiantSousCommission->moyenneUes = $this->calculMoyenneUes($etudiantSousCommission->moyenneMatieres);

            // calculer la moyenne générale selon l'option séléctionnée (avec et sans pénalité)
            if (null !== $semestre->getDiplome()) {
                if (Constantes::METHODE_CALCUL_MOY_MODULE === $semestre->getDiplome()->getOptMethodeCalcul()) {
                    $etudiantSousCommission->calculMoyenneSemestreMatiere();
                } elseif (Constantes::METHODE_CALCUL_MOY_UE === $semestre->getDiplome()->getOptMethodeCalcul()) {
                    $etudiantSousCommission->calculMoyenneSemestreUes();
                }
            }

            $etudiantSousCommission->recupereScolarite();

            // calcul de la décision du semestre
            $etudiantSousCommission->calculDecision();

            $this->sousCommissionEtudiant[$etudiant->getId()] = $etudiantSousCommission;
        }
    }

    private function calculMoyenneUes(array $moyenneMatieres): array
    {
        $tabUes = [];
        foreach ($this->ues as $ue) {
            $tabUes[$ue->getNumeroUe()] = new MoyenneUe($ue);
        }

        /** @var MoyenneMatiere $matiere */
        foreach ($moyenneMatieres as $matiere) {
            $idUe = $matiere->matiere->getUeNumero();
            if (array_key_exists($idUe, $tabUes)) {
                $tabUes[$idUe]->addMatiere($matiere);
            }
        }

        return $tabUes;
    }

    public function getSousCommissionEtudiant(int $idEtudiant): ?EtudiantSousCommission
    {
        return $this->sousCommissionEtudiant[$idEtudiant];
    }

    public function updateScolarite(Scolarite $scolarite, string $type, string $field, mixed $value): void
    {
        switch ($type) {
            case 'semestre':
                $this->updateScolariteSemestre($scolarite, $field, $value);
                break;
            case 'ue':
                $this->updateScolariteUe($scolarite, $field, $value);
                break;
            case 'matiere':
                $this->updateScolariteMatiere($scolarite, $field, $value);
                break;
        }
        $this->entityManager->flush();
    }

    private function updateScolariteSemestre(Scolarite $scolarite, string $field, mixed $value): void
    {
        switch ($field) {
            case 'decision':
                $scolarite->setDecision(DecisionSemestreEnum::tryFrom($value));
                break;
            case 'proposition':
                $scolarite->setProposition($value);
                break;
            case 'moyenne':
                $scolarite->setMoyenne(Tools::convertToFloat($value));
                break;
        }
    }

    private function updateScolariteUe(Scolarite $scolarite, string $field, mixed $value): void
    {
        [$code, $idUe] = explode('_', $field);

        $t = $scolarite->getMoyennesUes();
        switch ($code) {
            case 'decision':
                $t[$idUe][$code] = $value;
                break;
            case 'moyenne':
                $t[$idUe][$code] = Tools::convertToFloat($value);
                break;
        }
        $scolarite->setMoyennesUes($t);
    }

    private function updateScolariteMatiere(Scolarite $scolarite, string $field, mixed $value): void
    {
        [$code, $idMatiere] = explode('_', $field);
        $scolarite->getMoyennesMatieres()[$idMatiere]['moyenne'] = match ($code) {
            'moyenne' => Tools::convertToFloat($value),
        };
    }

    public function getBySemestreAnneeUniversitaire(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): ?ScolaritePromo
    {
        return $this->entityManager->getRepository(ScolaritePromo::class)->findOneBy([
            'semestre' => $semestre->getId(),
            'anneeUniversitaire' => $anneeUniversitaire->getId(),
        ]);
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
}
