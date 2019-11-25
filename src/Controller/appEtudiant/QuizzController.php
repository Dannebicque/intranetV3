<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appEtudiant/QuizzController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class QuizzController
 * @package App\Controller
 * @Route("/application/etudiant/quizz")
 * @IsGranted("ROLE_ETUDIANT")
 */
class QuizzController extends BaseController
{
    /**
     * @Route("/", name="application_etudiant_quizz_index")
     */
    public function index(): Response
    {
        return $this->render('appEtudiant/quizz/index.html.twig');
    }
}
