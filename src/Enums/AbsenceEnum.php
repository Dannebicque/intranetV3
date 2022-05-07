<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Enums/AbsenceEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/05/2022 18:52
 */

namespace App\Enums;

enum AbsenceEnum: string implements BadgeEnumInterface
{
    case ABSENCE_JUSTIFIE = 'justifie';
    case ABSENCE_INJUSTIFIEE = 'injustifie';
    case ABSENCE_EN_ATTENTE = '-';
    public function badge(): string
    {
        return match ($this) {
            self::ABSENCE_EN_ATTENTE => 'warning',
            self::ABSENCE_INJUSTIFIEE => 'danger',
            self::ABSENCE_JUSTIFIE => 'success',
        };
    }
}
