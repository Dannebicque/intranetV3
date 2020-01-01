<?php


namespace App\Event;

use App\Entity\AbsenceJustificatif;
use Symfony\Contracts\EventDispatcher\Event;

class JustificatifEvent extends Event
{
    public const DECISION = 'justificatif.decision';
    public const DELETED = 'justificatif.deleted';
    public const DECISION_JUSTIFICATIF_ACCEPTEE = 'decision.justificatif.acceptee';
    public const DECISION_JUSTIFICATIF_REFUSEE = 'decision.justificatif.refusee';

    /** @var AbsenceJustificatif */
    protected $absenceJustificatif;

    public function __construct(AbsenceJustificatif $absenceJustificatif)
    {
        $this->absenceJustificatif = $absenceJustificatif;
    }

    public function getAbsenceJustificatif(): AbsenceJustificatif
    {
        return $this->absenceJustificatif;
    }
}
