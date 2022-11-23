<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Event/SousCommissionEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/11/2022 07:31
 */

namespace App\Event;

use App\Entity\ScolaritePromo;
use Symfony\Contracts\EventDispatcher\Event;

class SousCommissionEvent extends Event
{
    final public const PUBLISHED = 'souscommission.publiee';

    public function __construct(protected ScolaritePromo $scolaritePromo)
    {
    }

    public function getScolaritePromo(): ScolaritePromo
    {
        return $this->scolaritePromo;
    }
}
