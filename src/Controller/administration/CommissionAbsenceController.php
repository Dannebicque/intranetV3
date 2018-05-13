<?php

namespace App\Controller\administration;

use App\Entity\Semestre;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class CommissionAbsenceController
 * @package App\Controller\administration
 * @Route({"fr":"administration/commission-absences",
 *         "en":"administration/absences-committee"}
 *)
 */
class CommissionAbsenceController extends Controller
{
    /**
     * @Route("/semestre/{semestre}", name="administration_commission_absences_semestre_index")
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Semestre $semestre): Response
    {
        return $this->render('administration/commission_absence/index.html.twig', [
        ]);
    }
}
