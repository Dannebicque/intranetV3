<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/MentionsController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

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
