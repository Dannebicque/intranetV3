<?php
/*
 * Copyright (c) 2025. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Enums/DecisionUeEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/07/2025 08:38
 */

namespace App\Enums;

enum DecisionUeEnum: string
{
    case UE_EN_COURS = 'E.C.'; //'En cours';
    case UE_VALIDE = 'V'; //'Validé';
    case UE_NON_VALIDE = 'NV'; //'Non Validé';
    case UE_DEMISSIONNAIRE = 'DEM'; //'Démission';
    case UE_REORIENTE = 'REO'; //'Réorientation';
    case UE_VCJ = 'VCJ';
    case UE_VCA = 'VCA';
    case UE_BLANCHIMENT = 'BL'; //'Blanchimenent';
    case UE_DEFAILLANT = 'DEF'; //'Défaillant';
    case UE_DECISION_REPORTEE = 'DR'; //'Blanchimenent';

    public function color(): string
    {
        return match ($this) {
            self::UE_VALIDE, self::UE_VCJ, self::UE_VCA => 'success',
            self::UE_NON_VALIDE, self::UE_DEFAILLANT => 'danger',
            self::UE_DEMISSIONNAIRE, self::UE_REORIENTE => 'warning',
            default => 'info',
        };
    }
}
