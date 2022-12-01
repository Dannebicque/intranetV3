<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/stage/etudiant/StimulusController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/12/2022 16:29
 */

// src/Controller/FormulaireController.php

namespace App\Controller\stage\etudiant;

use App\Entity\StageEtudiant;
use App\Repository\StageEtudiantRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class StimulusController extends AbstractController
{
    // ---------------------------------------------------------------------------
    // -----------------------------MODAL ETUDIANT--------------------------------
    // ---------------------------------------------------------------------------

    #[Route('/formulaire/vous_modal/{stageEtudiant}', name: 'app_stimulus_modal_vous')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function modal_vous(StageEtudiantRepository $StageEtudiantRepository, StageEtudiant $stageEtudiant)
    {
        return $this->render('stage/formulaire/modal_vous.html.twig', ['stageEtudiant' => $stageEtudiant]);
    }

    // ---------------------------------------------------------------------------
    // -----------------------------MODAL ENTREPRISE------------------------------
    // ---------------------------------------------------------------------------

    #[Route('/formulaire/entreprise_modal/{stageEtudiant}', name: 'app_stimulus_modal_entreprise')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function modal_entreprise(StageEtudiantRepository $StageEtudiantRepository, StageEtudiant $stageEtudiant)
    {
        return $this->render('stage/formulaire/modal_entreprise.html.twig', ['stageEtudiant' => $stageEtudiant]);
    }

    // ---------------------------------------------------------------------------
    // -----------------------------MODAL RESPONSABLE------------------------------
    // ---------------------------------------------------------------------------

    #[Route('/formulaire/responsable_modal/{stageEtudiant}', name: 'app_stimulus_modal_responsable')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function modal_responsable(StageEtudiantRepository $StageEtudiantRepository, StageEtudiant $stageEtudiant)
    {
        return $this->render('stage/formulaire/modal_responsable.html.twig', ['stageEtudiant' => $stageEtudiant]);
    }

    // ---------------------------------------------------------------------------
    // -----------------------------MODAL TUTEUR------------------------------
    // ---------------------------------------------------------------------------

    #[Route('/formulaire/tuteur_modal/{stageEtudiant}', name: 'app_stimulus_modal_tuteur')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function modal_tuteur(StageEtudiantRepository $StageEtudiantRepository, StageEtudiant $stageEtudiant)
    {
        return $this->render('stage/formulaire/modal_tuteur.html.twig', ['stageEtudiant' => $stageEtudiant]);
    }
    // ---------------------------------------------------------------------------
    // -----------------------------MODAL ADRESSE STAGE------------------------------
    // ---------------------------------------------------------------------------

    #[Route('/formulaire/adresse-stage_modal/{stageEtudiant}', name: 'app_stimulus_modal_adss_stage')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function modal_adresse_stage(StageEtudiantRepository $StageEtudiantRepository, StageEtudiant $stageEtudiant)
    {
        return $this->render('stage/formulaire/modal_adss_stage.html.twig', ['stageEtudiant' => $stageEtudiant]);
    }
    // ---------------------------------------------------------------------------
    // -----------------------------MODAL STAGE------------------------------
    // ---------------------------------------------------------------------------

    #[Route('/formulaire/stage_modal/{stageEtudiant}', name: 'app_stimulus_modal_stage')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function modal_stage(StageEtudiantRepository $StageEtudiantRepository, StageEtudiant $stageEtudiant)
    {
        return $this->render('stage/formulaire/modal_stage.html.twig', ['stageEtudiant' => $stageEtudiant]);
    }
}
