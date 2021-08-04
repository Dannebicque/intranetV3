<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/Matiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/07/2021 14:03
 */

namespace App\DTO;

use App\Entity\Constantes;
use App\Entity\Semestre;
use Symfony\Component\Serializer\Annotation\Groups;

class Matiere
{
    /**  ne-pas-exporter */
    public int $id;
    public string $typeMatiere;
    public string $libelle;
    public string $display;
    public ?string $codeMatiere;
    public ?string $codeElement;

    public ?float $cmPpn = 0;
    public ?float $tdPpn = 0;
    public ?float $tpPpn = 0;
    public ?float $projetPpn = 0;

    public ?float $cmFormation = 0;
    public ?float $tdFormation = 0;
    public ?float $tpFormation = 0;
    public ?float $projetFormation = 0;

    public ?string $commentaire = '';

    public int $nbNotes = 2;
    public float $coefficient = 1;
    public float $nbEcts = 1;

    public bool $pac = false;

    /**  ne-pas-exporter */
    public int $ue_id;
    public string $ue_display;
    public ?int $ue_numero;

    public bool $suspendu = false;
    public ?Semestre $semestre;
    public $parcours;

    /**  ne-pas-exporter */
    public function getJson()
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
    public function getParcours()
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
    public function getTypeIdMatiere()
    {
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
}
