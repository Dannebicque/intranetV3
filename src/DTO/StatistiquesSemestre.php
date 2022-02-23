<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/StatistiquesSemestre.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:41
 */

namespace App\DTO;

class StatistiquesSemestre
{
    public int $hommes = 0;
    public int $femmes = 0;
    public int $effectif = 0;
    public array $repartitionBacEffectif = [];
    public array $repartitionBacPourcentage = [];
    public array $repartitionGeographiqueEffectif = [];
    public array $repartitionGeographiquePourcentage = [];

    public function hommePourcentage(): float
    {
        return 0 !== $this->effectif ? $this->hommes / ($this->effectif) * 100 : 0.0;
    }

    public function femmePourcentage(): float
    {
        return 0 !== $this->effectif ? $this->femmes / ($this->effectif) * 100 : 0.0;
    }

    public function addBac(int $idBac): void
    {
        $this->repartitionBacEffectif[$idBac] = 0;
        $this->repartitionBacPourcentage[$idBac] = 0;
    }

    public function calculPourcentageRepartitionBac(): void
    {
        if ($this->effectif > 0) {
            foreach ($this->repartitionBacEffectif as $key => $value) {
                $this->repartitionBacPourcentage[$key] = $value / $this->effectif * 100;
            }
        }
    }

    public function calculPourcentageRepartitionGeographique(): void
    {
        if ($this->effectif > 0) {
            foreach ($this->repartitionGeographiqueEffectif as $key => $value) {
                $this->repartitionGeographiquePourcentage[$key] = $value / $this->effectif * 100;
            }
        }
    }
}
