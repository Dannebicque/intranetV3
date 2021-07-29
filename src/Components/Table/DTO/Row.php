<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/DTO/Row.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 18:38
 */

namespace App\Components\Table\DTO;


class Row implements \JsonSerializable
{
    public array $data = [];

    // public string $class = '';

    //public array $attr = [];

    public function jsonSerialize(): array
    {
        $json = $this->data;
//        $json['DT_RowClass'] = $this->class;
//        $json['DT_RowAttr'] = $this->attr;

        return $json;
    }

}
