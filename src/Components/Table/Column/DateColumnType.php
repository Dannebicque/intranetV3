<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Column/DateColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:01
 */

namespace App\Components\Table\Column;

use Carbon\CarbonInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DateColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        return $value instanceof CarbonInterface ? $value->format($options['format']) : (string)$value;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('format', 'd/m/Y')
            ->setAllowedTypes('format', 'string');
    }
}
