<?php


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
