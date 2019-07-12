<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/RgpdController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 5/26/19 3:12 PM
 */

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RgpdController
 * @package App\Controller
 * @Route("/mentions-legales/rgpd")
 */
class RgpdController extends BaseController
{
    /**
     * @Route("/", name="rgpd_index")
     */
    public function index(): Response
    {
        return $this->render('rgpd/index.html.twig', [
        ]);
    }
}
