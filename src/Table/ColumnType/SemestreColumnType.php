<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/SemestreColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 12:18
 */

namespace App\Table\ColumnType;

use App\Components\Table\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SemestreColumnType extends PropertyColumnType
{
    public function renderProperty(mixed $value, array $options): string
    {
        if (null === $value) {
            return 'err';
        }
        $html = '';
        foreach ($value as $semestre) {
            $html .= '<span class="badge bg-success me-1">'.$semestre->getLibelle().'</span>';
        }

        return $html;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
