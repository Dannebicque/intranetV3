<?php


namespace App\MesClasses\LDAP;


use Exception;

abstract class MyLdap
{
    private static $ds;

    public static function connect()
    {
        try {
            self::$ds = ldap_connect(getenv('LDAP_HOST'));
            ldap_set_option(self::$ds, LDAP_OPT_PROTOCOL_VERSION, 3);
            if (self::$ds) {
                $r = ldap_bind(self::$ds, getenv('LDAP_LOGIN'), getenv('LDAP_PASSWORD'));
            }

        } catch (Exception $e) {

        }
    }

    public static function getInfoEtudiant($numetudiant)
    {
        self::connect();
        $sr = ldap_search(self::$ds, getenv('LDAP_BASE_DN'), 'supannetuid=' . $numetudiant);
        if (ldap_count_entries(self::$ds, $sr) === 1) {
            $etudiant = ldap_first_entry(self::$ds, $sr);
            $t['login'] = $etudiant['uid'][0];
            $t['mail'] = $etudiant['mail'][0];
            ldap_unbind(self::$ds);

            return $t;
        } else {
            return null;
        }
    }
}
