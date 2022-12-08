<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ColumnType/SemestreColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Table\ColumnType;

use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
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
