<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/QuickViewController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/10/2020 17:16

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class QuickViewController extends AbstractController
{
    /**
     * @Route("/quick/view", name="quick_view", options={"expose"=true})
     */
    public function index()
    {
        return $this->render('quick_view/index.html.twig');
    }
}
