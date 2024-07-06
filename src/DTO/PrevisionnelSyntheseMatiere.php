<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/PrevisionnelSyntheseMatiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/07/2024 15:48
 */

namespace App\DTO;

use App\Entity\Semestre;

/**
 * Class PrevisionnelSynthesePersonnel.
 * permet de faire la synthèse pour un personnel en particulier du total de ton prévisionnel
 */
class PrevisionnelSyntheseMatiere
{
    public string $display = '';
    public string $display_code = '';
    public float $totalCM = 0;
    public float $totalTD = 0;
    public float $totalTP = 0;

    public float $totalMaquetteCm = 0;
    public float $totalMaquetteTd = 0;
    public float $totalMaquetteTp = 0;
    public float $totalMaquetteTotal = 0;

    public string $type;

    public function __construct(Previsionnel $previsionnelPersonnel, Matiere $matiere, Semestre $semestre)
    {
        $this->display = $previsionnelPersonnel->matiere_libelle;
        $this->display_code = $previsionnelPersonnel->matiere_code;
        $this->type = $previsionnelPersonnel->type_matiere;
        $this->totalMaquetteCm = $matiere->cmFormation * $semestre->getNbGroupesCm();
        $this->totalMaquetteTd = $matiere->tdFormation * $semestre->getNbGroupesTd();
        $this->totalMaquetteTp = $matiere->tpFormation * $semestre->getNbGroupesTp();
        $this->totalMaquetteTotal = $matiere->cmFormation * $semestre->getNbGroupesCm() + $matiere->tdFormation * $semestre->getNbGroupesTd() + $matiere->tpFormation * $semestre->getNbGroupesTp();
    }

    public function addPrevisionnelMatiere(Previsionnel $previsionnelPersonnel): void
    {
        $this->totalCM += $previsionnelPersonnel->getTotalHCm();
        $this->totalTD += $previsionnelPersonnel->getTotalHTd();
        $this->totalTP += $previsionnelPersonnel->getTotalHTp();
    }

    public function total(): float
    {
        return $this->totalCM + $this->totalTD + $this->totalTP;
    }

    public function diffCm(): float
    {
        return $this->totalCM - $this->totalMaquetteCm;
    }

    public function diffTd(): float
    {
        return $this->totalTD - $this->totalMaquetteTd;
    }

    public function diffTp(): float
    {
        return $this->totalTP - $this->totalMaquetteTp;
    }

    public function diffTotal(): float
    {
        return $this->total() - $this->totalMaquetteTotal;
    }
}
