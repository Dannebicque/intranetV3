<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DataTable/ColumnType/CategorieArticleColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 15:56
 */

namespace App\DataTable\ColumnType;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\DataTable\Column\PropertyColumnType;

class CategorieArticleColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        if (null === $value) {
            return 'err';
        }

        return '<span class="badge badge-info mr-2">' . $value->getLibelle() . '</span>';
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
