<?php

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Absence;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceController
 * @package App\Controller
 * @Route({"fr":"application/etudiant/absence",
 *         "en":"application/student/missing"}
 *)
 */
class AbsenceController extends BaseController
{
    /**
     *
     * @Route("/details/{id}", name="app_etudiant_absence_detail")
     * @param Absence $absence
     *
     * @return Response
     */
    public function details(Absence $absence): Response
    {

        return $this->render('appEtudiant/absence/detail.html.twig', [
            'absence' => $absence
        ]);
    }
}
