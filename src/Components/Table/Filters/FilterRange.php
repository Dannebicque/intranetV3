<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Filters/FilterRange.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/07/2021 09:20
 */

namespace App\Components\Table\Filters;


use Symfony\Component\OptionsResolver\OptionsResolver;

class FilterRange extends AbstractFilter implements FilterInterface
{
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('block_name', 'filter_range')
            ->setDefault('label_1', 'lbl1')
            ->setDefault('label_2', 'lbl2');
    }
}
