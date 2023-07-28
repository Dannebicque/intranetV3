<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Enums/DecisionUeEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/07/2023 18:14
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
    case UE_DECISION_REPORTEE = 'DR'; //'Blanchimenent';

    public function color(): string
    {
        return match ($this) {
            self::UE_EN_COURS => 'info',
            self::UE_VALIDE => 'success',
            self::UE_NON_VALIDE => 'danger',
            self::UE_DEMISSIONNAIRE => 'warning',
            self::UE_REORIENTE => 'warning',
            self::UE_VCJ => 'success',
            self::UE_VCA => 'success',
            self::UE_BLANCHIMENT => 'info',
            self::UE_DECISION_REPORTEE => 'info',
            default => 'info',
        };
    }
}
