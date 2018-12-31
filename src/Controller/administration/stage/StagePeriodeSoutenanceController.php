<?php

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
        return $this->render('administration/stage/stage_periode_courrier/index.html.twig', [
            'stagePeriode' => $stagePeriode
        ]);
    }
}
