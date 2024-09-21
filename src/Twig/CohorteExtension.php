<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/CohorteExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/09/2024 19:59
 */

namespace App\Twig;

use App\Classes\Configuration;
use App\Enums\DecisionSemestreEnum;
use App\Utils\Tools;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

/**
 * Class AppExtension.
 */
class CohorteExtension extends AbstractExtension
{
    protected Configuration $config;

    public function getFilters(): array
    {
        return [
            new TwigFilter('badgeColorDecision', $this->badgeColorDecision(...)),

        ];
    }

    public function badgeColorDecision(mixed $decision): ?string
    {
        if (!($decision instanceof DecisionSemestreEnum)) {
            $decision = DecisionSemestreEnum::tryFrom($decision);
        }

        return $decision->color();
    }

    public function keyWords(?string $text): string
    {
        $t = explode(',', (string)$text);
        $html = '';
        foreach ($t as $word) {
            if ('' !== trim($word)) {
                $html .= '<span class="badge bg-primary">' . $word . '</span>&nbsp;';
            }
        }

        return $html;
    }

    public function telFormat(?string $number): ?string
    {
        return Tools::telFormat($number);
    }

    public function siretFormat(?string $number): ?string
    {
        return Tools::siretFormat($number);
    }
}
