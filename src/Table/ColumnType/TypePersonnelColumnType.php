<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/TypePersonnelColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 14:46
 */

namespace App\Table\ColumnType;

use App\Components\Table\Column\PropertyColumnType;
use App\Entity\AbsenceJustificatif;
use App\Entity\Personnel;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypePersonnelColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        if (Personnel::PERMANENT === $value) {
            return '<span class="badge badge-cyan">Permanent</span>';
        }

        if (Personnel::VACATAIRE === $value) {
            return '<span class="badge badge-yellow">Vacataire</span>';
        }

        return '<span class="badge badge-purple">Admin./Tech.</span>';
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
