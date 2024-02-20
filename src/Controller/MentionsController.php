<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/MentionsController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class MentionsController.
 */
#[Route(path: '/mentions-legales')]
class MentionsController extends AbstractController
{
    #[Route(path: '/', name: 'mentions_index')]
    public function index(): Response
    {
        return $this->render('mentions/index.html.twig', [
        ]);
    }

    #[Route(path: '/about', name: 'mentions_about')]
    public function about(): Response
    {
        return $this->render('mentions/about.html.twig', [
        ]);
    }
}
