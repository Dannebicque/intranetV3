<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/LDAP/MyLdap.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/09/2021 09:54
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\LDAP;

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
        $this->ds = Ldap::create('ext_ldap',
            ['connection_string' => $this->parameterBag->get('LDAP_HOST'), 'version' => 3]);
        $this->ds->bind($this->parameterBag->get('LDAP_LOGIN'), $this->parameterBag->get('LDAP_PASSWORD'));
    }

    public function getInfoEtudiant($numetudiant)
    {
        $this->connect();

        $query = $this->ds->query($this->parameterBag->get('LDAP_BASE_DN'), '(supannetuid=' . $numetudiant . ')',
            ['filter' => ['uid', 'mail']]);
        $results = $query->execute()->toArray();

        if (1 === count($results)) {
            $t['login'] = $results[0]->getAttribute('uid')[0];
            $t['mail'] = $results[0]->getAttribute('mail')[0];

            return $t;
        }

        return null;
    }

    public function getInfoPersonnel($numeroHarpege)
    {
        $this->connect();

        $query = $this->ds->query($this->parameterBag->get('LDAP_BASE_DN'), '(supannEmpId=' . $numeroHarpege . ')',
            ['filter' => ['uid', 'mail', 'sn', 'givenName', 'dateNaissance']]);
        $results = $query->execute()->toArray();

        if (1 === count($results)) {
            $t['login'] = $results[0]->getAttribute('uid')[0];
            $t['mail'] = $results[0]->getAttribute('mail')[0];
            $t['nom'] = $results[0]->getAttribute('sn')[0];
            $t['prenom'] = $results[0]->getAttribute('givenName')[0];
            $t['dateNaissance'] = $results[0]->getAttribute('dateNaissance')[0];

            return $t;
        }

        return null;
    }
}
