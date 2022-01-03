<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class SousCommissionExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('styleMoyenne', [$this, 'styleMoyenne'], ['is_safe' => ['html']]),
            new TwigFilter('styleMatiere', [$this, 'styleMatiere'], ['is_safe' => ['html']]),
        ];
    }


    public function styleMoyenne($value)
    {
        if ($value < 8) {
            return '<span class="badge bg-danger">'.number_format($value,3).'</span>';
        }

        if ($value < 10) {
            return '<span class="badge bg-warning">'.number_format($value,3).'</span>';
        }

        return '<span class="badge bg-success">'.number_format($value,3).'</span>';
    }

    public function styleMatiere($value)
    {
        if ($value < 10) {
            return '<span class="badge bg-warning">'.number_format($value,2).'</span>';
        }

        return '<span class="badge bg-success">'.number_format($value,2).'</span>';
    }
}
