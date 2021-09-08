<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/LdapController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/09/2021 15:00
 */

namespace App\Controller;

use App\Classes\LDAP\MyLdap;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ActualiteController.
 *
 * @Route("/ldap")
 */
class LdapController extends BaseController
{
    /**
     * @Route("/search-ldap", name="ldap_search", options={"expose"=true})
     */
    public function searchLdap(MyLdap $myLdap, Request $request): Response
    {
        $numero = $request->request->get('numero');
        //$myLdap->connect();
        $data = $myLdap->getInfoPersonnel($numero);

        return $this->json($data);
    }
}
