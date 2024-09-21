<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/HtmlExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/07/2024 15:08
 */

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
            new TwigFilter('fqn', $this->fqn(...)),
            new TwigFilter('nombreHeure', $this->nombreHeure(...)),
            new TwigFilter('badgeDiffence', $this->badgeDiffence(...), ['is_safe' => ['html']]),
            new TwigFilter('badgeDiffenceSemestre', $this->badgeDiffenceSemestre(...), ['is_safe' => ['html']]),
            new TwigFilter('deuxDigits', $this->deuxDigits(...)),
            new TwigFilter('badgeYesNo', $this->badgeYesNo(...), ['is_safe' => ['html']]),
        ];
    }


    // fonction qui affiche un badge danger si négatif, succes si 0 et info au dessus
    public function badgeDiffence(float $value): string
    {
        if ($value < 0) {
            return '<span class="badge bg-danger"><i class="fas fa-arrow-down me-1"></i> ' . number_format($value, 2, ',', ' ') . ' h' . '</span>';
        }
        if ($value > 0) {
            return '<span class="badge bg-success"><i class="fas fa-arrow-up me-1"></i> ' . number_format($value, 2, ',', ' ') . ' h' . '</span>';
        }

        return '<span class="badge bg-info"><i class="fas fa-arrow-right me-1"></i> ' . number_format($value, 2, ',', ' ') . ' h' . '</span>';
    }

    public function badgeDiffenceSemestre(float $value): string
    {
        if ($value < 0) {
            return '<span class="badge bg-warning"><i class="fas fa-arrow-down me-1"></i> ' . number_format($value, 2, ',', ' ') . ' h' . '</span>';
        }
        if ($value > 0) {
            return '<span class="badge bg-danger"><i class="fas fa-arrow-up me-1"></i> ' . number_format($value, 2, ',', ' ') . ' h' . '</span>';
        }

        return '<span class="badge bg-success"><i class="fas fa-equals me-1"></i> ' . number_format($value, 2, ',', ' ') . ' h' . '</span>';
    }

    public function nombreHeure(float $value = 0.0): string
    {
        return number_format($value, 2, ',', ' ') . ' h';
    }

    public function fqn(object $value): string
    {
        $object = new ReflectionClass($value);

        return $object->getNamespaceName() . '\\' . $object->getShortName();
    }

    public function deuxDigits(string $value): string
    {
        return sprintf('%02d', $value);
    }

    public function badgeYesNo(bool $value): string
    {
        if (true === $value) {
            return '<span class="badge bg-success"><i class="fas fa-check me-1"></i> ' . $this->translator->trans('Yes') . '</span>';
        }

        return '<span class="badge bg-danger"><i class="fas fa-ban me-1"></i> ' . $this->translator->trans('No') . '</span>';
    }
}
