<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 24/12/2018
 * Time: 14:58
 */

namespace App\MesClasses\Model;


use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use App\Entity\Ue;

class MoyennesSemestreEtudiant
{
    /** @var Etudiant */
    private $etudiant;

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
     * MoyennesSemestreEtudiant constructor.
     *
     * @param Etudiant $etudiant
     * @param Semestre $semestre
     */
    public function __construct(Etudiant $etudiant, Semestre $semestre)
    {
        $this->etudiant = $etudiant;
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
    public function calculMoyenneUes(array $moyenneUes, $ues)
    {
        $totcoeff = 0;
        $totue = 0;
        $totueP = 0;


        /** @var Ue $ue */
        foreach ($ues as $ue) {
            $totue += $moyenneUes[$ue->getNumeroUe()]->getMoyenne() * $ue->getCoefficient();
            $totueP += $moyenneUes[$ue->getNumeroUe()]->getMoyennePenalisee() * $ue->getCoefficient();
            $totcoeff += $ue->getCoefficient();
        }

        $this->moyenne = $totue / $totcoeff + $this->bonif;
        $this->moyennePenalisee = $totueP / $totcoeff + $this->bonif;
    }

    /**
     * @param MoyenneMatiereEtudiant[] $moyenneMatieres
     * @param                          $matieres
     */
    public function calculMoyenneModules(array $moyenneMatieres, $matieres)
    {
        $totcoeff = 0;
        $totmodules = 0;
        $totmodulesPenalisee = 0;

        /** @var Matiere $mod */
        foreach ($matieres as $mod) {
            if ($mod->isPac() === false) {
                if ($moyenneMatieres[$mod->getId()]->isPasOption() !== false) {
                    $totmodules += $moyenneMatieres[$mod->getId()]->getMoyenne() * $mod->getCoefficient();
                    $totmodulesPenalisee += $moyenneMatieres[$mod->getId()]->getMoyennePenalisee() * $mod->getCoefficient();
                    $totcoeff += $mod->getCoefficient();
                }
            }
        }

        $this->moyenne = $totmodules / $totcoeff + $this->bonif;
        $this->moyennePenalisee = $totmodulesPenalisee / $totcoeff + $this->bonif;
    }

    private function hasPoleFaible()
    {
        return false;
    }

    /**
     * @param ParcoursEtudiant[] $parcours
     */
    public function calculDecision($parcours): void
    {
        if ((($this->semestre->isOptPenaliteAbsence() === true &&
                    $this->moyennePenalisee >= 10) || ($this->semestre->isOptPenaliteAbsence() === false && $this->moyenne >= 10)) && $this->hasPoleFaible() === false
        ) {
            //semestre >=10 et UE >=8
            $this->decision = 'V';

            if ($this->semestre->getSuivant() !== null) {
                $this->proposition = $this->semestre->getSuivant()->getLibelle();
            } else {
                $this->proposition = '?';
            }
        } else {
            //semestre < 10 ou UE < 8
            if ($this->semestre->getOrdreLmd() === 1) {
                //premier semestre
                $this->decision = 'NV';
                $this->proposition = '?';
            } elseif (array_key_exists($this->semestre->getOrdreLmd() - 1, $parcours)) {
                //c'est pas le premier, on regarde le passé.

                /** @var ParcoursEtudiant $prec */
                $prec = $parcours[$this->semestre->getOrdreLmd() - 1];
                if ($prec->getDecision() === 'V' || $prec->getDecision() === 'NV') {
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
}
