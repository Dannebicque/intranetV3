<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/HelpController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller;

use App\Repository\HelpRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class HelpController
 * @package App\Controller
 * @Route("/aide")
 */
class HelpController extends BaseController
{
    /**
     * @Route("/", name="help_index")
     */
    public function index(): Response
    {
        return $this->render('help/index.html.twig', [
        ]);
    }

    /**
     * @Route("/article/{sujet}", name="help_article")
     * @param HelpRepository $helpRepository
     * @param                $sujet
     *
     * @return Response
     */
    public function article(HelpRepository $helpRepository, $sujet): Response
    {
        $article = $helpRepository->findBySlug($sujet);

        return $this->render('help/article.html.twig', [
            'article' => $article
        ]);
    }

    /**
     * @Route("/imprimer/{sujet}", name="help_print")
     * @param $sujet
     *
     * @return Response
     */
    public function imprimer($sujet): Response
    {
        return $this->render('help/article.html.twig', [
        ]);
    }
}
