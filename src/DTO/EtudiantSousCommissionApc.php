<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/EtudiantSousCommission.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:44
 */

namespace App\DTO;

use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use function count;

class EtudiantSousCommissionApc
{
    /** @var MoyenneMatiere[] */
    public array $moyenneMatieres = [];

    /** @var \App\DTO\MoyenneUeApc[] */
    public array $moyenneUes = [];

    public float $bonification = 0;
    public ?string $decision = null;
    public ?string $conseil = null; //todo: information sur les enjeux du S"pair"
    public ?string $proposition = null;
    public array $scolarite = [];

    /**
     * EtudiantSousCommissionApc constructor.
     */
    public function __construct(
        public Etudiant $etudiant,
        public Semestre $semestre,
        array $ues
    ) {
        foreach ($ues as $ue) {
            $this->moyenneUes[$ue->getId()] = new MoyenneUeApc($ue);
        }
    }

    public function calculDecision(): void
    {
        $nbUes = count($this->moyenneUes);
        $nbUesValidees = 0;
        foreach ($this->moyenneUes as $ue) {
            if (true === $this->semestre->getOptPenaliteAbsence() && Constantes::UE_VALIDE === $ue->decisionPenalisee) {
                ++$nbUesValidees;
            } elseif (false === $this->semestre->getOptPenaliteAbsence() && Constantes::UE_VALIDE === $ue->decision) {
                ++$nbUesValidees;
            }
        }

        if ($nbUes === $nbUesValidees) {
            $this->decision = Constantes::SEMESTRE_VALIDE; //cas simple, toutes les UE sont validées.
            $this->conseil = 'RAS. Passage au semestre suivant, sans problème.';
        } elseif (0 === $nbUesValidees) {
            $this->decision = Constantes::SEMESTRE_NON_VALIDE;
            $this->conseil = 'Attention, grandes difficultés pour le S2 avec l\'obligation de compenser les UE';
        } elseif ($nbUesValidees < ($nbUes / 2)) {
            $this->decision = Constantes::SEMESTRE_NON_VALIDE;
            $this->conseil = 'Attention, moins de la moitié des UE est validé. Il faut compenser sur le semestre suivant';
        } else {
            $this->decision = Constantes::SEMESTRE_NON_VALIDE;
            $this->conseil = 'La moitié des UE sont validées. Le passage en année suivante sera possible, mais il faudra compenser.';
        }
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
        return count($this->scolarite);
    }

    public function getScolarite(): array
    {
        return $this->scolarite;
    }

    public function recupereScolarite(): void
    {
        //on ne récupère la scolarité que par rapport au diplôme en cours
        foreach ($this->etudiant->getScolarites() as $scolarite) {
            if ($scolarite->getSemestre()->getDiplome() === $this->etudiant->getDiplome()) {
                $this->scolarite[$scolarite->getSemestre()->getOrdreLmd()] = new Scolarite($scolarite);
            }
        }
    }

    public function calculMoyenneUes(array $matieres, $ressources, $saes): void
    {
        foreach ($matieres as $matiere) {
            if (true === $matiere->bonification) {
                $this->bonification += $this->moyenneMatieres[$matiere->getTypeIdMatiere()]->getBonification();
            } elseif (array_key_exists($matiere->getTypeIdMatiere(), $this->moyenneMatieres)) {
                $tabs['matieres'][$matiere->codeElement]['moyenne'] = $this->moyenneMatieres[$matiere->getTypeIdMatiere()]->getMoyenne();
                $tabs['matieres'][$matiere->codeElement]['moyennePenalisee'] = $this->moyenneMatieres[$matiere->getTypeIdMatiere()]->getMoyennePenalisee();
            } else {
                $tabs['matieres'][$matiere->codeElement]['moyenne'] = 0;
                $tabs['matieres'][$matiere->codeElement]['moyennePenalisee'] = 0;
            }
        }

        foreach ($this->moyenneUes as $ue) {
            $competenceId = $ue->ue->getApcCompetence()?->getId();

            foreach ($matieres as $matiere) {
                if (false === $matiere->bonification) {
                    if (array_key_exists($ue->ue->getApcCompetence()->getId(),
                            $ressources) && array_key_exists($matiere->codeElement,
                            $ressources[$ue->ue->getApcCompetence()->getId()])) {
                        $ue->matieres[$matiere->codeElement]['coefficient'] = $ressources[$competenceId][$matiere->codeElement]->getCoefficient(); //moyenne
                        // officiellement du module.
                        $ue->totalCoefficients += $ressources[$competenceId][$matiere->codeElement]->getCoefficient();
                    } elseif (array_key_exists($competenceId,
                            $saes) && array_key_exists($matiere->codeElement,
                            $saes[$competenceId])) {
                        $ue->matieres[$matiere->codeElement]['coefficient'] = $saes[$competenceId][$matiere->codeElement]->getCoefficient(); //moyenne officiellement du module.
                        $ue->totalCoefficients += $saes[$competenceId][$matiere->codeElement]->getCoefficient();
                    } else {
                        $ue->matieres[$matiere->codeElement]['coefficient'] = 0;
                    }
                    $ue->matieres[$matiere->codeElement]['moyenne'] = $tabs['matieres'][$matiere->codeElement]['moyenne'] * $ue->matieres[$matiere->codeElement]['coefficient'];
                    $ue->matieres[$matiere->codeElement]['moyennePenalisee'] = $tabs['matieres'][$matiere->codeElement]['moyennePenalisee'] * $ue->matieres[$matiere->codeElement]['coefficient'];
                    $ue->totalMoyennes += $ue->matieres[$matiere->codeElement]['moyenne'];
                    $ue->totalMoyennesPenalisee += $ue->matieres[$matiere->codeElement]['moyennePenalisee'];
                    if ($ue->totalCoefficients > 0) {
                        $ue->moyenne = $ue->totalMoyennes / $ue->totalCoefficients;
                        $ue->moyennePenalisee = $ue->totalMoyennesPenalisee / $ue->totalCoefficients;
                        $ue->moyennePac = $ue->moyenne + $this->bonification;
                        $ue->moyennePacPenalisee = $ue->moyennePenalisee + $this->bonification;

                        $ue->decision = $ue->moyennePac < 10 ? Constantes::UE_NON_VALIDE : Constantes::UE_VALIDE;
                        $ue->decisionPenalisee = $ue->moyennePacPenalisee < 10 ? Constantes::UE_NON_VALIDE : Constantes::UE_VALIDE;
                    }
                }
            }
        }
    }
}
