<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/AffecterEnseignantsGroupesController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/10/2021 09:45
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use Exception;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AffecterEnseignantsGroupesController.
 */
#[Route(path: '/administration/affecter-enseignants-groupes')]
class AffecterEnseignantsGroupesController extends BaseController
{
    /**
     * @throws Exception
     */
    #[Route(path: '/{semestre}', name: 'administration_affecter_enseignant_groupe_index', methods: ['GET', 'POST'])]
    public function index(Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);

        return $this->render('administration/affecterEnseignantsGroupes/index.html.twig', [
            'semestre' => $semestre,
        ]);
    }
}
