<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class ApcExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/2.x/advanced.html#automatic-escaping
            new TwigFilter('badgeApcUe', [$this, 'badgeApcUe'], ['is_safe' => ['html']]),
        ];
    }

//    public function getFunctions(): array
//    {
//        return [
//            new TwigFunction('function_name', [$this, 'doSomething']),
//        ];
//    }

    public function badgeApcUe($value)
    {
        if ($value < 8) {
            return '<span class="badge bg-danger">'.number_format($value,3).'</span>';
        }

        if ($value < 10) {
            return '<span class="badge bg-warning">'.number_format($value,3).'</span>';
        }

        return '<span class="badge bg-success">'.number_format($value,3).'</span>';
    }
}
