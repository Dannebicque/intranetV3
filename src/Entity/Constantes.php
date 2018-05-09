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

    public static function getRoleList(): array
    {
        return array(
            self::ROLE_CDD,
            self::ROLE_DDE,
            self::ROLE_ASS
        );
    }
}