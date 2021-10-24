<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/TypePersonnelColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 12:16
 */

namespace App\Table\ColumnType;

use App\Components\Table\Column\PropertyColumnType;
use App\Entity\Personnel;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypePersonnelColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        if (Personnel::PERMANENT === $value) {
            return '<span class="badge bg-cyan">Permanent</span>';
        }

        if (Personnel::VACATAIRE === $value) {
            return '<span class="badge bg-yellow">Vacataire</span>';
        }

        return '<span class="badge bg-purple">Admin./Tech.</span>';
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
