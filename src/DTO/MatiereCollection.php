<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/MatiereCollection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\DTO;

class MatiereCollection
{
    /** @var \App\DTO\Matiere[] */
    public array $matieres = [];

    public function add($matiere)
    {
        $this->matieres[] = $matiere;
    }

    /**
     * @return \App\DTO\Matiere[]
     */
    public function getMatieres(): array
    {
        return $this->matieres;
    }

    public function toArray()
    {
        return (array)$this->matieres;
    }
}
