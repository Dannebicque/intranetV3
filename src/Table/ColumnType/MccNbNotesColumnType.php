<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ColumnType/MccNbNotesColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/12/2022 12:43
 */

namespace App\Table\ColumnType;

use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MccNbNotesColumnType extends PropertyColumnType
{
    public function renderProperty(mixed $value, array $options): string
    {
        $mccs = $options['mccs'];
        if (array_key_exists($value, $mccs)) {
            return '<span class="badge bg-info"> ' . $mccs[$value]['nbNotes'] . '</span> ';
        }

        return '<span class="badge bg-warning">0</span>';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
        $resolver->setDefault('mccs', []);
    }
}
