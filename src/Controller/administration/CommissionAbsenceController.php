<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/CommissionAbsenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */


namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class CommissionAbsenceController.
 *
 * @Route("/administration/commission-absences")
 */
class CommissionAbsenceController extends BaseController
{
    /**
     * @Route("/semestre/{semestre}", name="administration_commission_absences_semestre_index")
     */
    public function index(Semestre $semestre): Response
    {
        return $this->render('administration/commission_absence/index.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    /**
     * @Route("/semestre/{semestre}/export.{_format}", name="administration_commission_semestre_export",
     *                                                 requirements={"_format"="csv|xlsx|pdf"})
     */
    public function export(Semestre $semestre): void
    {
        //todo:  a faire
    }
}
