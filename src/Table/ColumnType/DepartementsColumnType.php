<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ColumnType/DepartementsColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Table\ColumnType;

use DavidAnnebicque\TableBundle\Column\ColumnType;
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
