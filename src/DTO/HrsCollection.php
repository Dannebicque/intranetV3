<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/HrsCollection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/07/2023 15:33
 */

namespace App\DTO;

use App\Entity\Hrs;
use App\Enums\TypeHrsEnum;

class HrsCollection
{
    public array $hrs = [];
    public float $total = 0.0;
    public array $totalTypeHrs = [];

    public function __construct()
    {
        foreach (TypeHrsEnum::getTypes() as $typeHrs) {
            $this->totalTypeHrs[$typeHrs->value] = 0.0;
        }
    }


    public function addHrs(Hrs $hrs): self
    {
        $this->hrs[] = $hrs;
        $this->total += $hrs->getNbHeuresTd();
        if (null !== $hrs->getTypeHrs() && array_key_exists($hrs->getTypeHrs()->getType()->value, $this->totalTypeHrs)) {
            $this->totalTypeHrs[$hrs->getTypeHrs()->getType()->value] += $hrs->getNbHeuresTd();
        }

        return $this;
    }
}
