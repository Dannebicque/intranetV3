<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/LDAP/MyLdap.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/09/2021 17:18
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\LDAP;

use Exception;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\Ldap\Ldap;

class MyLdap
{
    private $ds;

    private ParameterBagInterface $parameterBag;

    public function __construct(ParameterBagInterface $parameterBag)
    {
        $this->parameterBag = $parameterBag;
    }

    public function connect(): void
    {
        try {
            $this->ds = Ldap::create('ext_ldap',
                ['connection_string' => $this->parameterBag->get('LDAP_HOST'), 'version' => 3]);
           # ldap_set_option($this->ds, LDAP_OPT_PROTOCOL_VERSION, 3);
            if ($this->ds) {
                $this->ds->bind($this->parameterBag->get('LDAP_LOGIN'), $this->parameterBag->get('LDAP_PASSWORD'));
            }
        } catch (Exception $e) {
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
        // $this->connect();
        $ds = Ldap::create('ext_ldap', ['connection_string' => $this->parameterBag->get('LDAP_HOST'), 'version' => 3]);
        dump($ds);
        $ds->bind($this->parameterBag->get('LDAP_LOGIN'), $this->parameterBag->get('LDAP_PASSWORD'));
        dump($ds);
        $query = $ds->query($this->parameterBag->get('LDAP_BASE_DN'), '(supannEmpId=' . $numeroHarpege . ')');
        dump($query);
        $results = $query->execute();
        dump($results);
        foreach ($results as $entry) {
            // Do something with the results
            dump($entry);
        }




//        $sr = ldap_search($this->ds, $this->parameterBag->get('LDAP_BASE_DN'),
//            '(supannEmpId=' . $numeroHarpege . ')', ['uid', 'mail']);
//
//        if (1 === ldap_count_entries($this->ds, $sr)) {
//            $personnel = ldap_get_entries($this->ds, $sr);
//            $t['login'] = $personnel[0]['uid'][0];
//            $t['mail'] = $personnel[0]['mail'][0];
//            ldap_unbind($this->ds);
//
//            return $t;
//        }

        return null;
    }
}
