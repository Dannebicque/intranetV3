<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/StageController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/09/2020 13:01

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Entity\Alternance;
use App\Entity\StageEtudiant;
use App\Classes\MyExport;
use App\Repository\AlternanceRepository;
use App\Repository\StageEtudiantRepository;
use PhpOffice\PhpSpreadsheet\Exception;
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

        if ($this->getConnectedUser() !== null) {
            return $this->render('appPersonnel/stage/index.html.twig', [
                'stagesEnCours'         => $stageEtudiantRepository->findByPersonnelAnnee($this->getConnectedUser(),
                    $this->dataUserSession->getAnneeUniversitaire()),
                'stagesHistorique'      => $stageEtudiantRepository->findByPersonnelHistorique($this->getConnectedUser(),
                    $this->dataUserSession->getAnneeUniversitaire()),
                'alternancesEnCours'    => $alternanceRepository->getByPersonnelAndAnneeUniversitaire($this->getConnectedUser(),
                    $this->dataUserSession->getAnneeUniversitaire()),
                'alternancesHistorique' => $alternanceRepository->getHistoriqueByPersonnelAndAnneeUniversitaire($this->getConnectedUser(),
                    $this->dataUserSession->getAnneeUniversitaire()),
            ]);
        }

        return $this->render('bundles/TwigBundle/Exception/error500.html.twig');
    }

    /**
     * @Route("/stage/export/{periode}.{_format}", name="application_personnel_stage_export")
     * @param MyExport                $myExport
     * @param StageEtudiantRepository $stageEtudiantRepository
     * @param                         $periode
     * @param                         $_format
     *
     * @return Response
     * @throws Exception
     */
    public function exportStage(MyExport $myExport, StageEtudiantRepository $stageEtudiantRepository, $periode, $_format): Response
    {
        if ($periode === 'courant') {
            $stages= $stageEtudiantRepository->findByPersonnelAnnee($this->getConnectedUser(),
                $this->dataUserSession->getAnneeUniversitaire());
        } else {
            $stages = $stageEtudiantRepository->findByPersonnelHistorique($this->getConnectedUser(),
                $this->dataUserSession->getAnneeUniversitaire());
        }
        return $myExport->genereFichierGenerique(
            $_format,
            $stages,
            'stages',
            ['stage_entreprise', 'adresse'],
            [
                'entreprise' => ['raisonSociale', 'responsable' => ['nom', 'prenom', 'fonction', 'telephone', 'email']],
                'tuteur'     => ['nom', 'prenom', 'fonction', 'telephone', 'email'],
                'serviceStageEntreprise',
                'type',
                'personnel'  => ['nom', 'prenom'],
                'sujetStage',
                'dateDebutStage',
                'dateFinStage'
            ]
        );
    }

    /**
     * @Route("/alternance/export/{periode}.{_format}", name="application_personnel_alternance_export")
     * @param MyExport                $myExport
     * @param AlternanceRepository    $alternanceRepository
     * @param                         $periode
     * @param                         $_format
     *
     * @return Response
     * @throws Exception
     */
    public function exportAlternance(MyExport $myExport, AlternanceRepository $alternanceRepository, $periode, $_format): Response
    {
        if ($periode === 'courant') {
            $alternances = $alternanceRepository->getByPersonnelAndAnneeUniversitaire($this->getConnectedUser(),
                $this->dataUserSession->getAnneeUniversitaire());
        } else {
            $alternances = $alternanceRepository->getHistoriqueByPersonnelAndAnneeUniversitaire($this->getConnectedUser(),
                $this->dataUserSession->getAnneeUniversitaire());
        }
        return $myExport->genereFichierGenerique(
            $_format,
            $alternances,
            'alternances',
            ['alternance_administration', 'utilisateur'],
            ['entreprise' => ['libelle'], 'tuteur' => ['nom', 'prenom', 'fonction', 'telephone', 'email', 'portable'], 'etudiant' => ['nom', 'prenom', 'mailUniv'],'tuteurUniversitaire' => ['nom', 'prenom', 'mailUniv'], 'typeContrat', 'dateDebut', 'dateFin']
        );
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
