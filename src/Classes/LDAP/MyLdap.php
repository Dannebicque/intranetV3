<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/LDAP/MyLdap.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:33

namespace App\Classes\LDAP;


use Exception;

abstract class MyLdap
{
    private static $ds;

    public static function connect(): void
    {
        try {
            self::$ds = ldap_connect(getenv('LDAP_HOST'));
            ldap_set_option(self::$ds, LDAP_OPT_PROTOCOL_VERSION, 3);
            if (self::$ds) {
                ldap_bind(self::$ds, getenv('LDAP_LOGIN'), getenv('LDAP_PASSWORD'));
            }

        } catch (Exception $e) {

        }
    }

    public static function getInfoEtudiant($numetudiant)
    {
        self::connect();
        $sr = ldap_search(self::$ds, getenv('LDAP_BASE_DN'), 'supannetuid=' . $numetudiant);
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
