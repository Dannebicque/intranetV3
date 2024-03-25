<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/MatiereCollection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\DTO;

class MatiereCollection
{
    /** @var Matiere[] */
    public array $matieres = [];

    public function add(Matiere $matiere): void
    {
        $this->matieres[] = $matiere;
    }

    /**
     * @return Matiere[]
     */
    public function getMatieres(): array
    {
        return $this->matieres;
    }

    public function toArray(): array
    {
        return $this->matieres;
    }
}
