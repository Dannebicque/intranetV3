<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Event/CarnetEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:46
 */

namespace App\Event;

use App\Entity\CahierTexte;
use Symfony\Contracts\EventDispatcher\Event;

class CarnetEvent extends Event
{
    final public const ADDED = 'carnet.added';

    public function __construct(protected CahierTexte $carnet)
    {
    }

    public function getCahierTexte(): CahierTexte
    {
        return $this->carnet;
    }
}
