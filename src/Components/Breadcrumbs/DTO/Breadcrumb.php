<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Breadcrumbs/DTO/Breadcrumb.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/12/2021 12:44
 */

namespace App\Components\Breadcrumbs\DTO;

class Breadcrumb
{
    public function __construct(public string $label, public string $url, public string $icone = '', public bool $translatable = true, public string $transDomain = '', public array $transParameters = [])
    {
    }
}
