<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Column/BadgeColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 13:40
 */

namespace App\Components\Table\Column;

use Symfony\Component\OptionsResolver\OptionsResolver;

class BadgeSeuilColumnType extends PropertyColumnType
{
    public function renderProperty(mixed $value, array $options): string
    {
        foreach ($options['seuils'] as $seuil => $badge) {
            if ($value < $seuil) {
                return sprintf('<span class="badge %s">%s<span>', $badge, $this->displayValue($value, $options));
            }
        }

        return sprintf('<span class="badge %s">%s<span>', $options['badge_defaut'], $this->displayValue($value, $options));
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('seuils', [10 => 'bg-success', 20 => 'bg-warning'])
            ->setDefault('badge_defaut', 'bg-warning')
            ->setDefault('is_safe_html', true);
    }
}
