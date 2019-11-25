<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/stage/StagePeriodeSoutenanceController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\administration\stage;

use App\Controller\BaseController;
use App\Entity\StagePeriode;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StagePeriodeSoutenanceController
 * @package App\Controller\administration\stage
 * @Route("/administration/stage/periode/soutenance")
 */
class StagePeriodeSoutenanceController extends BaseController
{
    /**
     * @Route("/{uuid}", name="administration_stage_periode_soutenance_index")
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     * @param StagePeriode $stagePeriode
     *
     * @return Response
     */
    public function index(StagePeriode $stagePeriode): Response
    {
        return $this->render('administration/stage/stage_periode_soutenance/index.html.twig', [
            'stagePeriode' => $stagePeriode
        ]);
    }
}
