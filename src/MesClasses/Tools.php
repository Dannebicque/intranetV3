<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Tools.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 08/07/2018
 * Time: 11:54
 */

namespace App\MesClasses;

use DateTime;
use function count;

abstract class Tools
{
    public static function convertDateToObject($date): DateTime
    {
        $t = explode('/', $date);
        if (count($t) === 3) {
            $date = trim($t[2]) . '-' . trim($t[1]) . '-' . trim($t[0]);
        }

        return new DateTime($date);
    }

    public static function convertTimeToObject($heure): DateTime
    {
        return new DateTime($heure);
    }

    public static function convertToFloat($note)
    {
        return str_replace(',', '.', $note);
    }

    public static function convertToBool($texte): bool
    {
        return $texte === 'true';
    }

    public static function telFormat($number)
    {

        str_replace(['.', '-', ' '], '', $number);
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

        return strtolower(strtr($stripped, $table));
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
}
