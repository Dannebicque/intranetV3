<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Event/MaterielCommunReservationEvent.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/09/2020 08:25

namespace App\Event;

use App\Entity\MaterielCommunPret;

class MaterielCommunReservationEvent
{

    public const ADDED = 'reservation.added';
    public const REMOVED = 'reservation.removed';

    protected MaterielCommunPret $materielCommunPret;

    public function __construct(MaterielCommunPret $materielCommunPret)
    {
        $this->materielCommunPret = $materielCommunPret;
    }

    public function getReservationMaterielCommun(): MaterielCommunPret
    {
        return $this->materielCommunPret;
    }

}
