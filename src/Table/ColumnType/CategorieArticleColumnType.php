<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/CategorieArticleColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 12:17
 */

namespace App\Table\ColumnType;

use App\Components\Table\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CategorieArticleColumnType extends PropertyColumnType
{
    public function renderProperty(mixed $value, array $options): string
    {
        if (null === $value) {
            return 'err';
        }

        return '<span class="badge bg-info me-1">'.$value->getLibelle().'</span>';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
