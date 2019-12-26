<?php


namespace App\Event;

use App\Entity\Emprunt;
use Symfony\Contracts\EventDispatcher\Event;

class EmpruntEvent extends Event
{
    public const CHGT_ETAT_EMPRUNT_DEMANDE = 'chgt.emprunt.demande';
    public const CHGT_ETAT_EMPRUNT_ACCEPTE = 'chgt.emprunt.refus';
    public const CHGT_ETAT_EMPRUNT_REFUS = 'chgt.emprunt.accepte';

    /** @var Emprunt */
    protected $emprunt;

    public function __construct(Emprunt $emprunt)
    {
        $this->emprunt = $emprunt;
    }

    public function getEmprunt(): Emprunt
    {
        return $this->emprunt;
    }
}
