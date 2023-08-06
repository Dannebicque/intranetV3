<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/UserExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/08/2023 15:41
 */

namespace App\Twig;

use App\Enums\CategorieIutEnum;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class UserExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('badgeStatut', $this->badgeStatut(...), ['is_safe' => ['html']]),
        ];
    }

    public function badgeStatut(string|CategorieIutEnum|null $statut): string
    {
        if (null === $statut) {
            return '<span class="badge bg-secondary">Inconnu</span>';
        }

        if ($statut instanceof CategorieIutEnum) {
            $categorie = $statut;
            $statut = $statut->value;
        }

        if (is_string($statut)) {
            $categorie = CategorieIutEnum::getCategorieFromType($statut);
        }

        if (null === $categorie) {
            return '<span class="badge bg-secondary">Inconnu</span>';
        }

        return '<span class="badge bg-' . $categorie->badge() . '">' . $statut . '</span>';
    }
}
