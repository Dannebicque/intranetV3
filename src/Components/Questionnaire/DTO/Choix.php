<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/DTO/Choix.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\Questionnaire\DTO;

class Choix
{
    public array $totalReponses = [];
    public int $nbReponsesTotal = 0;
    public array $autre = [];

    public function pourcentageReponse(string $cle): float
    {
        return $this->nbReponsesTotal > 0 && isset($this->totalReponses[$cle]) ? round(($this->totalReponses[$cle] / $this->nbReponsesTotal) * 100,
            2) : 0;
    }
//    public function pourcentage(): float
//    {
//        return $this->nbReponsesTotal > 0 ? round($this->nbReponses / $this->nbReponsesTotal * 100, 2) : 0;
//    }
}
