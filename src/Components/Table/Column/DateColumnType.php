<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Column/DateColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 18:38
 */

namespace App\Components\Table\Column;

use Symfony\Component\OptionsResolver\OptionsResolver;

class DateColumnType extends PropertyColumnType
{
    /**
     * {@inheritdoc}
     */
    public function renderProperty($value, array $options): string
    {
        return $value instanceof \DateTimeInterface ? $value->format($options['format']) : (string)$value;
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('format', 'd/m/Y')
            ->setAllowedTypes('format', 'string');
    }
}
