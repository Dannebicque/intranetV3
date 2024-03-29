<?php

/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/Components/Alert.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/03/2024 09:18
 */

namespace App\Twig\Components;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent]
final class Alert
{
    public string $type = 'info';
    public ?string $titre = null;

    public function getIcone(): string
    {
        return match ($this->type) {
            'danger' => 'fa-times-circle',
            'warning' => 'fa-exclamation-circle',
            'info' => 'fa-info-circle',
            'success' => 'fa-check-circle',
            default => 'fa-info-circle',
        };
    }
}
