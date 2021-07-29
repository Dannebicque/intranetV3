<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/TableRegistry.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 18:38
 */

namespace App\Components\Table;


use App\Components\Table\Adapter\AbstractAdapter;
use App\Components\Table\Column\ColumnType;

class TableRegistry
{

    public const TAG_ADAPTER = 'da.table.adapter';
    public const TAG_COLUMN_TYPES = 'da.table.columntypes';
    protected array $columnTypes = [];
    private array $adapters = [];

    public function registerAdapter(string $name, AbstractAdapter $adapter)
    {
        $this->adapters[$name] = $adapter;
    }

    public function registerColumnType(string $name, ColumnType $adapter)
    {
        $this->columnTypes[$name] = $adapter;
    }

    public function getAdapter(string $class)
    {
        //todo: test?
        return $this->adapters[$class];
    }

    public function getColumnType(string $class)
    {
        //todo: test?
        return $this->columnTypes[$class];
    }
}
