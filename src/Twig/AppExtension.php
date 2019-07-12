<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Twig/AppExtension.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/3/19 7:18 AM
 */

namespace App\Twig;

use App\Entity\Constantes;
use App\MesClasses\Configuration;
use DateTime;
use Exception;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;
use function chr;
use function strlen;

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
            new TwigFilter('age', [$this, 'age']),
            new TwigFilter('time_ago', [$this, 'timeAgo']),
            new TwigFilter('badge', [$this, 'badge']),
            new TwigFilter('escapetitle', [$this, 'escapetitle']),
            new TwigFilter('chr', [$this, 'mychr']),
            new TwigFilter('upper', [$this, 'upper']),
            new TwigFilter('mailto', [$this, 'mailto'], ['is_safe' => ['html']]),
            new TwigFilter('link', [$this, 'link'], ['is_safe' => ['html']]),
            new TwigFilter('border', [$this, 'border']),
            new TwigFilter('format_note', [$this, 'format_note'],['is_safe' => ['html']]),

        );
    }

    public function format_note($note, $nbdecimales = 2, $seuil = 10)
    {
        if ($note < $seuil)
        {
            return '<span class="badge badge-warning">'.number_format($note, $nbdecimales).'</span>';
        }
        return number_format($note, $nbdecimales);
    }

    public function getFunctions(): array
    {
        return array(
            new TwigFunction('settings', array($this, 'getSetting')),
            new TwigFunction('datedujourlong', array($this, 'dateDuJourLong')),
            new TwigFunction('convertHeureEdt', array($this, 'convertHeureEdt')),

        );
    }

    public function border($statut): string
    {
        switch ($statut){
            case 'TEC':
            case 'ASS':
                return 'card-outline-warning';
            case 'MCF':
            case 'PU':
                return 'card-outline-primary';
            default:
                return 'card-outline-info';
        }
    }

    public function age($dateNaissance): string
    {
        //return floor((time() - strtotime($dateNaissance->format('d-m-Y'))) / 3600 / 24 / 365);

        return date_diff(new DateTime('now'), $dateNaissance)->format('%Y');
    }

    public function mailto($email): string
    {
        return '<a href="mailto:' . $email . '" target="_blank">' . $email . '</a>';
    }

    public function link($link): string
    {
        return '<a href="' . $link . '" target="_blank">' . $link . '</a>';
    }

    /**
     * @param $texte
     * @return string
     */
    public function upper($texte): string
    {
        return mb_strtoupper($texte);
    }

    /**
     * @param $duree
     *
     * @return string
     */
    public function convertHeureEdt($duree): string
    {
        return Constantes::TAB_HEURES[$duree];
    }

    /**
     * @return string
     * @throws Exception
     */
    public function dateDuJourLong(): string
    {
        return $this->dateTexte(new DateTime('now'));
    }

    /**
     * @param DateTime $date
     *
     * @return string
     */
    public function dateTexte(DateTime $date): string
    {
        return $this->tabJour[$date->format('N')] . ' ' . $date->format('d') . ' ' . $this->tabMois[$date->format('m')] . ' ' . $date->format('Y');
    }

    /**
     * @param Configuration $config
     */
    public function setConfig(Configuration $config): void
    {
        $this->config = $config;
    }

    public function getSetting($name) {
        return $this->config::get($name);
    }

    /**
     * @param $var
     * @return string
     */
    public function mychr($var):string
    {
        return chr($var);
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
        if (strlen($number) === 10) {
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
