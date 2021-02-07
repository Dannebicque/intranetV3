<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/QuickViewController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:38
 */

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
