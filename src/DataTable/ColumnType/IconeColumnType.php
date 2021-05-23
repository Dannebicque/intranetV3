<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DataTable/ColumnType/IconeColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 16:03
 */

namespace App\DataTable\ColumnType;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\DataTable\Column\PropertyColumnType;

class IconeColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        return '<i class="' . $value . '"></i>';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
