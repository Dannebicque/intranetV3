<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/QuickViewController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/12/2020 14:57

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
