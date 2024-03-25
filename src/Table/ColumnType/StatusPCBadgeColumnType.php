<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ColumnType/StatusPCBadgeColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/02/2024 12:11
 */

namespace App\Table\ColumnType;

use Dannebicque\TableBundle\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StatusPCBadgeColumnType extends PropertyColumnType
{
    public function renderProperty(mixed $value, array $options): string
    {
        if (null === $value) {
            return '<span class="badge bg-danger">Aucun plan de cours</span>';
        }

        return '<span class="badge bg-' . $value->badge() . '">' . $value->libelle() . '</span>';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
