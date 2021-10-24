<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/DatePeriodeJustificatifColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 10:34
 */

namespace App\Table\ColumnType;

use App\Components\Table\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DatePeriodeJustificatifColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        return 'Du '.$value['dateHeureDebut']->format('d/m/Y H:i').' au '.$value['dateHeureFin']->format('d/m/Y H:i');
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
