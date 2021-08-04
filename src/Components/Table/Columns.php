<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Columns.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/07/2021 18:13
 */

namespace App\Components\Table;


class Columns
{
    /** @var \App\Components\Table\Column[] */
    private array $columns = [];

    public function addColumn(Column $column)
    {
        $this->columns[$column->getName()] = $column;
    }

    public function getColumns(): array
    {
        return $this->columns;
    }

    public function get(string $name)
    {
        return $this->columns[$name];
    }
}
