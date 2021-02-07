<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/AffecterEnseignantsGroupesController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:17
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use Exception;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AffecterEnseignantsGroupesController.
 *
 * @Route("/administration/affecter-enseignants-groupes")
 */
class AffecterEnseignantsGroupesController extends BaseController
{
    /**
     * @Route("/{semestre}", name="administration_affecter_enseignant_groupe_index", methods="GET|POST")
     *
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
