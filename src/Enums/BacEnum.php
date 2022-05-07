<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Enums/BacEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/05/2022 19:44
 */

namespace App\Enums;

enum BacEnum: string implements BadgeEnumInterface
{
    case SERIE_BAC_GENERAL = 'g';
    case SERIE_BAC_TECHNO = 't';
    case SERIE_BAC_PRO = 'p';
    case SERIE_BAC_ETRANGER = 'e';
    case SERIE_BAC_AUTRE = 'a';

    public function badge(): string
    {
        return match ($this) {
            self::SERIE_BAC_GENERAL => 'info',
            self::SERIE_BAC_TECHNO => 'purple',
            self::SERIE_BAC_PRO => 'warning',
            self::SERIE_BAC_ETRANGER => 'success',
            self::SERIE_BAC_AUTRE => 'danger',
        };
    }
}
