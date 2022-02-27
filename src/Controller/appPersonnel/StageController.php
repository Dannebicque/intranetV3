<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/StageController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

namespace App\Controller\appPersonnel;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Alternance;
use App\Entity\StageEtudiant;
use App\Repository\AlternanceRepository;
use App\Repository\StageEtudiantRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StageController.
 *
 * @IsGranted("ROLE_PERMANENT")
 */
#[Route(path: '/application/personnel')]
class StageController extends BaseController
{
    #[Route(path: '/stage/', name: 'application_personnel_stage_index')]
    public function index(StageEtudiantRepository $stageEtudiantRepository, AlternanceRepository $alternanceRepository): Response
    {
        if (null !== $this->getUser()) {
            return $this->render('appPersonnel/stage/index.html.twig', [
                'stagesEnCours' => $stageEtudiantRepository->findByPersonnelAnnee($this->getUser(),
                    $this->dataUserSession->getAnneeUniversitaire()),
                'stagesHistorique' => $stageEtudiantRepository->findByPersonnelHistorique($this->getUser(),
                    $this->dataUserSession->getAnneeUniversitaire()),
                'alternancesEnCours' => $alternanceRepository->getByPersonnelAndAnneeUniversitaire($this->getUser(),
                    $this->dataUserSession->getAnneeUniversitaire()),
                'alternancesHistorique' => $alternanceRepository->getHistoriqueByPersonnelAndAnneeUniversitaire($this->getUser(),
                    $this->dataUserSession->getAnneeUniversitaire()),
            ]);
        }

        return $this->render('bundles/TwigBundle/Exception/error500.html.twig');
    }

    #[Route(path: '/stage/export/{periode}.{_format}', name: 'application_personnel_stage_export')]
    public function exportStage(
        MySerializer $mySerializer,
        MyExport $myExport, StageEtudiantRepository $stageEtudiantRepository, $periode, $_format): Response
    {
        if ('courant' === $periode) {
            $stages = $stageEtudiantRepository->findByPersonnelAnnee($this->getUser(),
                $this->dataUserSession->getAnneeUniversitaire());
        } else {
            $stages = $stageEtudiantRepository->findByPersonnelHistorique($this->getUser(),
                $this->dataUserSession->getAnneeUniversitaire());
        }

        $data = $mySerializer->getDataFromSerialization(
            $stages,
            [
                'entreprise' => ['raisonSociale', 'responsable' => ['nom', 'prenom', 'fonction', 'telephone', 'email']],
                'tuteur' => ['nom', 'prenom', 'fonction', 'telephone', 'email'],
                'serviceStageEntreprise',
                'type',
                'personnel' => ['nom', 'prenom'],
                'sujetStage',
                'dateDebutStage',
                'dateFinStage',
            ],
            ['stage_entreprise', 'adresse']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'stages',
        );
    }

    #[Route(path: '/alternance/export/{periode}.{_format}', name: 'application_personnel_alternance_export')]
    public function exportAlternance(MyExport $myExport, AlternanceRepository $alternanceRepository, $periode, $_format): Response
    {
        if ('courant' === $periode) {
            $alternances = $alternanceRepository->getByPersonnelAndAnneeUniversitaire($this->getUser(),
                $this->dataUserSession->getAnneeUniversitaire());
        } else {
            $alternances = $alternanceRepository->getHistoriqueByPersonnelAndAnneeUniversitaire($this->getUser(),
                $this->dataUserSession->getAnneeUniversitaire());
        }

        return $myExport->genereFichierGenerique(
            $_format,
            $alternances,
            'alternances',
            ['alternance_administration', 'utilisateur'],
            [
                'entreprise' => ['libelle'],
                'tuteur' => ['nom', 'prenom', 'fonction', 'telephone', 'email', 'portable'],
                'etudiant' => ['nom', 'prenom', 'mailUniv'],
                'tuteurUniversitaire' => ['nom', 'prenom', 'mailUniv'],
                'typeContrat',
                'dateDebut',
                'dateFin',
            ]
        );
    }

    #[Route(path: '/stage/periode/info/{id}', name: 'application_personnel_stage_periode_info')]
    public function periodeInfo(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('appPersonnel/stage/periodeInfo.html.twig', [
            'stageEtudiant' => $stageEtudiant,
            'stagePeriode' => $stageEtudiant->getStagePeriode(),
        ]);
    }

    #[Route(path: '/stage/entreprise/info/{id}', name: 'application_personnel_stage_entreprise_info')]
    public function entrepriseInfo(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('appPersonnel/stage/entrepriseInfo.html.twig', [
            'stageEtudiant' => $stageEtudiant,
        ]);
    }

    #[Route(path: '/alternance/entreprise/info/{id}', name: 'application_personnel_alternance_entreprise_info')]
    public function alternanceEntrepriseInfo(Alternance $alternance): Response
    {
        return $this->render('appPersonnel/stage/alternanceEntrepriseInfo.html.twig', [
            'alternance' => $alternance,
        ]);
    }
}
