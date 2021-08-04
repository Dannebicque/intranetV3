<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/TableRegistry.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/07/2021 17:37
 */

namespace App\Components\Table;


use App\Components\Table\Actions\AbstractButtonAction;
use App\Components\Table\Adapter\AbstractAdapter;
use App\Components\Table\Column\ColumnType;
use App\Components\Table\Filters\AbstractFilter;

class TableRegistry
{

    public const TAG_ADAPTER = 'da.table.adapter';
    public const TAG_COLUMN_TYPES = 'da.table.columntypes';
    public const TAG_FILTERS = 'da.table.filters';
    public const TAG_ACTIONS = 'da.table.actions';

    private array $columnTypes = [];
    private array $adapters = [];
    private array $filters = [];
    private array $actions = [];

    public function registerAdapter(string $name, AbstractAdapter $adapter)
    {
        $this->adapters[$name] = $adapter;
    }

    public function registerFilter(string $name, AbstractFilter $filter)
    {
        $this->filters[$name] = $filter;
    }

    public function registerAction(string $name, AbstractButtonAction $filter)
    {
        $this->actions[$name] = $filter;
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

    public function getFilter(string $class)
    {
        //todo: test?
        return $this->filters[$class];
    }

    public function getAction(string $class): AbstractButtonAction
    {
        //todo: test?
        return $this->actions[$class];
    }
}
