<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Event/UnauthorizedDepartementEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 09:59
 */

namespace App\Event;

use App\Entity\Departement;

class UnauthorizedDepartementEvent
{
    public function __construct(private readonly Departement $departement, private $attributes = null)
    {
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
