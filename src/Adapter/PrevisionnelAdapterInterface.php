<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/PrevisionnelAdapterInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/05/2021 18:44
 */

namespace App\Adapter;


use App\DTO\Previsionnel;
use App\DTO\PrevisionnelCollection;

interface PrevisionnelAdapterInterface
{
    public function collection(array $previsionnels): PrevisionnelCollection;

    public function single(array $previ): Previsionnel;
}
