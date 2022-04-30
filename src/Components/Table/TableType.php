<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/TableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 14:37
 */

namespace App\Components\Table;

use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TableType
{
    // FIXME : statically called to avoid to have add parent::configureOptions() on all inherit Type class
    final public static function __configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setRequired('id')
            ->setAllowedTypes('id', 'string')
            ->setDefined('class')
            ->setAllowedTypes('class', 'string')
            ->setDefault('paging', true)
            ->setAllowedTypes('paging', 'bool')
            ->setDefault('length_change', false)
            ->setAllowedTypes('length_change', 'bool')
            ->setDefault('length_menu', [30, 60, 90, 120, 150, 180])
            ->setAllowedTypes('length_menu', 'array')
            ->setRequired('page_length')
            ->setAllowedTypes('page_length', 'int')
            ->setDefault('orderable', true)
            ->setAllowedTypes('orderable', 'bool')
            ->setDefault('template', 'components/table/table.html.twig')
            ->setAllowedTypes('template', 'string');

        $resolver
            ->setDefault('load_url', null)
            ->setAllowedTypes('load_url', ['string', 'null'])
            ->setDefault('rowreorder_url', null)
            ->setAllowedTypes('rowreorder_url', ['string', 'null']);

        $resolver
            ->setDefault('toolbar_form_name', fn(Options $options) => sprintf('%s_tbf', $options['id']))
            ->setAllowedTypes('toolbar_form_name', 'string')
            ->setDefault('toolbar_form_options', [
                'validation_groups' => false,
                'csrf_protection' => false,
                'label' => false,
                'required' => false,
                'method' => 'GET',
            ])
            ->setAllowedTypes('toolbar_form_options', 'array')
            ->setDefault('toolbar_template', 'components/table/filters.html.twig')
            ->setAllowedTypes('toolbar_template', 'string')
            ->setDefault('toolbar_form_data', null);
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
    }
}
