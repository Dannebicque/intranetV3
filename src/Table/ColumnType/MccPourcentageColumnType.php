<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ColumnType/MccPourcentageColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:08
 */

namespace App\Table\ColumnType;

use Dannebicque\TableBundle\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MccPourcentageColumnType extends PropertyColumnType
{
    public function renderProperty(mixed $value, array $options): string
    {
        $mccs = $options['mccs'];
        if (array_key_exists($value, $mccs)) {
            if ($mccs[$value]['pourcentage'] == 100) {
                return '<span class="badge bg-success"> ' . $mccs[$value]['pourcentage'] . '%</span> ';
            }

            return '<span class="badge bg-warning"> ' . $mccs[$value]['pourcentage'] . '%</span> ';
        }

        return '<span class="badge bg-warning">0%</span>';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
        $resolver->setDefault('mccs', []);
    }
}
