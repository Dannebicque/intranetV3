<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Event/RattrapageEvent.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

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
