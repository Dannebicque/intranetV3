<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/TypeMatiereExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/04/2024 14:57
 */

namespace App\Twig;

use App\Enums\TypeMatiereEnum;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class TypeMatiereExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('badgeTypeMatiere', $this->badgeTypeMatiere(...), ['is_safe' => ['html']]),
        ];
    }

    public function badgeTypeMatiere(string|TypeMatiereEnum|null $statut): string
    {
        if (null === $statut) {
            return '<span class="badge bg-danger">Inconnu</span>';
        }

        if ($statut instanceof TypeMatiereEnum) {
            $typeMatiere = $statut;
            $statut = $statut->value;
        }

        if (is_string($statut)) {
            $typeMatiere = TypeMatiereEnum::from($statut);
        }

        if (null === $typeMatiere) {
            return '<span class="badge bg-secondary">Inconnu</span>';
        }

        return '<span class="badge bg-' . $typeMatiere->badge() . '">' . $typeMatiere->getLibelle() . '</span>';
    }
}
