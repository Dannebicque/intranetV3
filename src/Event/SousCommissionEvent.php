<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Event/SousCommissionEvent.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/12/2020 14:35

namespace App\Event;

use App\Entity\ScolaritePromo;
use Symfony\Contracts\EventDispatcher\Event;

class SousCommissionEvent extends Event
{
    public const PUBLISHED = 'sooscommission.publiee';

    /** @var ScolaritePromo */
    protected $scolaritePromo;

    public function __construct(ScolaritePromo $scolaritePromo)
    {
        $this->scolaritePromo = $scolaritePromo;
    }

    /**
     * @return ScolaritePromo
     */
    public function getScolaritePromo(): ScolaritePromo
    {
        return $this->scolaritePromo;
    }


}
