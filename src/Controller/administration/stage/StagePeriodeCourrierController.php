<?php

namespace App\Controller\administration\stage;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\StagePeriode;
use App\Entity\StagePeriodeOffre;
use App\Form\StagePeriodeOffreType;
use App\MesClasses\MyExport;
use App\Repository\StagePeriodeOffreRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StagePeriodeCourrierController
 * @package App\Controller\administration\stage
 * @Route("/administration/stage/periode/courrier")
 */
class StagePeriodeCourrierController extends BaseController
{
    /**
     * @Route("/{uuid}", name="administration_stage_periode_courrier_index")
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     * @param StagePeriode $stagePeriode
     *
     * @return Response
     */
    public function index(StagePeriode $stagePeriode): Response
    {

        $courriers = null;

        return $this->render('administration/stage/stage_periode_courrier/index.html.twig', [
            'stagePeriode' => $stagePeriode,
            'courriers' => $courriers
        ]);
    }
}
