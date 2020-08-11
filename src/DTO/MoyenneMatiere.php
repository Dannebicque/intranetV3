<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/MoyenneMatiere.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/08/2020 14:22

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
     */
    public function __construct(Matiere $matiere, $penalite, $groupes)
    {
        $this->matiere = $matiere;
        $this->penalite = $penalite;
        $this->isOption($groupes);
    }

    public function isOption($groupes)
    {
        if ($this->matiere->getParcours() === null) {
            $this->optionFaite = true;

            return $this->optionFaite;
        }

        foreach ($groupes() as $groupe) {
            if (($groupe->getOptions() !== null) && $groupe->getOptions()->getId() === $this->matiere->getParcours()->getId()) {
                $this->optionFaite = true;

                return $this->optionFaite;
            }
        }

        $this->optionFaite = false;

        return $this->optionFaite;
    }

    public function addNote(Note $note): void
    {
        $this->notes[] = $note->getNote();
        $this->coefficients[] = $note->getEvaluation()->getCoefficient();
        $this->totalNotes += $note->getNote();
        $this->totalCoefficient += $note->getEvaluation()->getCoefficient();
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

        if ($note === 0) {
            return 'badge badge-danger';
        }

        if ($note < 10) {
            return 'badge badge-warning';
        }

        return 'notenormale';
    }

    public function getMoyenne(): float
    {
        return $this->totalCoefficient > 0 ? $this->totalNotes / $this->totalCoefficient : 0;
    }

    /**
     *
     * @return string
     */
    public function getStylePenalisee(): string
    {
        return $this->style($this->getMoyennePenalisee());

    }

    public function getMoyennePenalisee()
    {
        return $this->getMoyenne() - ($this->absences * $this->penalite);
    }

    public function getBonification()
    {
        return $this->bonification += ($this->getMoyenne() - 10) / 20;
    }
}
