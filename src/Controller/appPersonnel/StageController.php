<?php

namespace App\Controller\appPersonnel;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class StageController
 * @package App\Controller
 * @Route({"fr":"application/personnel/stage",
 *         "en":"application/team/internship"}
 *)
 * @IsGranted("ROLE_PERMANENT")
 */
class StageController extends Controller
{
    /**
     * @Route("/", name="application_personnel_stage_index")
     */
    public function index(): Response
    {
        return $this->render('appPersonnel/stage/index.html.twig', []);
    }
}
