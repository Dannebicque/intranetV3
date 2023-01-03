<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/AppExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/01/2023 17:57
 */

namespace App\Twig;

use App\Classes\Configuration;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Utils\Tools;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;
use function chr;
use function count;

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
            new TwigFilter('siret_format', [$this, 'siretFormat']),
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
            new TwigFilter('formatDifference', [$this, 'formatDifference'], ['is_safe' => ['html']]),
        ];
    }

    public function formatHeure(string $heure): string
    {
        return 1 === mb_strlen($heure) ? '0'.$heure : $heure;
    }

    public function formatNote(float $note, int $nbdecimales = 2, float $seuil = 10): string
    {
        if ($note < $seuil) {
            return '<span class="badge bg-warning">'.number_format($note, $nbdecimales).'</span>';
        }

        return number_format($note, $nbdecimales);
    }

    public function formatDifference(int|float $valeur): string
    {
        if (0 !== $valeur) {
            return '<span class="badge bg-warning">'.$valeur.'</span>';
        }

        return '<span class="badge bg-success">'.$valeur.'</span>';
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('settings', [$this, 'getSetting']),
            new TwigFunction('datedujourlong', [$this, 'dateDuJourLong']),
            new TwigFunction('convertHeureEdt', [$this, 'convertHeureEdt']),
        ];
    }

    public function border(string $statut): string
    {
        return match ($statut) {
            Personnel::ADMINISTRATIF, Personnel::ASSISTANTE => 'card-outline-warning',
            Personnel::MCF, Personnel::PU => 'card-outline-primary',
            default => 'card-outline-info',
        };
    }

    public function age(CarbonInterface $dateNaissance): string
    {
        return (string) Carbon::instance($dateNaissance)->age;
    }

    public function bg(?bool $value): string
    {
        if (null === $value) {
            return 'bg-pale-warning';
        }

        return true === $value ? 'bg-pale-success' : 'bg-pale-danger';
    }

    public function displayGroupes(Etudiant $etudiant): string
    {
        $html = '';
        $nbGroupes = count($etudiant->getGroupes());
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

    public function mailto(?string $email): string
    {
        if (null === $email) {
            return '';
        }

        return '<a href="mailto:'.$email.'" target="_blank">'.$email.'</a>';
    }

    public function link(?string $link): string
    {
        if (null === $link) {
            return '';
        }

        return '<a href="'.$link.'" target="_blank">'.$link.'</a>';
    }

    public function upper(?string $texte): string
    {
        if (null === $texte) {
            return '';
        }

        return mb_strtoupper($texte);
    }

    public function convertHeureEdt(?string $duree): string
    {
        return Constantes::TAB_HEURES[$duree];
    }

    public function dateDuJourLong(?string $locale): string
    {
        return Carbon::now()->locale($locale)->isoFormat('dddd Do MMMM YYYY');
    }

    public function setConfig(Configuration $config): void
    {
        $this->config = $config;
    }

    public function getSetting(string $name): string
    {
        return $this->config->get($name);
    }

    public function mychr(int $var): string
    {
        return chr($var);
    }

    public function escapetitle(?string $texte): ?string
    {
        return str_replace(['<strong>', '</strong>'], '', $texte);
    }

    public function badge(float|int $number): ?string
    {
        if ($number >= 5 && $number < 10) {
            return 'badge bg-warning';
        }

        if ($number >= 10 && $number < 20) {
            return 'badge bg-danger';
        }

        if ($number >= 20) {
            return 'badge bg-dark';
        }

        return '';
    }

    public function keyWords(?string $text): string
    {
        $t = explode(',', (string) $text);
        $html = '';
        foreach ($t as $word) {
            if ('' !== trim($word)) {
                $html .= '<span class="badge bg-primary">'.$word.'</span>&nbsp;';
            }
        }

        return $html;
    }

    public function telFormat(?string $number): ?string
    {
        return Tools::telFormat($number);
    }

    public function siretFormat(?string $number): ?string
    {
        return Tools::siretFormat($number);
    }

    public function timeAgo(CarbonInterface $date, string $locale = 'fr'): string
    {
        return $date->locale($locale)->diffForHumans(Carbon::now()->locale('fr'),
            CarbonInterface::DIFF_RELATIVE_TO_NOW);
    }
}
