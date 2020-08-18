<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/LDAP/MyLdap.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 18/08/2020 10:44

namespace App\Classes\LDAP;


use Exception;
use Symfony\Component\HttpFoundation\Request;

class MyLdap
{
    private $ds;

    private Request $request;

    /**
     * MyApogee constructor.
     *
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function connect(): void
    {
        try {
            $this->ds = ldap_connect($this->request->server->get('LDAP_HOST'));
            ldap_set_option($this->ds, LDAP_OPT_PROTOCOL_VERSION, 3);
            if ($this->ds) {
                ldap_bind($this->ds, $this->request->server->get('LDAP_LOGIN'),
                    $this->request->server->get('LDAP_PASSWORD'));
            }

        } catch (Exception $e) {

        }
    }

    public function getInfoEtudiant($numetudiant)
    {
        $this->connect();
        $sr = ldap_search($this->ds, $_SERVER['LDAP_BASE_DN'], 'supannetuid=' . $numetudiant);
        if (ldap_count_entries($this->ds, $sr) === 1) {
            $etudiant = ldap_get_entries($this->ds, $sr);
            $t['login'] = $etudiant[0]['uid'][0];
            $t['mail'] = $etudiant[0]['mail'][0];
            ldap_unbind($this->ds);

            return $t;
        }

        return null;

    }
}
