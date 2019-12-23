<?php

namespace App\Event;

use App\Entity\Absence;
use Symfony\Contracts\EventDispatcher\Event;

class AbsenceRemovedEvent extends Event
{
    public const NAME = 'absence.removed';

    protected $absence;

    public function __construct(Absence $absence)
    {
        $this->absence = $absence;
    }

    public function getAbsence()
    {
        return $this->absence;
    }
}
