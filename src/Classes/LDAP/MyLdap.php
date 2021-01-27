<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/LDAP/MyLdap.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 27/01/2021 15:43

namespace App\Classes\LDAP;


use Exception;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class MyLdap
{
    private $ds;

    private ParameterBagInterface $parameterBag;


    /**
     * MyApogee constructor.
     *
     * @param ParameterBagInterface $parameterBag
     */
    public function __construct(ParameterBagInterface $parameterBag)
    {
        $this->parameterBag = $parameterBag;
    }

    public function connect(): void
    {
        try {
            $this->ds = ldap_connect($this->parameterBag->get('LDAP_HOST'));
            ldap_set_option($this->ds, LDAP_OPT_PROTOCOL_VERSION, 3);
            if ($this->ds) {
                ldap_bind($this->ds, $this->parameterBag->get('LDAP_LOGIN'),
                    $this->parameterBag->get('LDAP_PASSWORD'));
            }

        } catch (Exception $e) {

        }
    }

    public function getInfoEtudiant($numetudiant)
    {
        $this->connect();
        $sr = ldap_search($this->ds, $this->parameterBag->get('LDAP_BASE_DN'), 'supannetuid=' . $numetudiant);
        if (ldap_count_entries($this->ds, $sr) === 1) {
            $etudiant = ldap_get_entries($this->ds, $sr);
            $t['login'] = $etudiant[0]['uid'][0];
            $t['mail'] = $etudiant[0]['mail'][0];
            ldap_unbind($this->ds);

            return $t;
        }

        return null;

    }

    public function getInfoPersonnel($numeroHarpege)
    {
        $this->connect();
        $sr = ldap_search($this->ds, $this->parameterBag->get('LDAP_BASE_DN'), 'supannEmpId=' . $numeroHarpege);
        if (ldap_count_entries($this->ds, $sr) === 1) {
            $personnel = ldap_get_entries($this->ds, $sr);
            $t['login'] = $personnel[0]['uid'][0];
            $t['mail'] = $personnel[0]['mail'][0];
            ldap_unbind($this->ds);

            return $t;
        }

        return null;

    }
}
