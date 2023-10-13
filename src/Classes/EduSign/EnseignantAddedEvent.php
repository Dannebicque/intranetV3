<?php

namespace App\Classes\EduSign;

use Symfony\Contracts\EventDispatcher\Event;

class EnseignantAddedEvent extends Event
{
    private $enseignantId;

    public function __construct(int $enseignantId)
    {
        $this->enseignantId = $enseignantId;
    }

    public function getEnseignantId(): int
    {
        return $this->enseignantId;
    }
}