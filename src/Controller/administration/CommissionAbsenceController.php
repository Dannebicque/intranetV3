<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/CommissionAbsenceController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 4/28/19 8:47 PM
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class CommissionAbsenceController
 * @package App\Controller\administration
 * @Route("/administration/commission-absences")
 */
class CommissionAbsenceController extends BaseController
{
    /**
     * @Route("/semestre/{semestre}", name="administration_commission_absences_semestre_index")
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function index(Semestre $semestre): Response
    {
        return $this->render('administration/commission_absence/index.html.twig', [
            'semestre' => $semestre
        ]);
    }

    /**
     * @param Semestre $semestre
     * @Route("/semestre/{semestre}/export.{_format}", name="administration_commission_semestre_export",
     *                                                 requirements={"_format"="csv|xlsx|pdf"})
     */
    public function export(Semestre $semestre): void
    {
    }
}
