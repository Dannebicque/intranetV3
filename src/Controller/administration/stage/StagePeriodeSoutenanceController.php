<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/stage/StagePeriodeSoutenanceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:17
 */

namespace App\Controller\administration\stage;

use App\Controller\BaseController;
use App\Entity\StagePeriode;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StagePeriodeSoutenanceController.
 *
 * @Route("/administration/stage/periode/soutenance")
 */
class StagePeriodeSoutenanceController extends BaseController
{
    /**
     * @Route("/{uuid}", name="administration_stage_periode_soutenance_index")
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     */
    public function index(StagePeriode $stagePeriode): Response
    {
        return $this->render('administration/stage/stage_periode_soutenance/index.html.twig', [
            'stagePeriode' => $stagePeriode,
        ]);
    }
}
