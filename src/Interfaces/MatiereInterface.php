<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Interfaces/MatiereInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/04/2021 20:56
 */

namespace App\Interfaces;


interface MatiereInterface
{
    public function getEqTdFormation(): float;

    public function getEtuFormation(): float;

    public function getDisplay(): string;

    public function getJson(): array;

    public function getCmFormation(): float;

    public function getTdFormation(): float;

    public function getTpFormation(): float;
}
