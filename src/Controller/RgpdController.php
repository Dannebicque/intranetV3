<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/RgpdController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class RgpdController.
 */
#[Route(path: '/mentions-legales')]
class RgpdController extends AbstractController
{
    #[Route(path: '/rgpd', name: 'rgpd_index')]
    public function index(): Response
    {
        return $this->render('rgpd/index.html.twig');
    }
}
