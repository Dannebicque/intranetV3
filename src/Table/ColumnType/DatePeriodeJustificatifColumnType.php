<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ColumnType/DatePeriodeJustificatifColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:08
 */

namespace App\Table\ColumnType;

use Dannebicque\TableBundle\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DatePeriodeJustificatifColumnType extends PropertyColumnType
{
    public function renderProperty(mixed $value, array $options): string
    {
        return 'Du '.$value['dateHeureDebut']->format('d/m/Y H:i').' au '.$value['dateHeureFin']->format('d/m/Y H:i');
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
