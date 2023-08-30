<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/SousCommissionExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/07/2023 18:28
 */

namespace App\Twig;

use App\Enums\DecisionSemestreEnum;
use App\Enums\DecisionUeEnum;
use App\Utils\Tools;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use function is_string;

class SousCommissionExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('styleMoyenne', $this->styleMoyenne(...), ['is_safe' => ['html']]),
            new TwigFilter('styleMatiere', $this->styleMatiere(...), ['is_safe' => ['html']]),
            new TwigFilter('styleDecisionSemestre', $this->styleDecisionSemestre(...), ['is_safe' => ['html']]),
            new TwigFilter('styleDecisionUe', $this->styleDecisionUe(...), ['is_safe' => ['html']]),
            new TwigFilter('styleAbsences', $this->styleAbsences(...), ['is_safe' => ['html']]),
            new TwigFilter('styleBonification', $this->styleBonification(...), ['is_safe' => ['html']]),
        ];
    }

    public function styleAbsences(int $nbAbsences): string
    {
        if ($nbAbsences < 5) {
            return '<span class="badge bg-info">' . $nbAbsences . '</span>';
        }

        if ($nbAbsences < 10) {
            return '<span class="badge bg-warning">' . $nbAbsences . '</span>';
        }

        return '<span class="badge bg-danger">' . $nbAbsences . '</span>';
    }

    public function styleMoyenne(mixed $value): string
    {
        $value = Tools::convertToFloat($value);

        if ($value < 8) {
            return '<span class="badge bg-danger">' . number_format($value, 3, ',', ' ') . '</span>';
        }

        if ($value < 10) {
            return '<span class="badge bg-warning">' . number_format($value, 3, ',', ' ') . '</span>';
        }

        return '<span class="badge bg-success">' . number_format($value, 3, ',', ' ') . '</span>';
    }

    public function styleMatiere(mixed $value): string
    {
        $value = Tools::convertToFloat($value);
        if ($value < 10) {
            return '<span class="badge bg-warning">' . number_format($value, 2, ',', ' ') . '</span>';
        }

        return '<span class="badge bg-success">' . number_format($value, 2, ',', ' ') . '</span>';
    }

    public function styleBonification(mixed $value): string
    {
        $value = Tools::convertToFloat($value);

        if ($value > 0) {
            return '<span class="badge bg-success">' . number_format($value, 2, ',', ' ') . '</span>';
        }

        return '<span class="badge bg-primary">' . number_format($value, 2, ',', ' ') . '</span>';
    }

    public function styleDecisionSemestre(DecisionSemestreEnum|string|null $value): string
    {
        if (null === $value) {
            return '-';
        }

        if (is_string($value)) {
            $value = DecisionSemestreEnum::tryFrom($value);
        }

        return '<span class="badge bg-' . $value->color() . '">' . $value->value . '</span>';
    }

    public function styleDecisionUe(DecisionUeEnum|string|null $value): string
    {
        if (null === $value) {
            return '-';
        }

        if (is_string($value)) {
            $value = DecisionUeEnum::tryFrom($value);
        }

        return '<span class="badge bg-' . $value->color() . '">' . $value->value . '</span>';
    }
}
