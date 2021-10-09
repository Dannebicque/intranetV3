<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/DTO/RowView.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:11
 */

namespace App\Components\Table\DTO;

use JsonSerializable;

class RowView implements JsonSerializable
{
    public array $data = [];

    public string $class = '';

    public array $attr = [];

    public function jsonSerialize(): array
    {
        $json = $this->data;
        $json['DT_RowClass'] = $this->class;
        $json['DT_RowAttr'] = $this->attr;

        return $json;
    }
}
