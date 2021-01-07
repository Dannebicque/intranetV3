<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/EnqueteDiplomeController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/01/2021 17:35

namespace App\Controller\superAdministration;

use App\Classes\Configuration;
use App\Classes\Enquetes\MyEnqueteDiplome;
use App\Repository\QuestionnaireEtudiantRepository;
use App\Repository\QuestionnaireQuizzRepository;
use App\Repository\RddDiplomeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/enquete-diplome")
 */
class EnqueteDiplomeController extends AbstractController
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
     * @Route("/", name="administratif_enquete_diplome_index")
     * @param QuestionnaireEtudiantRepository $questionnaireEtudiantRepository
     * @param RddDiplomeRepository            $rddDiplomeRepository
     * @param Configuration                   $configuration
     * @param QuestionnaireQuizzRepository    $questionnaireQuizzRepository
     *
     * @return Response
     */
    public function index(
        QuestionnaireEtudiantRepository $questionnaireEtudiantRepository,
        RddDiplomeRepository $rddDiplomeRepository,
        Configuration $configuration,
        QuestionnaireQuizzRepository $questionnaireQuizzRepository
    ): Response {
        $nbAttendus = $rddDiplomeRepository->findBy(['enqueteAFaire' => 1]);
        $questionnaire = $questionnaireQuizzRepository->find($configuration->get('ENQUETE_DIPLOME'));
        $reponses = $questionnaireEtudiantRepository->findByQuestionnaire($questionnaire);
        $pourcentage = count($reponses) / count($nbAttendus);

        return $this->render('super-administration/enquete-diplome/index.html.twig', [
            'questionnaire'     => $questionnaire,
            'reponses'          => $reponses,
            'nbAttendus'        => $nbAttendus,
            'pourcentageRetour' => $pourcentage
        ]);
    }

    /**
     * @Route("/export", name="administratif_enquete_diplome_export")
     * @param QuestionnaireEtudiantRepository $questionnaireEtudiantRepository
     * @param RddDiplomeRepository            $rddDiplomeRepository
     * @param Configuration                   $configuration
     * @param QuestionnaireQuizzRepository    $questionnaireQuizzRepository
     *
     * @return Response
     */
    public function export(
        MyEnqueteDiplome $myEnqueteDiplome,
        QuestionnaireEtudiantRepository $questionnaireEtudiantRepository,
        RddDiplomeRepository $rddDiplomeRepository,
        Configuration $configuration,
        QuestionnaireQuizzRepository $questionnaireQuizzRepository
    ): Response {
        $attendus = $rddDiplomeRepository->findBy(['enqueteAFaire' => 1]);
        $questionnaire = $questionnaireQuizzRepository->find($configuration->get('ENQUETE_DIPLOME'));
        $reponses = $questionnaireEtudiantRepository->findByQuestionnaire($questionnaire);

        $myEnqueteDiplome->export($questionnaire, $attendus, $reponses);
    }
}
