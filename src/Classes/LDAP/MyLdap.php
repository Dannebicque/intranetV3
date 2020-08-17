<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/LDAP/MyLdap.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 17/08/2020 14:18

namespace App\Classes\LDAP;


use Exception;

abstract class MyLdap
{
    private static $ds;

    public static function connect(): void
    {
        try {
            self::$ds = ldap_connect($_SERVER['LDAP_HOST']);
            ldap_set_option(self::$ds, LDAP_OPT_PROTOCOL_VERSION, 3);
            if (self::$ds) {
                ldap_bind(self::$ds, $_SERVER['LDAP_LOGIN'], $_SERVER['LDAP_PASSWORD']);
            }

        } catch (Exception $e) {

        }
    }

    public static function getInfoEtudiant($numetudiant)
    {
        self::connect();
        $sr = ldap_search(self::$ds, $_SERVER['LDAP_BASE_DN'], 'supannetuid=' . $numetudiant);
        if (ldap_count_entries(self::$ds, $sr) === 1) {
            $etudiant = ldap_get_entries(self::$ds, $sr);
            $t['login'] = $etudiant[0]['uid'][0];
            $t['mail'] = $etudiant[0]['mail'][0];
            ldap_unbind(self::$ds);

            return $t;
        } else {
            return null;
        }
    }
}
