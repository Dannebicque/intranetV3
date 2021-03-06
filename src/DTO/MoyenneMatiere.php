<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/MoyenneMatiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:41
 */

namespace App\DTO;

use App\Entity\Constantes;
use App\Entity\Matiere;
use App\Entity\Note;

class MoyenneMatiere
{
    public Matiere $matiere;
    public array $notes = [];
    public array $coefficients = [];
    public float $totalNotes = 0;
    public float $totalCoefficient = 0;
    public float $absences = 0; //nombre d'absences non justifiées impliquant une pénalité
    public bool $optionFaite;
    private float $bonification = 0;
    private float $penalite;

    /**
     * MoyenneMatiere constructor.
     *
     * @param Matiere|mixed $matiere
     * @param               $penalite
     * @param               $groupes
     */
    public function __construct(Matiere $matiere, $penalite, $groupes)
    {
        $this->matiere = $matiere;
        $this->penalite = $penalite;
        $this->isOption($groupes);
    }

    public function isOption($groupes)
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
        if (false === $note->getAbsenceJustifie()) {
            $this->notes[] = $note->getNote();
            $this->coefficients[] = $note->getEvaluation()->getCoefficient();
            $this->totalNotes += $note->getNote() * $note->getEvaluation()->getCoefficient();
            $this->totalCoefficient += $note->getEvaluation()->getCoefficient();
        }
    }

    public function getStyle(): string
    {
        return $this->style($this->getMoyenne());
    }

    private function style($note): string
    {
        if ($note < 0) {
            return Constantes::PAS_OPTION;
        }

        if (0 === $note) {
            return 'badge badge-danger';
        }

        if ($note < 10) {
            return 'badge badge-warning';
        }

        return 'notenormale';
    }

    public function getMoyenne(): float
    {
        $moy = $this->totalCoefficient > 0 ? $this->totalNotes / $this->totalCoefficient : 0;

        return $moy < 0 ? 0 : $moy;
    }

    public function getStylePenalisee(): string
    {
        return $this->style($this->getMoyennePenalisee());
    }

    public function getMoyennePenalisee()
    {
        $moy = $this->getMoyenne() - ($this->absences * $this->penalite);

        return $moy < 0 ? 0 : $moy;
    }

    public function getBonification()
    {
        if ($this->getMoyenne() > 10) {
            $this->bonification += ($this->getMoyenne() - 10) / 20;

            return $this->bonification;
        }

        return 0;
    }
}
