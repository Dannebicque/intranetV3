<?php

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StageController
 * @package App\Controller
 * @Route({"fr":"application/etudiant/stage",
 *         "en":"application/student/internship"}
 *)
 * @IsGranted("ROLE_ETUDIANT")
 */
class StageController extends BaseController
{
    /**
     * @Route("/", name="application_etudiant_stage_index")
     */
    public function index(): Response
    {
        return $this->render('appEtudiant/stage/index.html.twig', []);
    }
}
