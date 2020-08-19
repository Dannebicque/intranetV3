<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/EventEdt.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/08/2020 13:10

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
