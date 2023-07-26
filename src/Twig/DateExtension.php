<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/DateExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2023 08:11
 */

namespace App\Twig;

use App\Classes\Configuration;
use App\Entity\Constantes;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

/**
 * Class AppExtension.
 */
class DateExtension extends AbstractExtension
{
    protected Configuration $config;

    public function getFilters(): array
    {
        return [
            new TwigFilter('age', $this->age(...)),
            new TwigFilter('time_ago', $this->timeAgo(...)),
            new TwigFilter('formatHeure', $this->formatHeure(...)),
        ];
    }

    public function formatHeure(string $heure): string
    {
        return 1 === mb_strlen($heure) ? '0' . $heure : $heure;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('datedujourlong', $this->dateDuJourLong(...)),
            new TwigFunction('convertHeureEdt', $this->convertHeureEdt(...)),
        ];
    }

    public function age(CarbonInterface $dateNaissance): string
    {
        return (string)Carbon::instance($dateNaissance)->age;
    }

    public function convertHeureEdt(?string $duree): string
    {
        return Constantes::TAB_HEURES[$duree];
    }

    public function dateDuJourLong(?string $locale): string
    {
        return Carbon::now()->locale($locale)->isoFormat('dddd Do MMMM YYYY');
    }

    public function timeAgo(CarbonInterface $date, string $locale = 'fr'): string
    {
        return $date->locale($locale)->diffForHumans(Carbon::now()->locale('fr'),
            CarbonInterface::DIFF_RELATIVE_TO_NOW);
    }
}
