<?php

namespace App\Twig;

use ReflectionClass;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class HtmlExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('fqn', [$this, 'fqn']),
        ];
    }

    public function fqn(object $value): string
    {
        $object = new ReflectionClass($value);
        return $object->getNamespaceName().'\\'.$object->getShortName();

    }
}
