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
}
