<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/SemestreColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 12:18
 */

namespace App\Table\ColumnType;

use App\Components\Table\Column\ColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DepartementsColumnType extends ColumnType
{
    public function render(mixed $rowData, array $options): string
    {
        if (null === $rowData) {
            return 'err';
        }
        $html = '';
        foreach ($rowData->getPersonnelDepartements() as $departement) {
            $html .= '<span class="badge bg-primary me-1">'.$departement->getDepartement()?->getLibelle().'</span>';
        }

        return $html;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
