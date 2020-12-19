<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/LdapController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/12/2020 14:57

namespace App\Controller;

use App\Classes\LDAP\MyLdap;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ActualiteController
 * @package App\Controller
 * @Route("/ldap")
 */
class LdapController extends BaseController
{
    /**
     * @Route("/search-ldap", name="ldap_search", options={"expose"=true})
     * @param MyLdap  $myLdap
     * @param Request $request
     *
     * @return Response
     */
    public function searchLdap(MyLdap $myLdap, Request $request): Response
    {
        $numero = $request->request->get('numero');
        $myLdap->connect();
        $data = $myLdap->getInfoPersonnel($numero);

        return $this->json($data);
    }
}
