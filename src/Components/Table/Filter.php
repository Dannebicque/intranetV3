<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Filter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/08/2021 13:34
 */

namespace App\Components\Table;


use App\Components\Table\Column\ColumnType;
use App\Components\Table\Filters\AbstractFilter;
use Symfony\Component\OptionsResolver\OptionsResolver;

class Filter
{
    public const SEARCH = 'search';
    public const SELECT = 'select';
    public const RANGE_DATE = 'range_date';
    public const RANGE = 'range';

    protected string $name;
    protected AbstractFilter $filter;
    protected array $columns = [];
    protected array $options = [];

    public function __construct(string $name, AbstractFilter $filter, array $columns, array $options)
    {
        $this->name = $name;
        $this->filter = $filter;
        $this->columns = $columns;

        $resolver = new OptionsResolver();
        $resolver
            ->setDefault('id', $name) //transformer en unique??
            ->setDefault('name', $name)
            ->setDefault('columns', $columns)
            ->setDefault('is_safe_html', true);
        $filter->configureOptions($resolver);
        $this->options = $resolver->resolve($options);
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getColumns(): array
    {
        return $this->columns;
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function render()
    {
        $this->filter->render();
    }

    public function getFilter()
    {
        return $this->filter;
    }
}
