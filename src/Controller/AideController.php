<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/AideController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/05/2021 22:02
 */

namespace App\Controller;

use App\Classes\Aide;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AideController extends BaseController
{
    /**
     * @Route("/aide/{sujet}", name="help_article")
     */
    public function index(string $sujet): Response
    {
        return $this->render('aide/index.html.twig', [
        ]);
    }
}
