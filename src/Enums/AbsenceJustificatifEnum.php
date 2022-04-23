<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Enums/AbsenceJustificatifEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/04/2022 08:30
 */

namespace App\Enums;

enum AbsenceJustificatifEnum: string implements BadgeEnumInterface
{
    case ACCEPTE = 'A';
    case REFUSE = 'R';
    case DEPOSE = 'D';

    public function badge(): string
    {
        return match($this)
        {
            self::DEPOSE => 'info',
            self::REFUSE => 'danger',
            self::ACCEPTE => 'success',
        };
    }
}
