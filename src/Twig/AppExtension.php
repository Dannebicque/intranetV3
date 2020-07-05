<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Twig/AppExtension.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:33

namespace App\Twig;

use App\Entity\Constantes;
use App\Classes\Configuration;
use App\Classes\Tools;
use DateTime;
use Exception;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;
use function chr;

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
    /** @var TranslatorInterface */
    private $translator;

    /**
     * AppExtension constructor.
     *
     * @param TranslatorInterface $translator
     */
    public function __construct(TranslatorInterface $translator)
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
        $this->translator = $translator;
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
            new TwigFilter('format_note', [$this, 'formatNote'],['is_safe' => ['html']]),

        );
    }

    public function formatNote($note, $nbdecimales = 2, $seuil = 10)
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

    public function getSetting($name): string
    {
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
        return Tools::telFormat($number);
    }

    /**
     * @param DateTime $date
     *
     * @return mixed|string
     */
    public function timeAgo(DateTime $date)
    {
        $timestamp = $date->getTimestamp();

        $strTime = ['seconde', 'minute', 'heure', 'jour', 'mois', 'année'];
        $length = ['60', '60', '24', '30', '12', '10'];

        $currentTime = time();
        if ($currentTime >= $timestamp) {
            $diff = time() - $timestamp;
            for ($i = 0; $diff >= $length[$i] && $i < count($length) - 1; $i++) {
                $diff /= $length[$i];//todo: ne gère pas le cas des mois sur 28, 29 30 ou 31. C'est une moyenne à 30.
            }

            $diff = round($diff);

            //todo: gérer la traduction avec pluralisation. Voir https://symfony.com/doc/current/translation/message_format.html
            return $this->translator->trans('%diff% ' . $strTime[$i], ['%diff%' => $diff]);
        }

        return 'err.';
    }
}
