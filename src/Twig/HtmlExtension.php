<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class HtmlExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/2.x/advanced.html#automatic-escaping
            new TwigFilter('fqn', [$this, 'fqn']),
        ];
    }

    public function fqn($value)
    {
        $object = new \ReflectionClass($value);
        return $object->getNamespaceName().'\\'.$object->getShortName();

    }
}
