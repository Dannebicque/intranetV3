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
    public string $label;
    public string $url;
    public string $transDomain;
    public string $icone;
    public array $transParameters;
    public bool $translatable = true;

    public function __construct(string $label, string $url, string $icone = '', bool $translatable = true, string $transDomain = '', array $transParams = [])
    {
        $this->label = $label;
        $this->url = $url;
        $this->translatable = $translatable;
        $this->transDomain = $transDomain;
        $this->transParameters = $transParams;
        $this->icone = $icone;
    }
}
