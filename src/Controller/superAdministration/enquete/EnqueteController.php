<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administratif/enquete/EnqueteController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\superAdministration\enquete;

use App\Entity\QualiteQuestionnaire;
use App\Entity\Semestre;
use App\Repository\DiplomeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/enquete")
 */
class EnqueteController extends AbstractController
{
    /**
     * @Route("/", name="administratif_enquete_index")
     * @param DiplomeRepository $diplomeRepository
     *
     * @return Response
     */
    public function index(DiplomeRepository $diplomeRepository): Response
    {
        return $this->render('super-administration/enquete/index.html.twig', [
            'diplomes' => $diplomeRepository->findActifs()
        ]);
    }

    /**
     * @Route("/questionnaire/semestre/{semestre}", name="administratif_enquete_semestre")
     *
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function semestre(Semestre $semestre): Response
    {
        return $this->render('super-administration/enquete/semestre.html.twig', [
            'semestre' => $semestre
        ]);
    }

    /**
     * @Route("/questionnaire/create/{semestre}/{step}/{questionnaire}", name="administratif_enquete_semestre_new")
     *
     * @param Semestre                  $semestre
     *
     * @param int                       $step
     *
     * @param QualiteQuestionnaire|null $questionnaire
     *
     * @return Response
     */
    public function create(Semestre $semestre, $step = 1, QualiteQuestionnaire $questionnaire = null): Response
    {
        return $this->render('super-administration/enquete/create.html.twig', [
            'questionnaire' => $questionnaire,
            'semestre' => $semestre,
            'step' => $step
        ]);
    }

    /**
     * @Route("/questionnaire/edit/{questionnaire}/{step}", name="administratif_enquete_edit")
     *
     * @param QualiteQuestionnaire $questionnaire
     * @param int                  $step
     *
     * @return Response
     */
    public function edit(QualiteQuestionnaire $questionnaire, $step = 1): Response
    {
        return $this->render('super-administration/enquete/edit.html.twig', [
            'questionnaire' => $questionnaire,
            'semestre' => $questionnaire->getSemestre(),
            'step' => $step
        ]);
    }
}
