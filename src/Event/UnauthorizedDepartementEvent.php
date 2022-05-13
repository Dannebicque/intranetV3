<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Event/UnauthorizedDepartementEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/05/2022 15:42
 */

namespace App\Event;

use App\Entity\Departement;

class UnauthorizedDepartementEvent
{
    private Departement $departement;
    private string|array|null $attributes;

    public function __construct(Departement $departement, string|array|null $attributes = null)
    {
        $this->departement = $departement;
        $this->attributes = $attributes;
    }

    public function getDepartement(): Departement
    {
        return $this->departement;
    }

    public function getAttributes(): string|array|null
    {
        return $this->attributes;
    }
}
