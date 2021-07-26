<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/EvenementEdtCollection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2021 14:45
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
}
