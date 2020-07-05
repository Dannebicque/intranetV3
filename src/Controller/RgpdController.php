<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/RgpdController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RgpdController
 * @package App\Controller
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
