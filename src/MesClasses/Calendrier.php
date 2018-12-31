<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 31/05/2018
 * Time: 22:13
 */

namespace App\MesClasses;

/**
 * Class Calendrier
 * @package App\MesClasses
 * Le calendrier est considéré au sens du calendrier scolaire de septembre à aout de l'année suivante.
 */
abstract class Calendrier
{
    private static $tabPlanning = array();

    private static $tabFinMois = array();
    private static $tabJoursFeries = array();

    /**
     * @param     $year
     * @param int $bonMois
     * @param int $nbMois
     */
    public static function calculPlanning($year, $bonMois = 9, $nbMois = 12): void
    {
        self::joursFeries($year);

        if ($nbMois < 12 && $bonMois > 1 && $bonMois < 9) {
            $year++;
        }

        for ($mois = 1; $mois <= $nbMois; $mois++) {
            if ($bonMois > 12) {
                $bonMois -= 12;
                $year++;
            }

            self::$tabFinMois[$mois] = date('t', mktime(0, 0, 0, $bonMois, 1, $year));

            for ($jour = 1; $jour <= self::$tabFinMois[$mois]; $jour++) {
                self::$tabPlanning[$mois][$jour] = new \DateTime($year . '-' . $bonMois . '-' . $jour);
            }
            $bonMois++;
        }
    }

    /**
     * @param $year
     */
    public static function joursFeries($year): void
    {
        $year1 = $year + 1; //second "semestre"

        $easter = easter_date($year1); //paque (dimanche)
        $easterDay = date('j', $easter);
        $easterMonth = date('n', $easter);
        $easterYear = date('Y', $easter);

        $lundiPaque = mktime(0, 0, 0, $easterMonth, $easterDay + 1, $easterYear);
        $jeudiAscension = mktime(0, 0, 0, $easterMonth, $easterDay + 39, $easterYear);
        $lundiPentecote = mktime(0, 0, 0, $easterMonth, $easterDay + 50, $easterYear);

        self::$tabJoursFeries = array(
            $year . '-11-01', //toussaints
            $year . '-11-11', //armistice
            $year . '-12-25', //noel
            $year1 . '-01-01', //jour de l'an
            $year1 . '-05-01', //fete du travail
            $year1 . '-05-08', //victoire
            $year1 . '-07-14', //fete nationale
            $year1 . '-08-15', //assomption
            date('Y-m-d', $easter), //dimanche de pâque
            date('Y-m-d', $lundiPaque), //lundi de pâque
            date('Y-m-d', $jeudiAscension), //jeudi ascension
            date('Y-m-d', $lundiPentecote)
        ); //lundi de pentecote
    }

    /**
     * @return array
     */
    public static function getTabPlanning(): array
    {
        return self::$tabPlanning;
    }

    /**
     * @return array
     */
    public static function getTabFinMois(): array
    {
        return self::$tabFinMois;
    }

    /**
     * @return array
     */
    public static function getTabJoursFeries(): array
    {
        return self::$tabJoursFeries;
    }
}
