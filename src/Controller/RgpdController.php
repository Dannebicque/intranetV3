<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/RgpdController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

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
