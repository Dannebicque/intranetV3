<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Enums/DecisionSemestreEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:32
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
            self::SEMESTRE_VALIDE, self::SEMESTRE_VCA, self::SEMESTRE_VCJ => 'success',
            self::SEMESTRE_NON_VALIDE => 'danger',
            self::SEMESTRE_DEMISSIONNAIRE, self::SEMESTRE_REORIENTE => 'warning',
            default => 'info',
        };
    }

}
