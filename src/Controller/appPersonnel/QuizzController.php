<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/QuizzController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:36
 */

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class QuizzController.
 *
 * @IsGranted("ROLE_PERMANENT")
 */
#[Route(path: '/application/personnel/quizz')]
class QuizzController extends BaseController
{
    #[Route(path: '/', name: 'application_personnel_quizz_index')]
    public function index(): Response
    {
        return $this->render('appPersonnel/quizz/index.html.twig');
    }
}
