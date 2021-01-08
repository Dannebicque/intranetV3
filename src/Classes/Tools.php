<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Tools.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/01/2021 10:53

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 08/07/2018
 * Time: 11:54
 */

namespace App\Classes;

use Carbon\Carbon;
use DateTime;
use Exception;
use RuntimeException;

abstract class Tools
{
    /**
     * @param $date
     *
     * @return DateTime
     * @throws Exception
     */
    public static function convertDateToObject($date): DateTime
    {
        if (strpos($date, '/') === false) {
            return Carbon::createFromFormat('Y-m-d', $date);
        }

        return Carbon::createFromFormat('d/m/Y', $date);
    }

    /**
     * @param $heure
     *
     * @return DateTime
     * @throws Exception
     */
    public static function convertTimeToObject($heure): DateTime
    {
        return Carbon::createFromTimeString($heure);
    }

    public static function convertToFloat($note)
    {
        $note = trim($note);
        if ($note === '' || $note === null) {
            $note = 0;
        }

        return str_replace(',', '.', $note);
    }

    public static function convertToBool($texte): bool
    {
        return $texte === 'true';
    }

    public static function telFormat($number)
    {
        str_replace(['.', '-', ' '], '', $number);

        if (strpos($number, '33') === 0) {
            $number = '0' . substr($number, 2, strlen($number));
        }

        if (strlen($number) === 9) {
            $number = '0' . $number;
        }

        if (strlen($number) === 10) {
            $str = chunk_split($number, 2, ' ');
        } else {
            $str = str_replace('.', ' ', $number);
        }

        return $str;
    }

    public static function supprimeAccent(string $texte): string
    {
        $search = explode(",",
            "À,Á,Â,à,Ä,Å,à,á,â,à,ä,å,Ò,Ó,Ô,Õ,Ö,Ø,ò,ó,ô,õ,ö,ø,È,É,Ê,Ë,è,é,ê,ë,Ç,ç,Ì,Í,Î,Ï,ì,í,î,ï,Ù,Ú,Û,Ü,ù,ú,û,ü,ÿ,Ñ,ñ");
        $replace = explode(",",
            "a,a,a,a,a,a,a,a,a,a,a,a,o,o,o,o,o,o,o,o,o,o,o,o,e,e,e,e,e,e,e,e,c,c,i,i,i,i,i,i,i,i,u,u,u,u,u,u,u,u,y,n,n");

        return str_replace($search, $replace, $texte);
    }

    public static function slug(string $texte)
    {
        /* Get rid of accented characters */
        $search = explode(',', 'ç,æ,œ,á,é,í,ó,ú,à,è,ì,ò,ù,ä,ë,ï,ö,ü,ÿ,â,ê,î,ô,û,å,e,i,ø,u');
        $replace = explode(',', 'c,ae,oe,a,e,i,o,u,a,e,i,o,u,a,e,i,o,u,y,a,e,i,o,u,a,e,i,o,u');
        $texte = str_replace($search, $replace, $texte);

        /* Lowercase all the characters */
        $texte = strtolower($texte);

        /* Avoid whitespace at the beginning and the ending */
        $texte = trim($texte);

        /* Replace all the characters that are not in a-z or 0-9 by a hyphen */
        $texte = preg_replace('/[^a-z0-9]/', '-', $texte);
        /* Remove hyphen anywhere it's more than one */
        $texte = preg_replace("/[\-]+/", '-', $texte);

        return $texte;
    }

    public static function personnaliseTexte($texte, $config)
    {
        if (is_array($config)) {
            foreach ($config as $key => $elt) {
                $texte = str_replace('{{' . $key . '}}', $elt, $texte);
            }
        }

        return $texte;
    }

    public static function convertDateHeureToObject(string $dateString, string $heureString): Carbon
    {
        if (strpos($dateString, '/') === false) {
            $date = Carbon::createFromFormat('Y-m-d', trim($dateString));
        } else {
            $date = Carbon::createFromFormat('d/m/Y', trim($dateString));
        }
        $heure = Carbon::createFromTimeString($heureString);

        return Carbon::create($date->year, $date->month, $date->day, $heure->hour, $heure->minute);
    }

    public static function updateFields($name, $value, $obj): void
    {
        $t = explode('_', $name);
        $name = $t[0];
        $name[0] = chr(ord($name[0]) - 32);

        $method = 'set' . $name;
        if (method_exists($obj, $method)) {
            $obj->$method($value);
        }
    }

    public static function checkDirectoryExist(string $dir)
    {

        if (!is_dir($dir) && !mkdir($dir)) {
            throw new RuntimeException(sprintf('Directory "%s" was not created', $dir));
        }

        return true;
    }

    public static function convertToInt($int)
    {
        $int = trim($int);
        if ($int === '' || $int === null) {
            $int = 0;
        }

        return $int;

    }
}
