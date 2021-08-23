<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Column.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/08/2021 13:34
 */

namespace App\Components\Table;

use App\Components\Table\Column\ColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class Column
{
    public const TYPE_STRING = 'string';
    public const TYPE_BADGE = 'badge';
    public const TYPE_DATE = 'date';

    protected string $name;
    protected ColumnType $columnType;
    protected array $options = [];

    public function __construct(string $name, ColumnType $columnType, array $options = [])
    {
        $this->name = $name;
        $this->columnType = $columnType;

        $resolver = new OptionsResolver();
        ColumnType::__configureOptions($resolver);

        $resolver
            ->setDefault('id', $name)
            ->setDefault('is_safe_html', true);

        $columnType->configureOptions($resolver);
        $this->options = $resolver->resolve($options);
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getTypeColumn(): string
    {
        return $this->columnType::class;
    }

    public function getOptions(): array
    {
        return $this->options;
    }

//    public function configureOptions(OptionsResolver $resolver)
//    {
//        $resolver->setDefaults([
//            'translation_domain' => 'table',
//            'sortable' => true,
//            'masquable' => false,
//            'label' => null,
//        ]);
//        $resolver->setAllowedValues('sortable', [false, true, 'ASC', 'DESC']);
//
//    }

    public function isSortable()
    {
        return false !== $this->options['sortable'];
    }

    public function getDefaultOrder(): ?string
    {
        return is_string($this->options['sortable']) ? $this->options['sortable'] : 'DESC';
    }

    public function getOption(string $key)
    {
        return $this->options[$key];
    }

    public function render($object)
    {
        return $this->columnType->render($object, $this->options);
    }

    public function updateOptions(array $options)
    {
        $this->options = array_merge($this->options, $options);
    }
}
