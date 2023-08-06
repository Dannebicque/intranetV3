<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/PrevisionnelSynthesePersonnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/08/2023 14:45
 */

namespace App\DTO;

/**
 * Class PrevisionnelSynthesePersonnel.
 * permet de faire la synthèse pour un personnel en particulier du total de ton prévisionnel
 */
class PrevisionnelSynthesePersonnel
{
    public string $display = '';
    public float $totalCM = 0;
    public float $totalTD = 0;
    public float $totalTP = 0;
    public string $type;
    public float $nbHeuresService = 0;

    public function __construct(Previsionnel $previsionnelPersonnel)
    {
        $this->display = $previsionnelPersonnel->personnelDisplay();
        $this->type = $previsionnelPersonnel->personnel_type;
        $this->nbHeuresService = $previsionnelPersonnel->nbHeuresService;
    }

    public function addPrevisionnelPersonnel(Previsionnel $previsionnelPersonnel): void
    {
        $this->totalCM += $previsionnelPersonnel->getTotalHCm();
        $this->totalTD += $previsionnelPersonnel->getTotalHTd();
        $this->totalTP += $previsionnelPersonnel->getTotalHTp();
    }

    public function total(): float
    {
        return $this->totalCM + $this->totalTD + $this->totalTP;
    }
}
