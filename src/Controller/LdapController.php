<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/LdapController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller;

use App\Classes\LDAP\MyLdap;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class ActualiteController.
 */
#[Route(path: '/ldap')]
class LdapController extends BaseController
{
    #[Route(path: '/search-ldap', name: 'ldap_search', options: ['expose' => true])]
    public function searchLdap(MyLdap $myLdap, Request $request): Response
    {
        $numero = $request->request->get('numero');
        $data = $myLdap->getInfoPersonnel($numero);

        return $this->json($data);
    }
}
