<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Enums/TypeGroupeEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/07/2022 11:40
 */

namespace App\Enums;

enum TypeGroupeEnum: string implements BadgeEnumInterface
{
    case TYPE_GROUPE_CM = 'CM';
    case TYPE_GROUPE_TD = 'TD';
    case TYPE_GROUPE_TP = 'TP';
    case TYPE_GROUPE_LV = 'LV';

    public function badge(): string
    {
        return match ($this) {
            self::TYPE_GROUPE_CM => 'warning',
            self::TYPE_GROUPE_TD => 'danger',
            self::TYPE_GROUPE_TP => 'success',
            self::TYPE_GROUPE_LV => 'success'
        };
    }
}
