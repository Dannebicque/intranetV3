<?php

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StageController
 * @package App\Controller
 * @Route({"fr":"application/personnel/stage",
 *         "en":"application/team/internship"}
 *)
 * @IsGranted("ROLE_PERMANENT")
 */
class StageController extends BaseController
{
    /**
     * @Route("/", name="application_personnel_stage_index")
     */
    public function index(): Response
    {
        return $this->render('appPersonnel/stage/index.html.twig', []);
    }
}
