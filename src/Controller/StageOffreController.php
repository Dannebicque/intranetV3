<?php

namespace App\Controller;

use App\Repository\StagePeriodeOffreRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StageOffreController
 * @package App\Controller
 * @Route("/application/stage/offres")

 */
class StageOffreController extends BaseController
{
    /**
     * @Route("/", name="stage_offre_stage_index")
     */
    public function index(StagePeriodeOffreRepository $stagePeriodeOffreRepository)
    {
        return $this->render('stage_offre/index.html.twig', [
            'offres' => $stagePeriodeOffreRepository->findOffreDepartement($this->dataUserSession->getDepartement())
        ]);
    }
}
