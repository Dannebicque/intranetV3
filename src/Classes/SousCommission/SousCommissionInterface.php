<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/SousCommission/SousCommissionInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/12/2021 09:36
 */

namespace App\Classes\SousCommission;

use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;

interface SousCommissionInterface
{
    public function calcul(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): void;
    public function calculStats(array $bacs): array;
}