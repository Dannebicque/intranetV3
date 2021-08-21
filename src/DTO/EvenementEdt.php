<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/EvenementEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2021 13:09
 */

namespace App\DTO;

class EvenementEdt
{
    public ?string $date;
    public ?string $jour;
    public ?float $duree;
    public ?string $heure;
    public ?string $matiere;
    public ?string $personnel;
    public ?string $groupe;
    public ?int $groupeId;
    public ?string $typeIdMatiere;
    public ?string $type_cours;
    public ?string $texte = null;
}
