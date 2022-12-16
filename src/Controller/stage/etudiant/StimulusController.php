<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/stage/etudiant/StimulusController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/12/2022 12:09
 */

// src/Controller/FormulaireController.php

namespace App\Controller\stage\etudiant;

use App\Entity\StageEtudiant;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StimulusController extends AbstractController
{
    // ---------------------------------------------------------------------------
    // -----------------------------MODAL ETUDIANT--------------------------------
    // ---------------------------------------------------------------------------

    #[Route('/formulaire/vous_modal/{stageEtudiant}', name: 'app_stimulus_modal_vous')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function modal_vous(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('stage/formulaire/modal_vous.html.twig', ['stageEtudiant' => $stageEtudiant]);
    }

    // ---------------------------------------------------------------------------
    // -----------------------------MODAL ENTREPRISE------------------------------
    // ---------------------------------------------------------------------------

    #[Route('/formulaire/entreprise_modal/{stageEtudiant}', name: 'app_stimulus_modal_entreprise')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function modal_entreprise(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('stage/formulaire/modal_entreprise.html.twig', ['stageEtudiant' => $stageEtudiant]);
    }

    // ---------------------------------------------------------------------------
    // -----------------------------MODAL RESPONSABLE------------------------------
    // ---------------------------------------------------------------------------

    #[Route('/formulaire/responsable_modal/{stageEtudiant}', name: 'app_stimulus_modal_responsable')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function modal_responsable(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('stage/formulaire/modal_responsable.html.twig', ['stageEtudiant' => $stageEtudiant]);
    }

    // ---------------------------------------------------------------------------
    // -----------------------------MODAL TUTEUR------------------------------
    // ---------------------------------------------------------------------------

    #[Route('/formulaire/tuteur_modal/{stageEtudiant}', name: 'app_stimulus_modal_tuteur')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function modal_tuteur(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('stage/formulaire/modal_tuteur.html.twig', ['stageEtudiant' => $stageEtudiant]);
    }
    // ---------------------------------------------------------------------------
    // -----------------------------MODAL ADRESSE STAGE------------------------------
    // ---------------------------------------------------------------------------

    #[Route('/formulaire/adresse-stage_modal/{stageEtudiant}', name: 'app_stimulus_modal_adss_stage')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function modal_adresse_stage(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('stage/formulaire/modal_adss_stage.html.twig', ['stageEtudiant' => $stageEtudiant]);
    }
    // ---------------------------------------------------------------------------
    // -----------------------------MODAL STAGE------------------------------
    // ---------------------------------------------------------------------------

    #[Route('/formulaire/stage_modal/{stageEtudiant}', name: 'app_stimulus_modal_stage')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function modal_stage(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('stage/formulaire/modal_stage.html.twig', ['stageEtudiant' => $stageEtudiant]);
    }
}
