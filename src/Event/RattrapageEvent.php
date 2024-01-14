<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Event/RattrapageEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/01/2024 17:39
 */

namespace App\Event;

use App\Entity\Rattrapage;
use Symfony\Contracts\EventDispatcher\Event;

class RattrapageEvent extends Event
{
    final public const DECISION = 'rattrapage.decision';
    final public const DECISION_RATTRAPAGE_ACCEPTEE = 'decision.rattrapage.acceptee';
    final public const DECISION_RATTRAPAGE_REFUSEE = 'decision.rattrapage.refusee';
    final public const RATTRAPAGE_MAIL_DEMANDE = 'rattrapage.mail.demande';

    public function __construct(protected Rattrapage $rattrapage)
    {
    }

    public function getRattrapage(): Rattrapage
    {
        return $this->rattrapage;
    }
}
