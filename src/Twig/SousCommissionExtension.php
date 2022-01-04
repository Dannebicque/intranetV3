<?php

namespace App\Twig;

use App\Entity\Constantes;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class SousCommissionExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('styleMoyenne', [$this, 'styleMoyenne'], ['is_safe' => ['html']]),
            new TwigFilter('styleMatiere', [$this, 'styleMatiere'], ['is_safe' => ['html']]),
            new TwigFilter('styleDecision', [$this, 'styleDecision'], ['is_safe' => ['html']]),
            new TwigFilter('styleAbsences', [$this, 'styleAbsences'], ['is_safe' => ['html']]),
        ];
    }

    public function styleAbsences($nbAbsences): string
    {
        if ($nbAbsences < 5) {
            return $nbAbsences;
        }

        if ($nbAbsences < 10) {
            return '<span class="badge badge-warning">'.$nbAbsences.'</span>';
        }

        return '<span class="badge badge-danger">'.$nbAbsences.'</span>';
    }

    public function styleMoyenne($value): string
    {
        if ($value < 8) {
            return '<span class="badge bg-danger">'.number_format($value, 3).'</span>';
        }

        if ($value < 10) {
            return '<span class="badge bg-warning">'.number_format($value, 3).'</span>';
        }

        return '<span class="badge bg-success">'.number_format($value, 3).'</span>';
    }

    public function styleMatiere($value): string
    {
        if ($value < 10) {
            return '<span class="badge bg-warning">'.number_format($value, 2).'</span>';
        }

        return '<span class="badge bg-success">'.number_format($value, 2).'</span>';
    }

    public function styleDecision($value): string
    {
        if ($value === null) {
            return '-';
        }

        if (Constantes::UE_NON_VALIDE === $value) {
            return '<span class="badge bg-danger">'.Constantes::UE_NON_VALIDE.'</span>';
        }

        return '<span class="badge bg-success">'.Constantes::UE_VALIDE.'</span>';
    }
}
