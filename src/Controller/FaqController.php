<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/FaqController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 8/28/18 1:29 PM
 */

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
