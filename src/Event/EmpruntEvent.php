<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Event/EmpruntEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:46
 */

namespace App\Event;

use App\Entity\Emprunt;
use Symfony\Contracts\EventDispatcher\Event;

class EmpruntEvent extends Event
{
    final public const CHGT_ETAT_EMPRUNT_DEMANDE = 'chgt.emprunt.demande';
    final public const CHGT_ETAT_EMPRUNT_ACCEPTE = 'chgt.emprunt.accepte';
    final public const CHGT_ETAT_EMPRUNT_REFUS = 'chgt.emprunt.refus';

    public function __construct(protected Emprunt $emprunt)
    {
    }

    public function getEmprunt(): Emprunt
    {
        return $this->emprunt;
    }
}
