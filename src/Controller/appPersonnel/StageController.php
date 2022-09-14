<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appPersonnel/StageController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 09:23
 */

namespace App\Controller\appPersonnel;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Classes\Pdf\MyPDF;
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
 */
#[Route(path: '/application/personnel')]
#[IsGranted('ROLE_PERMANENT')]
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
        MyExport $myExport, StageEtudiantRepository $stageEtudiantRepository, string $periode, string $_format): Response
    {
        if ('courant' === $periode) {
            $stages = $stageEtudiantRepository->findByPersonnelAnnee($this->getUser(),
                $this->getAnneeUniversitaire());
        } else {
            $stages = $stageEtudiantRepository->findByPersonnelHistorique($this->getUser(),
                $this->getAnneeUniversitaire());
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
            ['stage_entreprise', 'adresse'],
            ['dateDebutStage' => MySerializer::ONLY_DATE, 'dateFinStage' => MySerializer::ONLY_DATE]
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'stages',
        );
    }

    #[Route(path: '/alternance/export/{periode}.{_format}', name: 'application_personnel_alternance_export')]
    public function exportAlternance(
        MySerializer $mySerializer,
        MyExport $myExport, AlternanceRepository $alternanceRepository, string $periode, string $_format): Response
    {
        // todo: séparer Stage et Alternance...
        if ('courant' === $periode) {
            $alternances = $alternanceRepository->getByPersonnelAndAnneeUniversitaire($this->getUser(),
                $this->dataUserSession->getAnneeUniversitaire());
        } else {
            $alternances = $alternanceRepository->getHistoriqueByPersonnelAndAnneeUniversitaire($this->getUser(),
                $this->dataUserSession->getAnneeUniversitaire());
        }
        $data = $mySerializer->getDataFromSerialization(
            $alternances,
            [
                'entreprise' => ['libelle'],
                'tuteur' => ['nom', 'prenom', 'fonction', 'telephone', 'email', 'portable'],
                'etudiant' => ['nom', 'prenom', 'mailUniv'],
                'tuteurUniversitaire' => ['nom', 'prenom', 'mailUniv'],
                'typeContrat',
                'dateDebut',
                'dateFin',
            ],
            ['alternance_administration', 'utilisateur'],
            ['dateDebut' => MySerializer::ONLY_DATE, 'dateFin' => MySerializer::ONLY_DATE]
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'alternances_'.$this->getDepartement()->getLibelle(),
        // todo: pas idéal... afficher le diplôme ?
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

    #[Route(path: '/stage/etudiant/info/{id}', name: 'app_personnel_stage_fiche_imprimer')]
    public function imprimerFicheStage(MyPDF $myPDF, StageEtudiant $stageEtudiant): Response
    {
        return $myPDF::generePdf('pdf/fichePDFStage.html.twig',
            [
                'stageEtudiant' => $stageEtudiant,
            ],
            'Fiche-Enseignant-stage-'.$stageEtudiant->getEtudiant()->getNom()
        );
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
