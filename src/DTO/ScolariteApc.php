<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/ScolariteApc.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/09/2023 11:48
 */

namespace App\DTO;

use App\Enums\DecisionSemestreEnum;

class ScolariteApc
{
    public ?DecisionSemestreEnum $decision;
    public array $moyenneUes = [];

    public function __construct(\App\Entity\Scolarite $scolarite, array $ues = [])
    {
        $this->decision = $scolarite->getDecision();

        foreach ($scolarite->getMoyennesUes() as $key => $moyenneUe) {
            if (isset($ues[$key])) {
                $this->moyenneUes[$ues[$key]->getNumeroUe()] = $scolarite->getMoyennesUes()[$key];
            }

        }
    }
}
