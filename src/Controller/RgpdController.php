<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/RgpdController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:38
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RgpdController.
 *
 * @Route("/mentions-legales")
 */
class RgpdController extends AbstractController
{
    /**
     * @Route("/rgpd", name="rgpd_index")
     */
    public function index(): Response
    {
        return $this->render('rgpd/index.html.twig');
    }
}
