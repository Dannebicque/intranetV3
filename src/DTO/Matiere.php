<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/Matiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:55
 */

namespace App\DTO;

use App\Entity\ApcSae;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Groupe;
use App\Entity\Parcour;
use App\Entity\Semestre;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

class Matiere
{
    /**  ne-pas-exporter */
    public int $id;
    public string $typeMatiere;
    public string $libelle;
    public string $display;
    public ?string $codeMatiere = '';
    public ?string $codeElement = '';

    public ?float $cmPpn = 0;
    public ?float $tdPpn = 0;
    public ?float $tpPpn = 0;
    public ?float $projetPpn = 0;

    public ?float $cmFormation = 0;
    public ?float $tdFormation = 0;
    public ?float $tpFormation = 0;
    public ?float $projetFormation = 0;

    public ?string $commentaire = '';
    public bool $apc = false;
    public int $nbNotes = 2;
    public float $coefficient = 1;
    public float $nbEcts = 1;

    public bool $bonification = false;
    public bool $mutualisee = false;

    public ?Groupe $groupeEnfant = null;

    public array $tab_ues = []; // tableau d'UE/Compétences

    public bool $suspendu = false;

    public ?Parcour $parcours = null;
    public ?Collection $apcParcours = null;

    public mixed $objet;
    private ?Collection $groupesEnfant = null;

    public function getUeId(): ?int
    {
        if (false === $this->apc && 1 === count($this->tab_ues)) {
            return $this->tab_ues[0]->ue_id;
        }

        return null;
    }

    public function getUeDisplay(): string
    {
        if (false === $this->apc && 1 === count($this->tab_ues)) {
            return $this->tab_ues[0]->ue_display;
        }

        return '';
    }

    public function getUeNumero(): ?int
    {
        if (false === $this->apc && 1 === count($this->tab_ues)) {
            return $this->tab_ues[0]->ue_numero;
        }

        return null;
    }

    /**  ne-pas-exporter */
    public function getJson(): array
    {
        return [
            'id' => $this->id,
            'typeMatiere' => $this->typeMatiere,
            'libelle' => $this->libelle,
            'display' => $this->display,
            'cmFormation' => $this->cmFormation,
            'tdFormation' => $this->tdFormation,
            'tpFormation' => $this->tpFormation,
            'ptutFormation' => $this->projetFormation,
            'cmPpn' => $this->cmPpn,
            'tdPpn' => $this->tdPpn,
            'tpPpn' => $this->tpPpn,
            'ptutPpn' => $this->projetPpn,
        ];
    }

    /**  ne-pas-exporter */
    public function getParcours(): ?Parcour
    {
        if (\App\Entity\Matiere::SOURCE === $this->typeMatiere) {
            return $this->parcours;
        }

        return null;
    }

    public function isSuspendu(): bool
    {
        return $this->suspendu;
    }

    /** ne-pas-exporter */
    public function getTypeIdMatiere(): string
    {
        return $this->typeMatiere . '_' . $this->id;
    }

    public function getTypeIdMatiereMcc(): string
    {
        //todo: artificiellement ajouté pour gérer le cas de MCC qui a besoin de deux colonnes...
        return $this->typeMatiere . '_' . $this->id;
    }

    /** ne-pas-exporter */
    public function getEqTdFormation(): float
    {
        return $this->cmFormation * Constantes::MAJORATION_CM + $this->tdFormation + $this->tpFormation;
    }

    /** ne-pas-exporter */
    public function getEtuFormation(): float
    {
        return $this->cmFormation + $this->tdFormation + $this->tpFormation;
    }

    public function isParent(): bool
    {
        if (method_exists($this->objet, 'isParent')) {
            return $this->objet->isParent();
        }

        return false;
    }

    public function isEnfant(): bool
    {
        if (method_exists($this->objet, 'isEnfant')) {
            return $this->objet->isEnfant();
        }

        return false;
    }

    public function groupesEnfant(): ?Collection
    {
        if (method_exists($this->objet, 'groupesEnfant')) {
            $this->groupesEnfant = $this->objet->groupesEnfant();

            return $this->objet->groupesEnfant();
        }

        return null;
    }

    public function containsGroupesEnfant(Groupe $groupe): bool
    {
        if (null === $this->groupesEnfant) {
            $this->groupesEnfant();
        }

        if ($this->groupesEnfant->count() > 0) {
            return $this->groupesEnfant->contains($groupe);
        }

        return true;
    }

    public function containSemestre(Semestre $semestre): bool
    {
        $semestres = $this->getSemestres();
        if (null !== $semestres) {
            return $semestres->contains($semestre);
        }

        return false;
    }

    public function parent(): mixed
    {
        return true === $this->isEnfant() ? $this->objet->getApcRessourceEnfantEnfants()[0]->getApcRessourceParent() : null;
    }

    public function enfants(): ?Collection
    {
        return true === $this->isParent() ? $this->objet->getApcRessourceParentEnfants() : null;
    }

    public function getSemestres(): ?Collection
    {
        if (method_exists($this->objet, 'getSemestres')) {
            return $this->objet->getSemestres();
        }

        if (method_exists($this->objet, 'getSemestre')) {
            $coll = new ArrayCollection();
            $coll->add($this->objet->getSemestre());

            return $coll;
        }

        return null;
    }

    public function semestre(): ?Semestre
    {
        if (false === $this->mutualisee) {
            return $this->objet->getSemestre();
        }

        return null;
    }

    public function getDiplome(): ?Diplome
    {
        if ($this->getSemestres()?->count() > 0) {
            return $this->getSemestres()?->first()->getDiplome()->getParent() ?? $this->getSemestres()?->first()->getDiplome();
        }

        return null;
    }

    public function getDiplomeDisplay(): ?string
    {
        return $this->getDiplome()?->getDisplay();
    }

    public function hasProjet(): bool
    {
        return $this->typeMatiere === ApcSae::SOURCE;
    }
}
