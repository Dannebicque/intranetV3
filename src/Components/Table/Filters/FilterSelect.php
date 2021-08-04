<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Filters/FilterSelect.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/07/2021 09:06
 */

namespace App\Components\Table\Filters;


use Symfony\Component\OptionsResolver\OptionsResolver;

class FilterSelect extends AbstractFilter implements FilterInterface
{
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('block_name', 'filter_select')
            ->setDefault('expanded', false)
            ->setDefault('multiple', false)
            ->setDefault('options', [])->setRequired('options')->addAllowedTypes('options', 'array');
    }
}
