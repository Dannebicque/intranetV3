<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/StatusJustificatifAbsenceColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 12:14
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
            return '<span class="badge bg-danger">Justificatif refusé</span>';
        }

        if (AbsenceJustificatif::ACCEPTE === $value) {
            return '<span class="badge bg-success">Justificatif accepté</span>';
        }

        return '<span class="badge bg-warning">En attente</span>';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
