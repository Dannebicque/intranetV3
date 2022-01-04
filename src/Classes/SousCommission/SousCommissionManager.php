<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/SousCommission/SousCommissionManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/12/2021 09:31
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
        if (true === $semestre->getDiplome()?->getTypeDiplome()?->getApc()) {
            return $this->sousCommissionApc;
        }

        return $this->sousCommission;
    }
}
