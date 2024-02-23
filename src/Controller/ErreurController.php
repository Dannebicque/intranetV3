<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/ErreurController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:39
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class ErreurController.
 */
class ErreurController extends AbstractController
{
    #[Route(path: '/404', name: 'erreur_404')]
    public function erreur404(): Response
    {
        return $this->render('bundles/TwigBundle/Exception/error404.html.twig');
    }

    #[Route(path: '/500', name: 'erreur_500')]
    public function erreur500(): Response
    {
        return $this->render('bundles/TwigBundle/Exception/error500.html.twig');
    }

    #[Route(path: '/acces-refuse', name: 'erreur_666')]
    public function erreur666(): Response
    {
        return $this->render('bundles/TwigBundle/Exception/error666.html.twig');
    }
}
