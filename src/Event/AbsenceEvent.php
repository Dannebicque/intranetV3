<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Event/AbsenceEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:51
 */

namespace App\Event;

use App\Entity\Absence;
use Symfony\Contracts\EventDispatcher\Event;

class AbsenceEvent extends Event
{
    final public const ADDED = 'absence.added';
    final public const REMOVED = 'absence.removed';
    final public const JUSTIFIED = 'absence.justified';

    public function __construct(protected Absence $absence)
    {
    }

    public function getAbsence(): Absence
    {
        return $this->absence;
    }
}
