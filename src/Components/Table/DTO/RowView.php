<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/DTO/RowView.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 13:40
 */

namespace App\Components\Table\DTO;

class RowView implements \JsonSerializable
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
