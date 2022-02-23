<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/QuizzController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:36
 */

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class QuizzController.
 *
 * @IsGranted("ROLE_ETUDIANT")
 */
#[Route(path: '/application/etudiant/quizz')]
class QuizzController extends BaseController
{
    #[Route(path: '/', name: 'application_etudiant_quizz_index')]
    public function index(): Response
    {
        return $this->render('appEtudiant/quizz/index.html.twig');
    }
}
