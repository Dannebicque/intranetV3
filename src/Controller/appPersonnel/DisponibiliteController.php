<?php

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Entity\CreneauCours;
use App\Repository\CalendrierRepository;
use App\Repository\CreneauCoursRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class DisponibiliteController
 * @package App\Controller
 * @Route("/application/personnel/disponibilite")
 * @IsGranted("ROLE_PERMANENT")
 */
class DisponibiliteController extends BaseController
{
    /**
     * @Route("/", name="application_personnel_disponibilite_index")
     */
    public function index(CreneauCoursRepository $creneauCoursRepository, CalendrierRepository $calendrierRepository): Response
    {

        return $this->render('appPersonnel/disponibilite/index.html.twig', [
            'anneepreparee' => $this->dataUserSession->getDepartement() ? $this->dataUserSession->getDepartement()->getAnneeUniversitairePrepare() : null,
            'creneaux' => [1 => '8h00-9h30', 2=>'9h30-11h00', 3=>'11h00-12h30', 4=>'12h30-14h00', 5=>'14h00-15h30', 6=>'15h30-17h00',7=>'17h00-18h30']
        ]);
    }
}
