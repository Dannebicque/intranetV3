<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ColumnType/SemestresColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/01/2023 17:44
 */

namespace App\Table\ColumnType;

use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SemestresColumnType extends PropertyColumnType
{
    public function renderProperty(mixed $value, array $options): string
    {
        if (null === $value) {
            return 'err';
        }
        $html = '';
        foreach ($value as $semestre) {
            if (null === $semestre) {
                $html .= '<span class="badge badge-warning me-1">Non défini</span>';
            } else {
                $html .= '<span class="badge bg-success me-1">' . $semestre->getLibelle() . '</span>';
            }
        }

        return $html;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
