<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/LDAP/MyLdap.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/09/2021 14:56
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\LDAP;

use Exception;
use const LDAP_OPT_PROTOCOL_VERSION;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class MyLdap
{
    private $ds;

    private ParameterBagInterface $parameterBag;

    /**
     * MyApogee constructor.
     */
    public function __construct(ParameterBagInterface $parameterBag)
    {
        $this->parameterBag = $parameterBag;
    }

    public function connect(): void
    {
        try {
            dump($this->parameterBag->get('LDAP_HOST'));
            dump($this->parameterBag->get('LDAP_LOGIN'));
            dump($this->parameterBag->get('LDAP_PASSWORD'));
            $this->ds = ldap_connect($this->parameterBag->get('LDAP_HOST'));
            ldap_set_option($this->ds, LDAP_OPT_PROTOCOL_VERSION, 3);
            if ($this->ds) {
                ldap_bind($this->ds, $this->parameterBag->get('LDAP_LOGIN'),
                    $this->parameterBag->get('LDAP_PASSWORD'));
            }
        } catch (Exception $e) {
            dump($e);
        }
    }

    public function getInfoEtudiant($numetudiant)
    {
        $this->connect();
        $sr = ldap_search($this->ds, $this->parameterBag->get('LDAP_BASE_DN'), 'supannetuid='.$numetudiant);
        if (1 === ldap_count_entries($this->ds, $sr)) {
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
        dump($this->parameterBag->get('LDAP_BASE_DN'));
        $sr = ldap_search($this->ds, $this->parameterBag->get('LDAP_BASE_DN'),
            '(supannEmpId=' . $numeroHarpege . ')', ['uid', 'mail']);
        echo '--';
        dump($sr);
        echo '--';
        dump(ldap_count_entries($this->ds, $sr));
        if (1 === ldap_count_entries($this->ds, $sr)) {
            $personnel = ldap_get_entries($this->ds, $sr);
            $t['login'] = $personnel[0]['uid'][0];
            $t['mail'] = $personnel[0]['mail'][0];
            ldap_unbind($this->ds);

            return $t;
        }

        return null;
    }
}
