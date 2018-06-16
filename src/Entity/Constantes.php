<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 28/04/2018
 * Time: 07:09
 */

namespace App\Entity;


class Constantes
{
    public const ROLE_CDD = 'role.cdd';
    public const ROLE_DDE = 'role.dde';
    public const ROLE_ASS = 'role.ass';

    public const  TIMEBEFORE_NOW = 'now';
    public const  TIMEBEFORE_MINUTE = '{num} minute ago';
    public const  TIMEBEFORE_MINUTES = '{num} minutes ago';
    public const  TIMEBEFORE_HOUR = '{num} hour ago';
    public const  TIMEBEFORE_HOURS = '{num} hours ago';
    public const  TIMEBEFORE_YESTERDAY = 'yesterday';
    public const  TIMEBEFORE_FORMAT = '%e %b';
    public const  TIMEBEFORE_FORMAT_YEAR = '%e %b, %Y';
    public const DUREE_SEMESTRE = 5;

    public static function getRoleList(): array
    {
        return array(
            self::ROLE_CDD,
            self::ROLE_DDE,
            self::ROLE_ASS
        );
    }
}