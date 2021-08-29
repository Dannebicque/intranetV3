<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/StatusAbsenceColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 09:32
 */

namespace App\Table\ColumnType;

use App\Components\Table\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StatusAbsenceColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        $absences = $options['absences'];
        $data = explode('_', $value);
        if (null !== $value) {
            if (count($absences) > 0) {
                if (array_key_exists($data[0], $absences)) {
                    if (array_key_exists($data[1], $absences[$data[0]])) {
                        if (array_key_exists($data[2], $absences[$data[0]][$data[1]])) {
                            if (true === $absences[$data[0]][$data[1]][$data[2]]) {
                                return '<span class="badge badge-success">Absence justifiée</span>';
                            }

                            return '<span class="badge badge-danger">Absence non justifiée</span>';
                        }
                    }
                }
            }
        }

        return '<span class="badge badge-warning">Pas d\'absence saisie</span>';

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
        $resolver->setDefault('absences', []);
    }
}
