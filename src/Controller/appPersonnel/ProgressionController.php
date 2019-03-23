<?php

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Repository\MatiereRepository;
use App\Repository\PrevisionnelRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ProgressionController
 * @package App\Controller
 * @Route("/application/personnel/progression")
 * @IsGranted("ROLE_PERMANENT")
 */
class ProgressionController extends BaseController
{
    /**
     * @Route("/", name="application_personnel_progression_index")
     */
    public function index(PrevisionnelRepository $previsionnelRepository): Response
    {
        $matieres = $previsionnelRepository->findPrevisionnelEnseignantDepartement($this->getUser(),
            $this->dataUserSession->getDepartement());

        return $this->render('appPersonnel/progression/index.html.twig', [
            'matieres' => $matieres
        ]);
    }
}
