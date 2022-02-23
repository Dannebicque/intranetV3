<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/MoyenneMatiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 15:35
 */

namespace App\DTO;

use App\Entity\Constantes;
use App\Entity\Note;
use Doctrine\Common\Collections\Collection;

class MoyenneMatiere
{
    public Matiere $matiere;
    public array $notes = [];
    public array $coefficients = [];
    public float $totalNotes = 0;
    public float $totalCoefficient = 0;
    public int $absences = 0; //nombre d'absences non justifiées impliquant une pénalité
    public int $absencesJustifiee = 0; //nombre d'absences  justifiées impliquant
    public bool $optionFaite;
    private float $bonification = 0;
    private float $penalite;
    public bool $matiereAAnnuler = false;

    public function __construct(Matiere $matiere, float $penalite, Collection $groupes)
    {
        $this->matiere = $matiere;
        $this->penalite = $penalite;
        $this->isOption($groupes);
    }

    public function isOption(Collection $groupes): bool
    {
        if (null === $this->matiere->getParcours()) {
            $this->optionFaite = true;

            return $this->optionFaite;
        }

        foreach ($groupes as $groupe) {
            if ((null !== $groupe->getParcours()) && $groupe->getParcours()->getId() === $this->matiere->getParcours()->getId()) {
                $this->optionFaite = true;

                return $this->optionFaite;
            }
        }

        $this->optionFaite = false;

        return $this->optionFaite;
    }

    public function addNote(Note $note): void
    {
        if (false === $note->getAbsenceJustifie() && null !== $note->getEvaluation()) {
            $this->notes[] = $note->getNote();
            $this->coefficients[] = $note->getEvaluation()->getCoefficient();
            $this->totalNotes += $note->getNote() * $note->getEvaluation()->getCoefficient();
            $this->totalCoefficient += $note->getEvaluation()->getCoefficient();
        }

        if (true === $note->getAbsenceJustifie()) {
            //j'ai une absence justifiée.
            ++$this->absencesJustifiee;
        }

        if ($this->absencesJustifiee === $this->matiere->nbNotes) {
            $this->matiereAAnnuler = true;
        }
    }

    public function getStyle(): string
    {
        return $this->style($this->getMoyenne());
    }

    private function style(float $note): string
    {
        if ($note < 0) {
            return Constantes::PAS_OPTION;
        }

        if (0 === $note) {
            return 'badge bg-danger';
        }

        if ($note < 10) {
            return 'badge bg-warning';
        }

        return 'notenormale';
    }

    public function getMoyenne(): ?float
    {


        $moy = $this->totalCoefficient > 0 ? $this->totalNotes / $this->totalCoefficient : 0;

        return max($moy, 0);
    }

    public function getStylePenalisee(): string
    {
        return $this->style($this->getMoyennePenalisee());
    }

    public function getMoyennePenalisee(): float
    {
        $moy = $this->getMoyenne() - ($this->absences * $this->penalite);

        return max($moy, 0);
    }

    public function getBonification(): float
    {
        if ($this->getMoyenne() > 10) {
            $this->bonification += ($this->getMoyenne() - 10) / 20;

            return $this->bonification;
        }

        return 0;
    }

    public function isAbsenceJustifie(): bool
    {
        return $this->absences > 0;
    }
}
