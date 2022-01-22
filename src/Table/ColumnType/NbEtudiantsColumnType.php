<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/StatusAbsenceColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 12:14
 */

namespace App\Table\ColumnType;

use App\Components\Table\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class NbEtudiantsColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        $effectifs = $options['effectifs'];
        if (array_key_exists($value, $effectifs)) {
            return '<span class="badge bg-info"> '.$effectifs[$value].'</span> ';
        }

        return '<span class="badge bg-warning">0</span>';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
        $resolver->setDefault('effectifs', []);
    }
}
