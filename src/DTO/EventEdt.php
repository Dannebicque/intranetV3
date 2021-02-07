<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/EventEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:41
 */

namespace App\DTO;

class EventEdt
{
    public int $id;
    public int $debut;
    public ?int $fin;
    public $duree;
    public string $texte;
    public ?string $couleur;
    public ?string $couleurTexte;
    public string $format;
}
