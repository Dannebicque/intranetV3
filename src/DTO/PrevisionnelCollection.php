<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/PrevisionnelCollection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/09/2021 11:10
 */

namespace App\DTO;

class PrevisionnelCollection
{
    /** @var \App\DTO\Previsionnel[] */
    public array $previsionnels = [];

    public function add($previsionnel)
    {
        $this->previsionnels[] = $previsionnel;
    }

    /**
     * @return \App\DTO\Previsionnel[]
     */
    public function getPrevisionnels(): array
    {
        return $this->previsionnels;
    }

    public function toArray()
    {
        return (array) $this->previsionnels;
    }
}
