<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ColumnType/NbEtudiantsColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:08
 */

namespace App\Table\ColumnType;

use Dannebicque\TableBundle\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class NbEtudiantsColumnType extends PropertyColumnType
{
    public function renderProperty(mixed $value, array $options): string
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
