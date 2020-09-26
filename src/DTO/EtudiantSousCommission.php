<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/EtudiantSousCommission.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/09/2020 08:39

namespace App\DTO;


use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Entity\Ue;

class EtudiantSousCommission
{
    public Etudiant $etudiant;

    /** @var MoyenneMatiere[] */
    public array $moyenneMatieres;

    /** @var MoyenneUe[] */
    public array $moyenneUes;

    public string $decision = '';

    public float $moyenneSemestre;

    public Semestre $semestre;
    public float $moyenneSemestrePenalisee;
    public float $bonif = 0;
    public string $proposition = '';
    public array $scolarite = [];

    /**
     * EtudiantSousCommission constructor.
     *
     * @param Etudiant $etudiant
     * @param Semestre $semestre
     */
    public function __construct(Etudiant $etudiant, Semestre $semestre)
    {
        $this->etudiant = $etudiant;
        $this->semestre = $semestre;
    }

    public function calculMoyenneSemestreMatiere()
    {
        $totcoeff = 0;
        $totalMatieres = 0;
        $totalMatieresPenalise = 0;

        foreach ($this->moyenneMatieres as $moyenneMatiere) {
            if ($moyenneMatiere->optionFaite === true && $moyenneMatiere->matiere->isPac() === false) {
                $totalMatieres += $moyenneMatiere->getMoyenne() * $moyenneMatiere->matiere->getCoefficient();
                $totalMatieresPenalise += $moyenneMatiere->getMoyennePenalisee() * $moyenneMatiere->matiere->getCoefficient();
                $totcoeff += $moyenneMatiere->matiere->getCoefficient();
            } elseif ($moyenneMatiere->matiere->isPac() === true) {
                $this->bonif += $moyenneMatiere->getBonification();
            }
        }

        $totcoeff !== 0 ? $this->moyenneSemestre = $totalMatieres / $totcoeff + $this->bonif : $this->moyenneSemestre = 0;
        $totcoeff !== 0 ? $this->moyenneSemestrePenalisee = $totalMatieresPenalise / $totcoeff + $this->bonif : $this->moyenneSemestrePenalisee = 0;
    }

    public function calculMoyenneSemestreUes()
    {
        $totcoeff = 0;
        $totalUes = 0;
        $totalUesPenalise = 0;


        /** @var Ue $ue */
        foreach ($this->moyenneUes as $moyenneUe) {
            $totalUes += $moyenneUe->getMoyenne() * $moyenneUe->ue->getCoefficient();
            $totalUesPenalise += $moyenneUe->getMoyennePenalisee() * $moyenneUe->ue->getCoefficient();
            $totcoeff += $moyenneUe->ue->getCoefficient();
        }

        $totcoeff !== 0 ? $this->moyenneSemestre = $totalUes / $totcoeff + $this->bonif : $this->moyenneSemestre = 0;
        $totcoeff !== 0 ? $this->moyenneSemestrePenalisee = $totalUesPenalise / $totcoeff + $this->bonif : $this->moyenneSemestrePenalisee = 0;
    }

    public function calculDecision(): void
    {
        if ($this->hasPoleFaible() === false && (($this->semestre->isOptPenaliteAbsence() === true &&
                    $this->moyenneSemestrePenalisee >= Constantes::SEUIL_MOYENNE) || ($this->semestre->isOptPenaliteAbsence() === false && $this->moyenneSemestre >= Constantes::SEUIL_MOYENNE))) {
            //semestre >=10 et UE >=8
            //todo: vérifier semestres rpécédents
            $this->decision = Constantes::SEMESTRE_VALIDE;

            if ($this->semestre->getSuivant() !== null) {
                $this->proposition = $this->semestre->getSuivant()->getLibelle();
            } else {
                $this->proposition = Constantes::PROPOSITION_INDEFINIE;
            }
        } else if ($this->semestre->getOrdreLmd() === 1) {
            //premier semestre
            $this->decision = Constantes::SEMESTRE_NON_VALIDE;
            $this->proposition = Constantes::PROPOSITION_INDEFINIE;
        } else if (array_key_exists($this->semestre->getOrdreLmd() - 1, $this->scolarite)) {
            //c'est pas le premier, on regarde le passé.
            $prec = $this->scolarite[$this->semestre->getOrdreLmd() - 1];
            if (in_array($prec->getDecision(), [Constantes::SEMESTRE_VALIDE, Constantes::SEMESTRE_NON_VALIDE], true)) {
                //donc pas utilisé pour VCA ou VCJ
                if ($this->semestre->isOptPenaliteAbsence() === true) {
                    $moyenneS = ($this->moyenneSemestrePenalisee + $prec->getMoyenne()) / 2;
                } else {
                    $moyenneS = ($this->moyenneSemestre + $prec->getMoyenne()) / 2;
                }

                if ($moyenneS >= 10) {
                    $this->decision = Constantes::SEMESTRE_VCA;
                    if ($this->semestre->getSuivant() !== null) {
                        $this->proposition = $this->semestre->getSuivant()->getLibelle();
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
            if (($this->semestre->isOptPenaliteAbsence() === true && $moyenneUe->getMoyennePenalisee() < Constantes::SEUIL_UE) || ($this->semestre->isOptPenaliteAbsence() === false && $moyenneUe->getMoyenne() < Constantes::SEUIL_UE)) {
                return true;
            }
        }

        return false;
    }

    /**
     * @return mixed
     */
    public function getStyleMoyenneSemestre()
    {
        return $this->styleMoyenne($this->moyenneSemestre);
    }

    /**
     * @param float $note
     *
     * @return string
     */
    private function styleMoyenne(float $note): string
    {
        if ($note <= Constantes::SEUIL_MOYENNE) {
            return 'badge badge-danger';
        }

        return '';
    }

    /**
     * @return mixed
     */
    public function getStyleMoyenneSemestrePenalisee()
    {
        return $this->styleMoyenne($this->moyenneSemestrePenalisee);
    }

    /**
     * @return string
     */
    public function getDecisionStyle(): string
    {
        switch ($this->decision) {
            case Constantes::SEMESTRE_VALIDE:
                return 'badge badge-success';
            case Constantes::SEMESTRE_NON_VALIDE:
                return 'badge badge-danger';
            case Constantes::SEMESTRE_VCA:
            case Constantes::SEMESTRE_VCJ:
                return 'badge badge-warning';
            default:
                return '';
        }
    }

    public function getAbsencesStyle()
    {
        $nbAbsences = $this->nbAbsences();
        if ($nbAbsences < 5) {
            return '';
        }

        if ($nbAbsences >= 5 && $nbAbsences < 10) {
            return 'badge badge-warning';
        }

        return 'badge badge-danger';
    }

    public function nbAbsences()
    {
        $nbAbsences = 0;
        foreach ($this->moyenneMatieres as $moyenneMatiere) {
            $nbAbsences += $moyenneMatiere->absences;
        }

        return $nbAbsences;
    }

    public function getNbSemestres()
    {
        return count($this->scolarite); //todo à améliorer...
    }
}
