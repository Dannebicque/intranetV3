<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/EvaluationInitialisationController.php
// @author     David Annebicque
// @project intranetv3
// @date 19/11/2019 07:35
// @lastUpdate 19/11/2019 07:34

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EvaluationInitialisationController
 * @package App\Controller\administration
 * @Route("/administration/initialisation-des-evaluations")
 */
class EvaluationInitialisationController extends BaseController
{
    /**
     * @Route("/{semestre}", name="administration_evaluation_initialisation_index", methods="GET")
     *
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function index(Semestre $semestre): Response
    {
        return $this->render('administration/evaluationInitialisation/index.html.twig', [
            'semestre' => $semestre
        ]);
    }
}
