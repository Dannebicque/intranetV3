<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Columns.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 13:20
 */

namespace App\Components\Table;


class Columns
{
    /** @var \App\Components\Table\Column[] */
    private array $columns = [];

    public function addColumn(Column $column)
    {
        $this->columns[] = $column;
    }

    public function getColumns(): array
    {
        return $this->columns;
    }
}
