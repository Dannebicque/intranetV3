<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Enums/DecisionSemestreEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/07/2023 18:14
 */

namespace App\Enums;

enum DecisionSemestreEnum: string
{
    case SEMESTRE_EN_COURS = 'E.C.'; //'En cours';
    case SEMESTRE_VALIDE = 'V'; //'Validé';
    case SEMESTRE_NON_VALIDE = 'NV'; //'Non Validé';
    case SEMESTRE_DEMISSIONNAIRE = 'DEM'; //'Démission';
    case SEMESTRE_REORIENTE = 'REOR'; //'Réorientation';
    case SEMESTRE_VCJ = 'VCJ';
    case SEMESTRE_VCA = 'VCA';
    case SEMESTRE_BLANCHIMENT = 'BL'; //'Blanchimenent';

    case SEMESTRE_DECISION_REPORTEE = 'DR'; //'Blanchimenent';

    public function color(): string
    {
        return match ($this) {
            self::SEMESTRE_EN_COURS => 'info',
            self::SEMESTRE_VALIDE => 'success',
            self::SEMESTRE_NON_VALIDE => 'danger',
            self::SEMESTRE_DEMISSIONNAIRE => 'warning',
            self::SEMESTRE_REORIENTE => 'warning',
            self::SEMESTRE_VCJ => 'success',
            self::SEMESTRE_VCA => 'success',
            self::SEMESTRE_BLANCHIMENT => 'info',
            self::SEMESTRE_DECISION_REPORTEE => 'info',
            default => 'info',
        };
    }

}
