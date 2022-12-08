<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ColumnType/TypePersonnelColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Table\ColumnType;

use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
use App\Entity\Personnel;
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
