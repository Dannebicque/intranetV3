<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Event/AbsenceEvent.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 15/08/2020 09:50

namespace App\Event;

use App\Entity\Absence;
use Symfony\Contracts\EventDispatcher\Event;

class AbsenceEvent extends Event
{
    public const ADDED = 'absence.added';
    public const REMOVED = 'absence.removed';
    public const JUSTIFIED = 'absence.justified';

    /** @var Absence */
    protected $absence;

    public function __construct(Absence $absence)
    {
        $this->absence = $absence;
    }

    public function getAbsence(): Absence
    {
        return $this->absence;
    }
}
