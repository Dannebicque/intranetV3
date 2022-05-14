<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appEtudiant/QuizzController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 10:44
 */

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class QuizzController.
 */
#[Route(path: '/application/etudiant/quizz')]
#[IsGranted('ROLE_ETUDIANT')]
class QuizzController extends BaseController
{
    #[Route(path: '/', name: 'application_etudiant_quizz_index')]
    public function index(): Response
    {
        return $this->render('appEtudiant/quizz/index.html.twig');
    }
}
