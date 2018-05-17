<?php

namespace App\Controller\appEtudiant;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class StageController
 * @package App\Controller
 * @Route({"fr":"application/etudiant/stage",
 *         "en":"application/student/internship"}
 *)
 * @IsGranted("ROLE_ETUDIANT")
 */
class StageController extends Controller
{
    /**
     * @Route("/", name="application_etudiant_stage_index")
     */
    public function index(): Response
    {
        return $this->render('appEtudiant/stage/index.html.twig', []);
    }
}
