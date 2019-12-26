<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Events.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 24/05/2018
 * Time: 16:18
 */

namespace App;

/**
 * Class Events
 * @package App
 */
class Events
{
    /* ABSENCES */
    public const JUSTIFIE_ABSENCES = 'justifie.absences';

    public const REDIRECT_TO_LOGIN = 'redirect.to.login';
    public const CHOISIR_DEPARTEMENT_DEFAUT = 'choisir.departement.par.defaut';

    public static function getConstante($constante)
    {
        return constant('self::' . $constante);
    }
}
