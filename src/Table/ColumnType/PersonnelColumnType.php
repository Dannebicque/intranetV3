<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/PersonnelColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 09:32
 */

namespace App\Table\ColumnType;

use App\Components\Table\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PersonnelColumnType extends PropertyColumnType
{
    public function renderProperty(mixed $value, array $options): string
    {
        return null !== $value ? $value->getDisplayPr() : 'erreur';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
