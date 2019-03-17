<?php

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
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
    public function index(): Response
    {

        return $this->render('appPersonnel/disponibilite/index.html.twig', [
            'anneepreparee' => $this->dataUserSession->getDepartement() ? $this->dataUserSession->getDepartement()->getAnneeUniversitairePrepare() : null
        ]);
    }
}
