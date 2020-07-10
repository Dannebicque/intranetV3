<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Model/MoyennesSemestreEtudiant.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 09/07/2020 11:21

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 24/12/2018
 * Time: 14:58
 */

namespace App\Classes\Model;


use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Entity\Ue;

class MoyennesSemestreEtudiant
{
    /** @var Semestre */
    private $semestre;

    /** @var double */
    private $moyenne = -0.01;

    /** @var double */
    private $moyennePenalisee = -0.01;

    private $bonif = 0;

    private $decision = '';

    private $proposition = '';
    /**
     * @var MoyenneUeEtudiant[]|array
     */
    private $moyenneUes;

    /** @var Ue[] */
    private $ues;


    /**
     * MoyennesSemestreEtudiant constructor.
     *
     * @param Semestre $semestre
     */
    public function __construct(Semestre $semestre)
    {
        $this->semestre = $semestre;
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
     * @return mixed
     */
    public function getStyleMoyenne()
    {
        if ($this->moyenne <= 10) {
            return 'badge badge-danger';
        }

        return '';
    }

    /**
     * @return mixed
     */
    public function getStyleMoyennePenalisee()
    {
        if ($this->moyennePenalisee <= 10) {
            return 'badge badge-danger';
        }

        return '';
    }

    /**
     * @return int
     */
    public function getBonif(): int
    {
        return $this->bonif;
    }

    /**
     * @return string
     */
    public function getDecision(): string
    {
        return $this->decision;
    }

    /**
     * @return string
     */
    public function getDecisionStyle(): string
    {
        switch ($this->decision) {
            case 'V':
                return 'badge badge-success';
            case 'NV':
                return 'badge badge-danger';
            case 'VCA':
                return 'badge badge-warning';
            default:
                return '';
        }
    }

    /**
     * @return string
     */
    public function getProposition(): string
    {
        return $this->proposition;
    }

    /**
     * @param MoyenneUeEtudiant[] $moyenneUes
     * @param                     $ues
     */
    public function calculMoyenneUes(array $moyenneUes, $ues): void
    {
        $this->moyenneUes = $moyenneUes;
        $this->ues = $ues;

        $totcoeff = 0;
        $totue = 0;
        $totueP = 0;


        /** @var Ue $ue */
        foreach ($ues as $ue) {
            $totue += $this->moyenneUes[$ue->getNumeroUe()]->getMoyenne() * $ue->getCoefficient();
            $totueP += $this->moyenneUes[$ue->getNumeroUe()]->getMoyennePenalisee() * $ue->getCoefficient();
            $totcoeff += $ue->getCoefficient();
        }

        $totcoeff !== 0 ? $this->moyenne = $totue / $totcoeff + $this->bonif : $this->moyenne = 0;
        $totcoeff !== 0 ? $this->moyennePenalisee = $totueP / $totcoeff + $this->bonif : $this->moyennePenalisee = 0;
    }

    /**
     * @param MoyenneMatiereEtudiant[] $moyenneMatieres
     * @param                          $matieres
     */
    public function calculMoyenneModules(array $moyenneMatieres, $matieres): void
    {
        $totcoeff = 0;
        $totmodules = 0;
        $totmodulesPenalisee = 0;

        /** @var Matiere $mod */
        foreach ($matieres as $mod) {
            if (($mod->isPac() === false) && $moyenneMatieres[$mod->getId()]->isPasOption() !== false) {
                $totmodules += $moyenneMatieres[$mod->getId()]->getMoyenne() * $mod->getCoefficient();
                $totmodulesPenalisee += $moyenneMatieres[$mod->getId()]->getMoyennePenalisee() * $mod->getCoefficient();
                $totcoeff += $mod->getCoefficient();
            }
        }

        $totcoeff !== 0 ? $this->moyenne = $totmodules / $totcoeff + $this->bonif : $this->moyenne = 0;
        $totcoeff !== 0 ? $this->moyennePenalisee = $totmodulesPenalisee / $totcoeff + $this->bonif : $this->moyennePenalisee = 0;
    }

    private function hasPoleFaible(): bool
    {
        foreach ($this->ues as $ue) {
            if (($this->semestre->isOptPenaliteAbsence() === true && $this->moyenneUes[$ue->getNumeroUe()]->getMoyennePenalisee() < 8) || ($this->semestre->isOptPenaliteAbsence() === false && $this->moyenneUes[$ue->getNumeroUe()]->getMoyenne() < 8 )) {
                return true;
            }
        }

        return false;
    }

    /**
     * @param ParcoursEtudiant[] $parcours
     */
    public function calculDecision($parcours): void
    {
        if ($this->hasPoleFaible() === false && (($this->semestre->isOptPenaliteAbsence() === true &&
                    $this->moyennePenalisee >= 10) || ($this->semestre->isOptPenaliteAbsence() === false && $this->moyenne >= 10))) {
            //semestre >=10 et UE >=8
            $this->decision = 'V';

            if ($this->semestre->getSuivant() !== null) {
                $this->proposition = $this->semestre->getSuivant()->getLibelle();
            } else {
                $this->proposition = '?';
            }
        } else if ($this->semestre->getOrdreLmd() === 1) {
            //premier semestre
            $this->decision = 'NV';
            $this->proposition = '?';
        } elseif (array_key_exists($this->semestre->getOrdreLmd() - 1, $parcours)) {
            //c'est pas le premier, on regarde le passé.

            $prec = $parcours[$this->semestre->getOrdreLmd() - 1];
            if ($prec->getDecision() === ('V' || 'NV')) {
                //donc pas utilisé pour VCA ou VCJ
                if ($this->semestre->isOptPenaliteAbsence() === true) {
                    $moyenneS = ($this->moyennePenalisee + $prec->getMoyenne()) / 2;
                } else {
                    $moyenneS = ($this->moyenne + $prec->getMoyenne()) / 2;
                }

                if ($moyenneS >= 10) {
                    $this->decision = 'VCA';
                    if ($this->semestre->getSuivant() !== null) {
                        $this->proposition = $this->semestre->getSuivant()->getLibelle();
                    } else {
                        $this->proposition = '?';
                    }
                } else {
                    $this->decision = 'NV';
                    $this->proposition = '?';
                }
            } else {
                $this->decision = 'NV';
                $this->proposition = '?';
            }
        }
    }
}
