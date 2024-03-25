<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Enums/PlanCoursEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/02/2024 11:35
 */

namespace App\Enums;

enum PlanCoursEnum: string implements BadgeEnumInterface
{
    case NONE = 'NONE';
    case EN_COURS = 'EN_COURS';
    case COMPLET = 'COMPLET';
    public function badge(): string
    {
        return match ($this) {
            self::NONE => 'danger',
            self::EN_COURS => 'warning',
            self::COMPLET => 'success',
        };
    }

    public function libelle(): string
    {
        return match ($this) {
            self::NONE => 'Aucun plan de cours',
            self::EN_COURS => 'Plan de cours en cours',
            self::COMPLET => 'Plan de cours complet',
        };
    }
}
