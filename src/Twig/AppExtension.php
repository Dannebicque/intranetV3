<?php

namespace App\Twig;

use App\Entity\Constantes;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

/**
 * Class AppExtension
 * @package App\Twig
 */
class AppExtension extends AbstractExtension
{
    /**
     * @return array
     */
    public function getFilters(): array
    {
        return array(
            new TwigFilter('tel_format', array($this, 'telFormat')),
            new TwigFilter('time_ago', array($this, 'timeAgo')),
            new TwigFilter('badge', array($this, 'badge')),
        );
    }

    /**
     * @param $number
     *
     * @return null|string
     */
    public function badge($number): ?string
    {
        if ($number >= 5 && $number < 10) {
            return 'badge badge-warning';
        }

        if ($number >= 10 && $number < 20) {
            return 'badge badge-danger';
        }

        if ($number >= 20) {
            return 'badge badge-dark';
        }
    }

    /**
     * @param $number
     *
     * @return null|string
     */
    public function telFormat($number): ?string
    {
        str_replace(['.', '-', ' '], '', $number);
        if (\strlen($number) === 10) {
            $str = chunk_split($number, 2, ' ');
        } else {
            $str = $number;
        }

        return $str;
    }

    /**
     * @param $time
     *
     * @return mixed|string
     */
    public function timeAgo($time)
    {
        $time = strtotime($time->format('Y-m-d H:i:s'));
        $now = time(); // current time
        $diff = $now - $time; // difference between the current and the provided dates

        if ($diff < 60) // it happened now
        {
            return Constantes::TIMEBEFORE_NOW;
        } elseif ($diff < 3600) // it happened X minutes ago
        {
            return str_replace('{num}', $out = round($diff / 60),
                $out == 1 ? Constantes::TIMEBEFORE_MINUTE : Constantes::TIMEBEFORE_MINUTES);
        } elseif ($diff < 3600 * 24) // it happened X hours ago
        {
            return str_replace('{num}', $out = round($diff / 3600),
                $out == 1 ? Constantes::TIMEBEFORE_HOUR : Constantes::TIMEBEFORE_HOURS);
        } elseif ($diff < 3600 * 24 * 2) // it happened yesterday
        {
            return Constantes::TIMEBEFORE_YESTERDAY;
        } else // falling back on a usual date format as it happened later than yesterday
        {
            return strftime(date('Y',
                $time) == date('Y') ? Constantes::TIMEBEFORE_FORMAT : Constantes::TIMEBEFORE_FORMAT_YEAR, $time);
        }
    }
}