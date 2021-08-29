<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/TableRegistry.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 14:37
 */

namespace App\Components\Table;

use App\Components\Table\Adapter\TableAdapter;
use App\Components\Table\Column\ColumnType;

/**
 * Registry used for Columns / adapter and DataTableType
 */
class TableRegistry
{
    public const TAG_TABLE_TYPE = 'da.table.type';
    public const TAG_COLUMN_TYPE = 'da.table.columntype';
    public const TAG_ADAPTER = 'da.table.adapter';

    /**
     * @var TableType[]
     */
    protected array $types = [];

    /**
     * @var ColumnType[]
     */
    protected array $columnTypes = [];

    /**
     * @var TableAdapter[]
     */
    protected array $adapters = [];

    // DataTable Type

    public function registerType(string $name, TableType $type)
    {
        $this->types[$name] = $type;
    }

    public function getType(string $name): TableType
    {
        if (!isset($this->types[$name])) {
            throw new \InvalidArgumentException(sprintf('Table "%s" doesn\'t exist, maybe you have forget to register it ?',
                $name));
        }

        return $this->types[$name];
    }

    // Column Type

    public function registerColumnType(string $name, ColumnType $columnType)
    {
        $this->columnTypes[$name] = $columnType;
    }

    public function getColumnType(string $name): ColumnType
    {
        if (!isset($this->columnTypes[$name])) {
            throw new \InvalidArgumentException(sprintf('Column "%s" doesn\'t exist, maybe you have forget to register it ?',
                $name));
        }

        return $this->columnTypes[$name];
    }

    // Adaptater (type)

    public function registerAdapter(string $name, TableAdapter $adapter)
    {
        $this->adapters[$name] = $adapter;
    }

    public function getAdapter(string $name): TableAdapter
    {
        if (!isset($this->adapters[$name])) {
            throw new \InvalidArgumentException(sprintf('Adapter "%s" doesn\'t exist, maybe you have forget to register it ?',
                $name));
        }

        return $this->adapters[$name];
    }
}
