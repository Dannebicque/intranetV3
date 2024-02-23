<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ColumnType/TypePersonnelColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:43
 */

namespace App\Table\ColumnType;

use App\Entity\Personnel;
use Dannebicque\TableBundle\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypePersonnelColumnType extends PropertyColumnType
{
    public function renderProperty(mixed $value, array $options): string
    {
        if (Personnel::PERMANENT === $value) {
            return '<span class="badge bg-cyan">Permanent</span>';
        }

        if (Personnel::VACATAIRE === $value) {
            return '<span class="badge bg-yellow">Vacataire</span>';
        }

        return '<span class="badge bg-purple">Admin./Tech.</span>';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
