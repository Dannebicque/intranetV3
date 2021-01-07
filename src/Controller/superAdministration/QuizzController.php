<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/QuizzController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/01/2021 17:35

namespace App\Controller\superAdministration;

use App\Classes\Enquetes\MyEnquete;
use App\Entity\Constantes;
use App\Entity\QuestionnaireQualite;
use App\Entity\QuestionnaireQuestionnaireSection;
use App\Entity\QuestionnaireQuizz;
use App\Entity\Semestre;
use App\Repository\DiplomeRepository;
use App\Repository\EtudiantRepository;
use App\Repository\PrevisionnelRepository;
use App\Repository\QuestionnaireEtudiantRepository;
use App\Repository\QuestionnaireQuizzRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
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
     *
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }


    /**
     * @Route("/", name="administratif_quizz_index")
     * @param EtudiantRepository $etudiantRepository
     * @param DiplomeRepository  $diplomeRepository
     *
     * @return Response
     */
    public function index(QuestionnaireQuizzRepository $questionnaireQuizzRepository): Response
    {
        return $this->render('super-administration/quizz/index.html.twig', [
            'questionnaires' => $questionnaireQuizzRepository->findAll()
        ]);
    }

    /**
     * @Route("/{questionnaire}", name="administratif_quizz_show")
     * @param QuestionnaireEtudiantRepository $questionnaireEtudiantRepository
     * @param QuestionnaireQuizz              $questionnaire
     *
     * @return Response
     */
    public function show(
        QuestionnaireEtudiantRepository $questionnaireEtudiantRepository,
        QuestionnaireQuizz $questionnaire
    ): Response {
        return $this->render('super-administration/quizz/show.html.twig', [
            'questionnaire' => $questionnaire,
            'reponses'      => $questionnaireEtudiantRepository->findByQuestionnaire($questionnaire)
        ]);
    }
}
