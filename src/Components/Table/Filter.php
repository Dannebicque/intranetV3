<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Filter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 11:06
 */

namespace App\Components\Table;


class Filter
{
    public const SEARCH = 'search';
    public const SELECT = 'select';
    public const RANGE_DATE = 'range_date';
    public const RANGE = 'range';

    protected string $name;
    protected string $type_filter;
    protected array $columns = [];
    protected array $options = [];

    public function __construct(string $name, string $type_filter, array $columns, array $options)
    {
        $this->name = $name;
        $this->type_filter = $type_filter;
        $this->columns = $columns;
        $this->options = $options;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getTypeFilter(): string
    {
        return $this->type_filter;
    }

    public function getColumns(): array
    {
        return $this->columns;
    }

    public function getOptions(): array
    {
        return $this->options;
    }


}
