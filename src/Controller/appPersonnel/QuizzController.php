<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/QuizzController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

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
        return $this->render('appPersonnel/quizz/index.html.twig');
    }
}
