<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Model/MoyenneMatiereEtudiant.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:33

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 24/12/2018
 * Time: 15:51
 */

namespace App\Classes\Model;


use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Note;

class MoyenneMatiereEtudiant
{
    /** @var Matiere */
    private $matiere;

    /** @var Etudiant */
    private $etudiant;

    /** @var */
    private $notes;

    /** @var double */
    private $moyenne = -0.01;

    /** @var int */
    private $bonif = 0;

    private $penalite;

    /** @var double */
    private $moyennePenalisee = -0.01;

    /** @var bool */
    private $pasOption = false;


    /**
     * MoyenneMatiereEtudiant constructor.
     *
     * @param Etudiant $etudiant
     * @param Matiere  $matiere
     * @param          $notes
     */
    public function __construct(Etudiant $etudiant, Matiere $matiere, $notes)
    {
        $this->matiere = $matiere;
        $this->etudiant = $etudiant;
        $this->notes = $notes;
        $this->penalite = $etudiant->getSemestre()->getOptPointPenaliteAbsence();
        $this->calcul();
    }

    private function isOption(): bool
    {
        if ($this->matiere->getParcours() === null) {
            return true;
        }

        foreach ($this->etudiant->getGroupes() as $groupe) {
            if (($groupe->getOptions() !== null) && $groupe->getOptions()->getId() === $this->matiere->getParcours()->getId()) {
                return true;
            }
        }

        return false;
    }

    private function calcul(): void
    {
        $total = 0;
        $totcoeff = 0;

        if ($this->isOption()) {
            /** @var Note $note */
            foreach ($this->notes as $note) {
                if ($note['note'] !== -0.01 && $note['eval'] !== null) {
                    $total += $note['eval']->getCoefficient() * $note['note'];
                    $totcoeff += $note['eval']->getCoefficient();
                }
            }

            if ($totcoeff > 0) {
                $moyenne = $total / $totcoeff;
            } else {
                $moyenne = -0.01;
            }

            $this->moyenne = $moyenne;

            /* penalité */
            $mp = $moyenne - ($this->moyenne * $this->penalite);

            if ($mp > 0) {
                $this->moyennePenalisee = $mp;
            } else {
                $this->moyennePenalisee = 0;
            }
            /* fin penalite */

        } else {
            $this->moyenne = '';
            $this->pasOption = true;
        }

        //clacul de la bonification
        if ($this->moyenne !== -0.01 && $this->moyenne > 0 && $this->matiere->isPac() === true) {
            if ($this->matiere->getSemestre() !== null && $this->matiere->getSemestre()->isOptPenaliteAbsence() === true) {
                $this->bonif += ($this->moyennePenalisee - 10) / 20;
            } else {
                $this->bonif += ($this->moyenne - 10) / 20;
            }
        }
    }

    /**
     * @return float
     */
    public function getMoyenne(): float
    {
        return $this->moyenne;
    }

    /**
     * @return float
     */
    public function getMoyennePenalisee(): float
    {
        return $this->moyennePenalisee;
    }


    /**
     *
     * @return string
     */
    public function getStyle(): string
    {
        return $this->style($this->moyenne);
    }

    /**
     *
     * @return string
     */
    public function getStylePenalisee(): string
    {
        return $this->style($this->moyennePenalisee);

    }

    private function style($note): string
    {
        if ($note < 0) {
            return 'pasdenote';
        }

        if ($note === 0) {
            return 'badge badge-danger';
        }

        if ($note < 10) {
            return 'badge badge-warning';
        }

        return 'notenormale';
    }

    /**
     * @return bool
     */
    public function isPasOption(): bool
    {
        return $this->pasOption;
    }


}
