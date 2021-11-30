<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/questionnaire/QuestionnaireController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/09/2021 07:59
 */

namespace App\Controller\questionnaire;

use App\Classes\Enquetes\EnqueteRelance;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\QuestionnaireEtudiant;
use App\Entity\QuestionnaireEtudiantReponse;
use App\Entity\QuestionnaireQualite;
use App\Entity\QuestionnaireQuestion;
use App\Entity\QuestionnaireQuestionnaireSection;
use App\Repository\EtudiantRepository;
use App\Repository\QuestionnaireEtudiantReponseRepository;
use App\Repository\QuestionnaireEtudiantRepository;
use App\Repository\QuestionnaireQualiteRepository;
use App\Repository\QuestionnaireQuestionRepository;
use App\Repository\QuestionnaireQuizzRepository;
use App\Repository\QuestionnaireReponseRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class QualiteController.
 */
class QuestionnaireMailsController extends BaseController
{
    /**
     * @Route("/questionnaire/relance/{questionnaire}", name="administratif_enquete_relance")
     */
    public function relance(
        FlashBagInterface $flashBag,
        EnqueteRelance $enqueteRelance,
        EtudiantRepository $etudiantRepository,
        QuestionnaireEtudiantRepository $quizzEtudiantRepository,
        QuestionnaireQualite $questionnaire
    ) {
        $reponses = $quizzEtudiantRepository->findByQuestionnaireQualite($questionnaire);
        $etudiants = $etudiantRepository->findBySemestre($questionnaire->getSemestre());

        $enqueteRelance->envoyerRelance($questionnaire, $reponses, $etudiants);
        $flashBag->add(Constantes::FLASHBAG_SUCCESS, 'Message de relance envoyé');

        return $this->redirectToRoute('administratif_enquete_semestre',
            ['semestre' => $questionnaire->getSemestre()->getId()]);
    }

    /**
     * @Route("/questionnaire/relance/{questionnaire}/{etudiant}", name="enquete_relance_individuelle")
     */
    public function relanceIndividuelle(
        EnqueteRelance $enqueteRelance,
        QuestionnaireQualite $questionnaire, Etudiant $etudiant)
    {
        $enqueteRelance->envoyerRelanceIndividuelle($questionnaire, $etudiant);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Message de relance envoyé');
    }
}
