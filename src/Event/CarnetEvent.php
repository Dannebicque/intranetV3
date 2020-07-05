<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Event/CarnetEvent.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Event;

use App\Entity\CahierTexte;
use Symfony\Contracts\EventDispatcher\Event;

class CarnetEvent extends Event
{
    public const ADDED = 'carnet.added';

    /** @var CahierTexte */
    protected $carnet;

    public function __construct(CahierTexte $carnet)
    {
        $this->carnet = $carnet;
    }

    public function getCahierTexte(): CahierTexte
    {
        return $this->carnet;
    }
}
