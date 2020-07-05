<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/MentionsController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MentionsController
 * @package App\Controller
 * @Route("/mentions-legales")
 */
class MentionsController extends AbstractController
{
    /**
     * @Route("/", name="mentions_index")
     */
    public function index(): Response
    {
        return $this->render('mentions/index.html.twig', [
        ]);
    }

    /**
     * @Route("/about", name="mentions_about")
     */
    public function about(): Response
    {
        return $this->render('mentions/about.html.twig', [
        ]);
    }
}
