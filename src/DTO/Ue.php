<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/Ue.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/10/2021 10:36
 */

namespace App\DTO;

class Ue
{
    public int $ue_id = 0;
    public string $ue_display = '-';
    public ?float $ue_coefficient = 0;
    public int $ue_numero = 0;
    public string $ue_couleur = '';
    public int $ue_apc_id;
}
