<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Tools.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/6/19 5:22 PM
 */

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
            $date = $t[2] . '-' . $t[1] . '-' . $t[0];
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

    public static function convertToBool($texte)
    {
        return $texte === 'true';
    }
}
