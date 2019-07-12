<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/ErreurController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/12/19 11:21 AM
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ErreurController
 * @package App\Controller
 */
class ErreurController extends AbstractController
{
    /**
     * @Route("/404", name="erreur_404")
     */
    public function erreur404(): Response
    {
        return $this->render('bundles/TwigBundle/Exception/error404.html.twig', [
        ]);
    }

    /**
     * @Route("/500", name="erreur_500")
     */
    public function erreur500(): Response
    {
        return $this->render('bundles/TwigBundle/Exception/error500.html.twig', [
        ]);
    }

    /**
     * @Route("/666", name="erreur_666")
     */
    public function erreur666(): Response
    {
        return $this->render('bundles/TwigBundle/Exception/error666.html.twig', [
        ]);
    }
}
