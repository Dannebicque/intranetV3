<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/EvaluationInitialisationController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use Exception;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AffecterEnseignantsGroupesController
 * @package App\Controller\administration
 * @Route("/administration/affecter-enseignants-groupes")
 */
class AffecterEnseignantsGroupesController extends BaseController
{
    /**
     * @Route("/{semestre}", name="administration_affecter_enseignant_groupe_index", methods="GET|POST")
     *
     * @param Semestre $semestre
     *
     * @return Response
     * @throws Exception
     */
    public function index(
        Semestre $semestre
    ): Response {


        return $this->render('administration/affecterEnseignantsGroupes/index.html.twig', [
            'semestre' => $semestre,

        ]);
    }
}
