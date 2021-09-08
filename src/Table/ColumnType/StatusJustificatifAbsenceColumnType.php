<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/StatusJustificatifAbsenceColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/09/2021 16:47
 */

namespace App\Table\ColumnType;

use App\Components\Table\Column\PropertyColumnType;
use App\Entity\AbsenceJustificatif;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StatusJustificatifAbsenceColumnType extends PropertyColumnType
{
    public function renderProperty($value, array $options): string
    {
        if (AbsenceJustificatif::REFUSE === $value) {
            return '<span class="badge badge-danger">Justificatif refusé</span>';
        }

        if (AbsenceJustificatif::ACCEPTE === $value) {
            return '<span class="badge badge-success">Justificatif accepté</span>';
        }

        return '<span class="badge badge-warning">En attente</span>';
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
