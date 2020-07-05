<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Event/JustificatifEvent.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

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
