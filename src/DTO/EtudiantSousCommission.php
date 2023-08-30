<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/EtudiantSousCommission.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/08/2023 10:16
 */

namespace App\DTO;

use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Enums\SemestreLienEnum;
use function array_key_exists;
use function count;
use function in_array;

class EtudiantSousCommission
{
    /** @var MoyenneMatiere[] */
    public array $moyenneMatieres;

    /** @var MoyenneUe[] */
    public array $moyenneUes;

    public string $decision = '';

    public float $moyenneSemestre;
    public float $moyenneSemestrePenalisee;
    public float $bonif = 0;
    public string $proposition = '';
    public array $scolarite = [];

    /**
     * EtudiantSousCommission constructor.
     */
    public function __construct(public Etudiant $etudiant, public Semestre $semestre)
    {
    }

    public function calculMoyenneSemestreMatiere(): void
    {
        $totcoeff = 0;
        $totalMatieres = 0;
        $totalMatieresPenalise = 0;
        $this->calculBonficiation();
        foreach ($this->moyenneMatieres as $moyenneMatiere) {
            if (true === $moyenneMatiere->optionFaite && false === $moyenneMatiere->matiere->bonification) {
                $totalMatieres += $moyenneMatiere->getMoyenne() * $moyenneMatiere->matiere->coefficient;
                $totalMatieresPenalise += $moyenneMatiere->getMoyennePenalisee() * $moyenneMatiere->matiere->coefficient;
                $totcoeff += $moyenneMatiere->matiere->coefficient;
            }
        }
        0 !== $totcoeff ? $this->moyenneSemestre = $totalMatieres / $totcoeff + $this->bonif : $this->moyenneSemestre = 0;
        0 !== $totcoeff ? $this->moyenneSemestrePenalisee = $totalMatieresPenalise / $totcoeff + $this->bonif : $this->moyenneSemestrePenalisee = 0;
    }

    private function calculBonficiation(): void
    {
        foreach ($this->moyenneMatieres as $moyenneMatiere) {
            if (true === $moyenneMatiere->matiere->bonification) {
                $this->bonif += $moyenneMatiere->getBonification();
            }
        }
    }

    public function calculMoyenneSemestreUes(): void
    {
        $totcoeff = 0;
        $totalUes = 0;
        $totalUesPenalise = 0;
        $this->calculBonficiation();

        /* @var Ue $ue */
        foreach ($this->moyenneUes as $moyenneUe) {
            if (false === $moyenneUe->ue->getBonification()) {
                $totalUes += $moyenneUe->getMoyenne() * $moyenneUe->ue->getCoefficient();
                $totalUesPenalise += $moyenneUe->getMoyennePenalisee() * $moyenneUe->ue->getCoefficient();
                $totcoeff += $moyenneUe->ue->getCoefficient();
            }
        }

        0 !== $totcoeff ? $this->moyenneSemestre = $totalUes / $totcoeff + $this->bonif : $this->moyenneSemestre = 0;
        0 !== $totcoeff ? $this->moyenneSemestrePenalisee = $totalUesPenalise / $totcoeff + $this->bonif : $this->moyenneSemestrePenalisee = 0;
    }

    public function calculDecision(): void
    {
        $suivant = null;
        foreach ($this->semestre->getSemestreLienDepart() as $sem) {
            if ($sem->getSens() === SemestreLienEnum::SUIVANT) {
                $suivant = $sem->getSemestreArrive();
            }
        }

        if (false === $this->hasPoleFaible() && ((true === $this->semestre->isOptPenaliteAbsence() &&
                    $this->moyenneSemestrePenalisee >= Constantes::SEUIL_MOYENNE) || (false === $this->semestre->isOptPenaliteAbsence() && $this->moyenneSemestre >= Constantes::SEUIL_MOYENNE))) {
            // semestre >=10 et UE >=8
            // todo: vérifier semestres rpécédents
            $this->decision = Constantes::SEMESTRE_VALIDE;

            if (null !== $suivant) {
                $this->proposition = $suivant->getLibelle();
            } else {
                $this->proposition = Constantes::PROPOSITION_INDEFINIE;
            }
        } elseif (1 === $this->semestre->getOrdreLmd()) {
            // premier semestre
            $this->decision = Constantes::SEMESTRE_NON_VALIDE;
            $this->proposition = Constantes::PROPOSITION_INDEFINIE;
        } elseif (array_key_exists($this->semestre->getOrdreLmd() - 1, $this->scolarite)) {
            // c'est pas le premier, on regarde le passé.
            $prec = $this->scolarite[$this->semestre->getOrdreLmd() - 1];
            if (in_array($prec->decision, [Constantes::SEMESTRE_VALIDE, Constantes::SEMESTRE_NON_VALIDE], true)) {
                // donc pas utilisé pour VCA ou VCJ
                if (true === $this->semestre->isOptPenaliteAbsence()) {
                    $moyenneS = ($this->moyenneSemestrePenalisee + $prec->moyenne) / 2;
                } else {
                    $moyenneS = ($this->moyenneSemestre + $prec->moyenne) / 2;
                }

                if ($moyenneS >= 10) {
                    $this->decision = Constantes::SEMESTRE_VCA;
                    if (null !== $suivant) {
                        $this->proposition = $suivant->getLibelle();
                    } else {
                        $this->proposition = Constantes::PROPOSITION_INDEFINIE;
                    }
                } else {
                    $this->decision = Constantes::SEMESTRE_NON_VALIDE;
                    $this->proposition = Constantes::PROPOSITION_INDEFINIE;
                }
            } else {
                $this->decision = Constantes::SEMESTRE_NON_VALIDE;
                $this->proposition = Constantes::PROPOSITION_INDEFINIE;
            }
        } else {
            $this->decision = Constantes::SEMESTRE_NON_VALIDE;
            $this->proposition = Constantes::PROPOSITION_INDEFINIE;
        }
    }

    private function hasPoleFaible(): bool
    {
        foreach ($this->moyenneUes as $moyenneUe) {
            if (true === $moyenneUe->ue->getBonification()) {
                return false; // on ne traite pas les UEs qui ont une bonification
            }
            if ((true === $this->semestre->isOptPenaliteAbsence() && $moyenneUe->getMoyennePenalisee() < Constantes::SEUIL_UE) || (false === $this->semestre->isOptPenaliteAbsence() && $moyenneUe->getMoyenne() < Constantes::SEUIL_UE)) {
                return true;
            }
        }

        return false;
    }

    public function getStyleMoyenneSemestre(): string
    {
        return $this->styleMoyenne($this->moyenneSemestre);
    }

    private function styleMoyenne(float $note): string
    {
        if ($note <= Constantes::SEUIL_MOYENNE) {
            return 'badge bg-danger';
        }

        return '';
    }

    public function getStyleMoyenneSemestrePenalisee(): string
    {
        return $this->styleMoyenne($this->moyenneSemestrePenalisee);
    }

    public function getDecisionStyle(): string
    {
        return match ($this->decision) {
            Constantes::SEMESTRE_VALIDE => 'badge bg-success',
            Constantes::SEMESTRE_NON_VALIDE => 'badge bg-danger',
            Constantes::SEMESTRE_VCA, Constantes::SEMESTRE_VCJ => 'badge bg-warning',
            default => '',
        };
    }

    public function getAbsencesStyle(): string
    {
        $nbAbsences = $this->nbAbsences();
        if ($nbAbsences < 5) {
            return '';
        }

        if ($nbAbsences < 10) {
            return 'badge bg-warning';
        }

        return 'badge bg-danger';
    }

    public function nbAbsences(): int
    {
        $nbAbsences = 0;
        foreach ($this->moyenneMatieres as $moyenneMatiere) {
            $nbAbsences += $moyenneMatiere->absences;
        }

        return $nbAbsences;
    }

    public function getNbSemestres(): int
    {
        return count($this->scolarite);
    }

    public function getScolarite(): array
    {
        return $this->scolarite;
    }

    public function recupereScolarite(): void
    {
        // on ne récupère la scolarité que par rapport au diplôme en cours
        foreach ($this->etudiant->getScolarites() as $scolarite) {
            if ($scolarite->getSemestre()->getDiplome() === $this->etudiant->getDiplome()) {
                $this->scolarite[$scolarite->getSemestre()->getOrdreLmd()] = new Scolarite($scolarite);
            }
        }
    }
}
