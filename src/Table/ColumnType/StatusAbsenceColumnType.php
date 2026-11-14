<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ColumnType/StatusAbsenceColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/11/2026 20:41
 */

namespace App\Table\ColumnType;

use App\Entity\Rattrapage;
use Dannebicque\TableBundle\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StatusAbsenceColumnType extends PropertyColumnType
{
    public function render(mixed $rowData, array $options): string
    {
        $value = $this->accessor->getValue($rowData, $options['property_path']);
        $absences = $options['absences'];
        $data = explode('_', (string)$value);
        if ((null !== $value) && ((is_countable($absences) ? count($absences) : 0) > 0) &&
            array_key_exists($data[0], $absences) &&
            array_key_exists($data[1], $absences[$data[0]]) &&
            array_key_exists($data[2],
                $absences[$data[0]][$data[1]])) {
            if (true === $absences[$data[0]][$data[1]][$data[2]]) {
                return '<span class="badge bg-success">Absence justifiée</span>';
            }

            $html = '<span class="badge bg-danger">Absence non justifiée</span>';
            if ($rowData instanceof Rattrapage && Rattrapage::DEMANDE_ACCEPTEE === $rowData->getEtatDemande()) {
                $html .= '<br><span class="badge bg-warning text-dark mt-1" title="Demande acceptée alors que l\'absence est injustifiée !"><i class="fas fa-exclamation-triangle"></i> Accordé injustifié</span>';
            }

            return $html;
        }

        return '<span class="badge bg-warning">Pas d\'absence saisie</span>';
    }

    public function renderProperty(mixed $value, array $options): string
    {
        $absences = $options['absences'];
        $data = explode('_', (string) $value);
        if ((null !== $value) && ((is_countable($absences) ? count($absences) : 0) > 0) &&
            array_key_exists($data[0], $absences) &&
            array_key_exists($data[1], $absences[$data[0]]) &&
            array_key_exists($data[2],
                $absences[$data[0]][$data[1]])) {
            if (true === $absences[$data[0]][$data[1]][$data[2]]) {
                return '<span class="badge bg-success">Absence justifiée</span>';
            }

            return '<span class="badge bg-danger">Absence non justifiée</span>';
        }

        return '<span class="badge bg-warning">Pas d\'absence saisie</span>';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
        $resolver->setDefault('absences', []);
    }
}
