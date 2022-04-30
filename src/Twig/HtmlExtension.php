<?php

namespace App\Twig;

use ReflectionClass;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class HtmlExtension extends AbstractExtension
{
    public function __construct(private readonly TranslatorInterface $translator)
    {
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('fqn', [$this, 'fqn']),
            new TwigFilter('deuxDigits', [$this, 'deuxDigits']),
            new TwigFilter('badgeYesNo', [$this, 'badgeYesNo'], ['is_safe' => ['html']]),
        ];
    }

    public function fqn(object $value): string
    {
        $object = new ReflectionClass($value);

        return $object->getNamespaceName().'\\'.$object->getShortName();
    }

    public function deuxDigits(string $value): string
    {
        return sprintf('%02d', $value);
    }

    public function badgeYesNo(bool $value): string
    {
        if (true === $value) {
            return '<span class="badge bg-success"><i class="fas fa-check me-1"></i> '.$this->translator->trans('Yes').'</span>';
        }

        return '<span class="badge bg-danger"><i class="fas fa-ban me-1"></i> '.$this->translator->trans('No').'</span>';
    }
}
