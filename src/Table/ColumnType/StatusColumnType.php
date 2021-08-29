<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/StatusColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 09:32
 */

namespace App\Table\ColumnType;

use App\Components\Table\Column\PropertyColumnType;
use App\Entity\Absence;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StatusColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        return Absence::getIconStatus($value);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
