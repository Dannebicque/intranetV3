<?php

namespace App\Twig;

use App\Entity\Constantes;
use App\MesClasses\Configuration;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

/**
 * Class AppExtension
 * @package App\Twig
 */
class AppExtension extends AbstractExtension
{
/** @var Configuration */
    protected $config;

    private $tabMois;
    private $tabJour;

    /**
     * AppExtension constructor.
     */
    public function __construct()
    {
        $this->tabMois = array(
            '01' => 'janvier',
            '02' => 'février',
            '03' => 'mars',
            '04' => 'avril',
            '05' => 'mai',
            '06' => 'juin',
            '07' => 'juillet',
            '08' => 'août',
            '09' => 'septembre',
            '10' => 'octobre',
            '11' => 'novembre',
            '12' => 'décembre'
        );
        $this->tabJour = array('', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche');

    }
    /**
     * @return array
     */
    public function getFilters(): array
    {
        return array(
            new TwigFilter('tel_format', [$this, 'telFormat']),
            new TwigFilter('time_ago', [$this, 'timeAgo']),
            new TwigFilter('badge', [$this, 'badge']),
            new TwigFilter('escapetitle', [$this, 'escapetitle']),
            new TwigFilter('chr', [$this, 'mychr']),
            new TwigFilter('upper', [$this, 'upper']),

        );
    }

    public function getFunctions() {
        return array(
            new \Twig_SimpleFunction('settings', array($this, 'getSetting')),
            new \Twig_SimpleFunction('datedujourlong', array($this, 'dateDuJourLong')),
            new \Twig_SimpleFunction('convertHeureEdt', array($this, 'convertHeureEdt')),

        );
    }

    /**
     * @param $texte
     * @return string
     */
    public function upper($texte)
    {
        return mb_strtoupper($texte);
    }

    /**
     * @param $duree
     *
     * @return string
     */
    public function convertHeureEdt($duree)
    {
        return Constantes::TAB_HEURES[$duree];
    }

    /**
     * @return string
     */
    public function dateDuJourLong()
    {
        return $this->dateTexte(new \DateTime('now'));
    }

    /**
     * @param \DateTime $date
     * @return string
     */
    public function dateTexte(\DateTime $date)
    {
        return $this->tabJour[$date->format('N')] . ' ' . $date->format('d') . ' ' . $this->tabMois[$date->format('m')] . ' ' . $date->format('Y');
    }

    /**
     * @param Configuration $config
     */
    public function setConfig(Configuration $config) {
        $this->config = $config;
    }

    public function getSetting($name) {
        return $this->config->get($name);
    }

    /**
     * @param $var
     * @return string
     */
    public function mychr($var):string
    {
        return \chr($var);
    }

    public function escapetitle($texte): ?string
    {
        return str_replace(['<strong>', '</strong>'], '', $texte);
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

        return '';
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

        if ($diff < 60) {
            // it happened now
            return Constantes::TIMEBEFORE_NOW;
        } elseif ($diff < 3600) {
            // it happened X minutes ago
            return str_replace(
                '{num}',
                $out = round($diff / 60),
                $out == 1 ? Constantes::TIMEBEFORE_MINUTE : Constantes::TIMEBEFORE_MINUTES
            );
        } elseif ($diff < 3600 * 24) {
            // it happened X hours ago
            return str_replace(
                '{num}',
                $out = round($diff / 3600),
                $out == 1 ? Constantes::TIMEBEFORE_HOUR : Constantes::TIMEBEFORE_HOURS
            );
        } elseif ($diff < 3600 * 24 * 2) {
            // it happened yesterday
            return Constantes::TIMEBEFORE_YESTERDAY;
        } else {
            // falling back on a usual date format as it happened later than yesterday
            return strftime(date(
                'Y',
                $time
            ) == date('Y') ? Constantes::TIMEBEFORE_FORMAT : Constantes::TIMEBEFORE_FORMAT_YEAR, $time);
        }
    }
}
