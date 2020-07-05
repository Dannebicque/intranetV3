<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/AffecterEnseignantsGroupesController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

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
