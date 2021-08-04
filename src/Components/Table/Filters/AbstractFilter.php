<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Filters/AbstractFilter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/07/2021 11:58
 */

namespace App\Components\Table\Filters;


use Symfony\Component\OptionsResolver\OptionsResolver;

abstract class AbstractFilter
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefault('name', '')
            ->setRequired('name')
            ->setDefault('label', '')
            ->setDefault('placeholder', '');
    }

    public function render()
    {

    }
}
