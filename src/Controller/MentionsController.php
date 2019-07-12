<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/MentionsController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 8/28/18 1:29 PM
 */

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MentionsController
 * @package App\Controller
 * @Route("/mentions-legales")
 */
class MentionsController extends BaseController
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
