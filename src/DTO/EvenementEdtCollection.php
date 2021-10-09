<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/EvenementEdtCollection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/10/2021 18:26
 */

namespace App\DTO;


class EvenementEdtCollection
{
    /** @var \App\DTO\EvenementEdt[] */
    public array $evenements = [];

    public function add(EvenementEdt $event)
    {
        $this->evenements[] = $event;
    }

    /**
     * @return \App\DTO\EvenementEdt[]
     */
    public function getEvents(): array
    {
        return $this->evenements;
    }
}
