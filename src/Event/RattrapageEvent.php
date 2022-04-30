<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Event/RattrapageEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:46
 */

namespace App\Event;

use App\Entity\Rattrapage;
use Symfony\Contracts\EventDispatcher\Event;

class RattrapageEvent extends Event
{
    final public const DECISION = 'rattrapage.decision';
    final public const DECISION_RATTRAPAGE_ACCEPTEE = 'decision.rattrapage.acceptee';
    final public const DECISION_RATTRAPAGE_REFUSEE = 'decision.rattrapage.refusee';

    public function __construct(protected Rattrapage $rattrapage)
    {
    }

    public function getRattrapage(): Rattrapage
    {
        return $this->rattrapage;
    }
}
