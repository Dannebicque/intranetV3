<?php

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Absence;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceController
 * @IsGranted("ROLE_ETUDIANT")
 * @package App\Controller
 * @Route("/application/etudiant/absence")
 */
class AbsenceController extends BaseController
{
    /**
     *
     * @Route("/details/{uuid}", name="app_etudiant_absence_detail")
     * @param Absence $absence
     * @ParamConverter("absence", options={"mapping": {"uuid": "uuid"}})
     * @return Response
     */
    public function details(Absence $absence): Response
    {
        return $this->render('appEtudiant/absence/detail.html.twig', [
            'absence' => $absence
        ]);
    }
}
