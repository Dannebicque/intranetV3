<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/SousCommission/SousCommissionManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/08/2022 17:26
 */

namespace App\Classes\SousCommission;

use App\Entity\Semestre;

class SousCommissionManager
{
    public function __construct(
        public SousCommission $sousCommission,
        public SousCommissionApc $sousCommissionApc
    ) {
    }

    public function getSousCommission(Semestre $semestre): SousCommissionInterface
    {
        if (true === $semestre->getDiplome()?->isApc()) {
            return $this->sousCommissionApc;
        }

        return $this->sousCommission;
    }
}
