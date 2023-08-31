<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/ScolariteApc.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2023 17:40
 */

namespace App\DTO;

class ScolariteApc
{
    public ?string $decision;
    public array $moyenneUes = [];

    public function __construct(\App\Entity\Scolarite $scolarite, array $ues = [])
    {
        $this->decision = $scolarite->getDecision()->value;

        foreach ($scolarite->getMoyennesUes() as $key => $moyenneUe) {
            if (isset($ues[$key])) {
                $this->moyenneUes[$ues[$key]->getNumeroUe()] = $scolarite->getMoyennesUes()[$key];
            }

        }
    }
}
