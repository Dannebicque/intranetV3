<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/CommissionAbsenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class CommissionAbsenceController.
 */
#[Route(path: '/administration/commission-absences')]
class CommissionAbsenceController extends BaseController
{
    #[Route(path: '/semestre/{semestre}', name: 'administration_commission_absences_semestre_index')]
    public function index(Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $semestre);

        return $this->render('administration/commission_absence/index.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    #[Route(path: '/semestre/{semestre}/export.{_format}', name: 'administration_commission_semestre_export', requirements: ['_format' => 'csv|xlsx|pdf'])]
    public function export(Semestre $semestre): void
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $semestre);
        // todo:  a faire
    }
}
