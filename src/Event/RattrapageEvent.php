<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Event/RattrapageEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:51
 */

namespace App\Event;

use App\Entity\Rattrapage;
use Symfony\Contracts\EventDispatcher\Event;

class RattrapageEvent extends Event
{
    public const DECISION = 'rattrapage.decision';
    public const DECISION_RATTRAPAGE_ACCEPTEE = 'decision.rattrapage.acceptee';
    public const DECISION_RATTRAPAGE_REFUSEE = 'decision.rattrapage.refusee';

    /** @var Rattrapage */
    protected $rattrapage;

    public function __construct(Rattrapage $rattrapage)
    {
        $this->rattrapage = $rattrapage;
    }

    public function getRattrapage(): Rattrapage
    {
        return $this->rattrapage;
    }
}
