<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class AppExtension extends AbstractExtension
{
    /**
     * @return array
     */
    public function getFilters(): array
    {
        return array(
            new TwigFilter('tel_format', array($this, 'telFormat')),
        );
    }

    /**
     * @param $number
     *
     * @return null|string
     */
    public function telFormat($number): ?string
    {
        $str = '';
        str_replace(['.', '-', ' '], '', $number);
        if (\strlen($number) === 10)
        {
            $str = chunk_split($number, 2, ' ');
        } else
        {
            $str = $number;
        }

        return $str;
    }
}