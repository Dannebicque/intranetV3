<?php

namespace App\Classes\EduSign;

use Symfony\Contracts\EventDispatcher\Event;

class EnseignantUpdatedEvent extends Event
{
    private $id;

    public function __construct($id)
    {
        $this->id = $id;
    }

    public function getEnseignantId()
    {
        return $this->id;
    }
}