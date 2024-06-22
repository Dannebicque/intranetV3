<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/Ue.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/06/2024 08:45
 */

namespace App\DTO;

class Ue
{
    public int $ue_id = 0;
    public string $ue_display = '-';
    public ?float $ue_coefficient = 0;
    public ?array $ue_coefficients = [];
    public int $ue_numero = 0;
    public string $ue_couleur = '';
    public int $ue_apc_id;
}
