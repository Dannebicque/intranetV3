<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/FaqController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class FaqController
 * @package App\Controller
 * @Route("/foire-aux-questions")
 */
class FaqController extends BaseController
{
    /**
     * @Route("/", name="faq_index")
     */
    public function index(): Response
    {
        return $this->render('faq/index.html.twig', [
        ]);
    }
}
