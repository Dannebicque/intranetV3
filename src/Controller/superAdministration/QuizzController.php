<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/QuizzController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Controller\superAdministration;

use App\Entity\QuestionnaireQuizz;
use App\Repository\QuestionnaireEtudiantRepository;
use App\Repository\QuestionnaireQuizzRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/quizz")
 */
class QuizzController extends AbstractController
{
    private EntityManagerInterface $entityManager;

    /**
     * EnqueteController constructor.
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/", name="administratif_quizz_index")
     */
    public function index(QuestionnaireQuizzRepository $questionnaireQuizzRepository): Response
    {
        return $this->render('super-administration/quizz/index.html.twig', [
            'questionnaires' => $questionnaireQuizzRepository->findAll(),
        ]);
    }

    /**
     * @Route("/{questionnaire}", name="administratif_quizz_show")
     */
    public function show(
        QuestionnaireEtudiantRepository $questionnaireEtudiantRepository,
        QuestionnaireQuizz $questionnaire
    ): Response {
        return $this->render('super-administration/quizz/show.html.twig', [
            'questionnaire' => $questionnaire,
            'reponses'      => $questionnaireEtudiantRepository->findByQuestionnaire($questionnaire),
        ]);
    }
}
