<?php

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Absence;
use App\Entity\Note;
use App\MesClasses\MyEvaluation;
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
     *
     */
    public function details(Absence $absence): Response
    {

        return $this->render('appEtudiant/absence/detail.html.twig', [
            'absence' => $absence
        ]);
    }
}
