<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Twig/AppExtension.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/08/2020 10:27

namespace App\Twig;

use App\Entity\Constantes;
use App\Classes\Configuration;
use App\Classes\Tools;
use Carbon\CarbonInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;
use function chr;
use Carbon\Carbon;

/**
 * Class AppExtension
 * @package App\Twig
 */
class AppExtension extends AbstractExtension
{
    /** @var Configuration */
    protected Configuration $config;

    /**
     * AppExtension constructor.
     *
     */
    public function __construct()
    {
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
            new TwigFilter('format_note', [$this, 'formatNote'], ['is_safe' => ['html']]),
            new TwigFilter('formatHeure', [$this, 'formatHeure'])

        );
    }

    public function formatHeure($heure)
    {
        return strlen($heure) === 1 ? '0' . $heure : $heure;
    }

    public function formatNote($note, $nbdecimales = 2, $seuil = 10)
    {
        if ($note < $seuil) {
            return '<span class="badge badge-warning">' . number_format($note, $nbdecimales) . '</span>';
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
        return Carbon::instance($dateNaissance)->age;
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
     * @param $locale
     *
     * @return string
     */
    public function dateDuJourLong($locale): string
    {
        return Carbon::now()->locale($locale)->isoFormat('dddd Do MMMM YYYY');
    }

    /**
     * @param Configuration $config
     */
    public function setConfig(Configuration $config): void
    {
        $this->config = $config;
    }

    public function getSetting($name): string
    {
        return $this->config->get($name);
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
        return Tools::telFormat($number);
    }

    /**
     *
     * @param CarbonInterface $date
     *
     * @param                 $locale
     *
     * @return mixed|string
     */
    public function timeAgo(CarbonInterface $date, $locale)
    {
        return $date->locale($locale)->diffForHumans(Carbon::now()->locale('fr'),
            CarbonInterface::DIFF_RELATIVE_TO_NOW);
    }
}
