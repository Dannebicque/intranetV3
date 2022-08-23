<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Enums/TypeGroupeEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/08/2022 18:26
 */

namespace App\Enums;

enum TypeGroupeEnum: string implements BadgeEnumInterface
{
    case TYPE_GROUPE_VIDE = '';
    case TYPE_GROUPE_CM = 'CM';
    case TYPE_GROUPE_TD = 'TD';
    case TYPE_GROUPE_TP = 'TP';
    case TYPE_GROUPE_LV = 'LV';

    public function badge(): string
    {
        return match ($this) {
            self::TYPE_GROUPE_CM => 'cm',
            self::TYPE_GROUPE_TD => 'td',
            self::TYPE_GROUPE_TP => 'tp',
            self::TYPE_GROUPE_LV => 'lv'
        };
    }
}
