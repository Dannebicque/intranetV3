<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DataTable/ColumnType/GroupeEtudiantColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 14:21
 */

namespace App\DataTable\ColumnType;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\DataTable\Column\PropertyColumnType;

class GroupeEtudiantColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        if (null === $value) {
            return 'err';
        }
        $html = '';
        foreach ($value as $gr) {
            $html = '<span class="badge badge-success mr-2">' . $gr->getLibelle() . '</span>';
        }

        return $html;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
