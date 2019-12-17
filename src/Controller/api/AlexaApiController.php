<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/api/AbsenceApiController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\TypeGroupe;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceApiController
 * @package App\Controller
 * @Route("/api/alexa")
 */
class AlexaApiController extends BaseController
{
    /**
     * @Route("/", name="api_alexa",
     *                                        options={"expose":true})
     *
     *
     * @return Response
     */
    public function tests(): Response
    {
        $tab = ['coucou' => 'test'];
        return $this->json($tab);
    }
}
