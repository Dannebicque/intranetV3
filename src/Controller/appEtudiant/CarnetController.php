<?php

namespace App\Controller\appEtudiant;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class CarnetController
 * @package App\Controller
 * @Route({"fr":"application/etudiant/carnet",
 *         "en":"application/student/carnet"}
 *)
 * @IsGranted("ROLE_ETUDIANT")
 */
class CarnetController extends Controller
{
    /**
     * @Route("/", name="application_etudiant_carnet_index")
     */
    public function index(): Response
    {
        return $this->render('appEtudiant/carnet/index.html.twig', []);
    }
}
