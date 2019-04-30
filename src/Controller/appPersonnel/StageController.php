<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appPersonnel/StageController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/30/19 2:35 PM
 *  * @lastUpdate 4/30/19 10:58 AM
 *  *
 *
 */

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Entity\Alternance;
use App\Entity\StageEtudiant;
use App\Repository\AlternanceRepository;
use App\Repository\StageEtudiantRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StageController
 * @package App\Controller
 * @Route("/application/personnel")
 * @IsGranted("ROLE_PERMANENT")
 */
class StageController extends BaseController
{
    /**
     * @Route("/stage/", name="application_personnel_stage_index")
     * @param StageEtudiantRepository $stageEtudiantRepository
     * @param AlternanceRepository    $alternanceRepository
     *
     * @return Response
     */
    public function index(
        StageEtudiantRepository $stageEtudiantRepository,
        AlternanceRepository $alternanceRepository
    ): Response {
        //todo: gérer les années universitaire par diplome
        if ($this->getConnectedUser() !== null) {
            return $this->render('appPersonnel/stage/index.html.twig', [
                'stagesEnCours'         => $stageEtudiantRepository->findByPersonnelAnnee($this->getConnectedUser(),
                    $this->dataUserSession->getAnneeUniversitaire()),
                'stagesHistorique'      => $stageEtudiantRepository->findByPersonnelHistorique($this->getConnectedUser(),
                    $this->dataUserSession->getAnneeUniversitaire()),
                'alternancesEnCours'    => $alternanceRepository->findByPersonnelAnnee($this->getConnectedUser(),
                    $this->dataUserSession->getAnneeUniversitaire()),
                'alternancesHistorique' => $alternanceRepository->findByPersonnelHistorique($this->getConnectedUser(),
                    $this->dataUserSession->getAnneeUniversitaire()),
            ]);
        }

        return $this->render('bundles/TwigBundle/Exception/error500.html.twig');
    }

    /**
     * @Route("/stage/periode/info/{id}", name="application_personnel_stage_periode_info")
     * @param StageEtudiant $stageEtudiant
     *
     * @return Response
     */
    public function periodeInfo(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('appPersonnel/stage/periodeInfo.html.twig', [
            'stageEtudiant' => $stageEtudiant,
            'stagePeriode'  => $stageEtudiant->getStagePeriode()
        ]);
    }

    /**
     * @Route("/stage/entreprise/info/{id}", name="application_personnel_stage_entreprise_info")
     * @param StageEtudiant $stageEtudiant
     *
     * @return Response
     */
    public function entrepriseInfo(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('appPersonnel/stage/entrepriseInfo.html.twig', [
            'stageEtudiant' => $stageEtudiant
        ]);
    }

    /**
     * @Route("/alternance/entreprise/info/{id}", name="application_personnel_alternance_entreprise_info")
     * @param Alternance $alternance
     *
     * @return Response
     */
    public function alternanceEntrepriseInfo(Alternance $alternance): Response
    {
        return $this->render('appPersonnel/stage/alternanceEntrepriseInfo.html.twig', [
            'alternance' => $alternance
        ]);
    }


}
