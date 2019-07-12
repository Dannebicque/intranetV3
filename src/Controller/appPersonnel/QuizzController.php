<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appPersonnel/QuizzController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 8/28/18 1:29 PM
 */

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class QuizzController
 * @package App\Controller
 * @Route("/application/personnel/quizz")
 * @IsGranted("ROLE_PERMANENT")
 */
class QuizzController extends BaseController
{
    /**
     * @Route("/", name="application_personnel_quizz_index")
     */
    public function index(): Response
    {
        return $this->render('appPersonnel/quizz/index.html.twig', []);
    }
}
