<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Twig/AppExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/03/2021 06:47
 */

namespace App\Twig;

use App\Classes\Configuration;
use App\Classes\Tools;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

/**
 * Class AppExtension.
 */
class AppExtension extends AbstractExtension
{
    protected Configuration $config;

    public function getFilters(): array
    {
        return [
            new TwigFilter('tel_format', [$this, 'telFormat']),
            new TwigFilter('age', [$this, 'age']),
            new TwigFilter('bg', [$this, 'bg']),
            new TwigFilter('time_ago', [$this, 'timeAgo']),
            new TwigFilter('badge', [$this, 'badge']),
            new TwigFilter('keyWords', [$this, 'keyWords'], ['is_safe' => ['html']]),
            new TwigFilter('escapetitle', [$this, 'escapetitle']),
            new TwigFilter('chr', [$this, 'mychr']),
            new TwigFilter('upper', [$this, 'upper']),
            new TwigFilter('mailto', [$this, 'mailto'], ['is_safe' => ['html']]),
            new TwigFilter('displayGroupes', [$this, 'displayGroupes'], ['is_safe' => ['html']]),
            new TwigFilter('link', [$this, 'link'], ['is_safe' => ['html']]),
            new TwigFilter('border', [$this, 'border']),
            new TwigFilter('format_note', [$this, 'formatNote'], ['is_safe' => ['html']]),
            new TwigFilter('formatHeure', [$this, 'formatHeure']),
        ];
    }

    public function formatHeure($heure)
    {
        return 1 === mb_strlen($heure) ? '0' . $heure : $heure;
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
        return [
            new TwigFunction('settings', [$this, 'getSetting']),
            new TwigFunction('datedujourlong', [$this, 'dateDuJourLong']),
            new TwigFunction('convertHeureEdt', [$this, 'convertHeureEdt']),
        ];
    }

    public function border($statut): string
    {
        switch ($statut) {
            case Personnel::ADMINISTRATIF:
            case Personnel::ASSISTANTE:
                return 'card-outline-warning';
            case Personnel::MCF:
            case Personnel::PU:
                return 'card-outline-primary';
            default:
                return 'card-outline-info';
        }
    }

    public function age($dateNaissance): string
    {
        return Carbon::instance($dateNaissance)->age;
    }

    public function bg($value): string
    {
        if (null === $value) {
            return 'bg-pale-warning';
        }

        return true === $value ? 'bg-pale-success' : 'bg-pale-danger';
    }

    public function displayGroupes(Etudiant $etudiant): string
    {
        $html = '';
        $nbGroupes = \count($etudiant->getGroupes());
        $loop = 0;
        foreach ($etudiant->getGroupes() as $groupe) {
            $html = $groupe->getLibelle();
            if ($loop < $nbGroupes - 1) {
                $html .= ', ';
            }
            ++$loop;
        }

        return $html;
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
     */
    public function upper($texte): string
    {
        return mb_strtoupper($texte);
    }

    /**
     * @param $duree
     */
    public function convertHeureEdt($duree): string
    {
        return Constantes::TAB_HEURES[$duree];
    }

    /**
     * @param $locale
     */
    public function dateDuJourLong($locale): string
    {
        return Carbon::now()->locale($locale)->isoFormat('dddd Do MMMM YYYY');
    }

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
     */
    public function mychr($var): string
    {
        return \chr($var);
    }

    public function escapetitle($texte): ?string
    {
        return str_replace(['<strong>', '</strong>'], '', $texte);
    }

    /**
     * @param $number
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

    public function keyWords($text)
    {
        $t = explode(';', $text);
        $html = '';
        foreach ($t as $word) {
            $html .= '<span class="badge badge-primary">' . $word . '</span>';
        }

        return $html;
    }

    /**
     * @param $number
     */
    public function telFormat($number): ?string
    {
        return Tools::telFormat($number);
    }

    /**
     * @param $locale
     *
     * @return mixed|string
     */
    public function timeAgo(CarbonInterface $date, $locale)
    {
        return $date->locale($locale)->diffForHumans(Carbon::now()->locale('fr'),
            CarbonInterface::DIFF_RELATIVE_TO_NOW);
    }
}
