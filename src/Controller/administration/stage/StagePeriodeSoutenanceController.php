<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/stage/StagePeriodeSoutenanceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 10:44
 */

namespace App\Controller\administration\stage;

use App\Controller\BaseController;
use App\Entity\StagePeriode;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StagePeriodeSoutenanceController.
 */
#[Route(path: '/administration/stage/periode/soutenance')]
class StagePeriodeSoutenanceController extends BaseController
{
    #[Route(path: '/{uuid}', name: 'administration_stage_periode_soutenance_index')]
    public function index(#[MapEntity(mapping: ['uuid' => 'uuid'])]
                          StagePeriode $stagePeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());

        return $this->render('administration/stage/stage_periode_soutenance/index.html.twig', [
            'stagePeriode' => $stagePeriode,
        ]);
    }
}
