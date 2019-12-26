<?php


namespace App\Event;

use App\Entity\CahierTexte;
use Symfony\Contracts\EventDispatcher\Event;

class CarnetEvent extends Event
{
    public const ADDED = 'carnet.added';

    /** @var CahierTexte */
    protected $carnet;

    public function __construct(CahierTexte $carnet)
    {
        $this->carnet = $carnet;
    }

    public function getCahierTexte(): CahierTexte
    {
        return $this->carnet;
    }
}
