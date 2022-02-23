<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Column/PropertyColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 20:09
 */

namespace App\Components\Table\Column;

use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\PropertyAccess\PropertyAccessorInterface;

class PropertyColumnType extends ColumnType
{
    protected PropertyAccessorInterface $accessor;

    /**
     * PropertyColumn constructor.
     */
    public function __construct()
    {
        $this->accessor = PropertyAccess::createPropertyAccessor();
    }

    public function render(mixed $rowData, array $options): string
    {
        return $this->renderProperty($this->accessor->getValue($rowData, $options['property_path']), $options);
    }

    public function renderProperty(mixed $value, array $options): string
    {
        return (string) $value;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('property_path', function (Options $options) {
                return $options['id'];
            })
            ->setAllowedTypes('property_path', 'string')
            ->setDefault('order', null)
            ->setDefault('order_by', function (Options $options) {
                return $options['property_path'];
            });
    }
}
