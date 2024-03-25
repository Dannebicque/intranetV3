<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/PrevisionnelCollection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\DTO;

class PrevisionnelCollection
{
    /** @var Previsionnel[] */
    public array $previsionnels = [];

    public float $nbHCm = 0.0;
    public float $nbHTd = 0.0;
    public float $nbHTp = 0.0;
    public int $nbGrCm = 0;
    public int $nbGrTd = 0;
    public int $nbGrTp = 0;
    public float $totalCm = 0;
    public float $totalTd = 0;
    public float $totalTp = 0;

    public float $totalEtudiantCm = 0;
    public float $totalEtudiantTd = 0;
    public float $totalEtudiantTp = 0;
    public float $totalEqTD = 0;
    public float $totalEqTDMajore = 0;

    public function add(Previsionnel $previsionnel): void
    {
        $this->previsionnels[] = $previsionnel;

        $this->nbHCm += $previsionnel->nbHCm;
        $this->nbHTd += $previsionnel->nbHTd;
        $this->nbHTp += $previsionnel->nbHTp;

        $this->nbGrCm += $previsionnel->nbGrCm;
        $this->nbGrTd += $previsionnel->nbGrTd;
        $this->nbGrTp += $previsionnel->nbGrTp;

        $this->totalCm += $previsionnel->nbHCm * $previsionnel->nbGrCm;
        $this->totalTd += $previsionnel->nbHTd * $previsionnel->nbGrTd;
        $this->totalTp += $previsionnel->nbHTp * $previsionnel->nbGrTp;

        $this->totalEqTD += $previsionnel->nbHCm * $previsionnel->nbGrCm + $previsionnel->nbHTd * $previsionnel->nbGrTd + $previsionnel->nbHTp * $previsionnel->nbGrTp;
        $this->totalEqTDMajore += ($previsionnel->nbHCm * $previsionnel->nbGrCm) * 1.5 + $previsionnel->nbHTd * $previsionnel->nbGrTd + $previsionnel->nbHTp * $previsionnel->nbGrTp;
    }

    /**
     * @return Previsionnel[]
     */
    public function getPrevisionnels(): array
    {
        return $this->previsionnels;
    }

    public function toArray(): array
    {
        return $this->previsionnels;
    }
}
