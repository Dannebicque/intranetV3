<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appPersonnel/QuizzController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/12/2022 12:09
 */

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class QuizzController.
 */
#[Route(path: '/application/personnel/quizz')]
#[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_PERMANENT')]
class QuizzController extends BaseController
{
    #[Route(path: '/', name: 'application_personnel_quizz_index')]
    public function index(): Response
    {
        return $this->render('appPersonnel/quizz/index.html.twig');
    }
}
