<?php


namespace App\Event;

use App\Entity\Absence;
use Symfony\Contracts\EventDispatcher\Event;

class AbsenceEvent extends Event
{
    public const ADDED = 'absence.added';
    public const REMOVED = 'absence.removed';

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
