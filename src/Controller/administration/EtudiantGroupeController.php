<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class CommissionAbsenceController
 * @package App\Controller\administration
 * @Route({"fr":"administration/etudiant/groupe",
 *         "en":"administration/student/group"}
 *)
 */
class EtudiantGroupeController extends BaseController
{
    /**
     * @Route("/semestre/{semestre}", name="administration_etudiant_groupe_semestre_index")
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Semestre $semestre): Response
    {
        return $this->render('administration/etudiant_groupe/index.html.twig', [
            'semestre' => $semestre
        ]);
    }
}
