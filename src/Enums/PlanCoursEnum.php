<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Enums/PlanCoursEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/04/2022 14:47
 */

namespace App\Enums;

enum PlanCoursEnum: string implements BadgeEnumInterface
{
    case NONE = 'Aucun';
    case EN_COURS = 'En cours';
    case COMPLET = 'Complet';

    public function badge(): string
    {
        return match($this)
        {
            self::NONE => 'danger',
            self::EN_COURS => 'warning',
            self::COMPLET => 'success',
        };
    }
}
