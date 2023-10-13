<?php

namespace App\Classes\EduSign;

use App\Entity\Personnel;
use Symfony\Contracts\EventDispatcher\Event;

class EnseignantAddedEvent extends Event
{
    private Personnel $enseignant;

    public function __construct(Personnel $enseignant)
    {
        $this->enseignant = $enseignant;
    }

    public function getEnseignant(): Personnel
    {
        return $this->enseignant;
    }
}