<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/EnqueteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/12/2022 15:26
 */

namespace App\Controller;

use App\Entity\Etudiant;
use App\Entity\QuestionnaireQuizz;
use App\Repository\QuestionnaireEtudiantRepository;
use Carbon\Carbon;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @deprecated
 */
class EnqueteController extends BaseController
{
//    #[Route(path: '/embed_enquete/{questionnaireQuizz}/{etudiant}', name: 'embed_enquete')]
//    public function enquete(QuestionnaireQuizz $questionnaireQuizz, Etudiant $etudiant): Response
//    {
//        return $this->render('enquete/_enquete.html.twig', [
//            'questionnaire' => $questionnaireQuizz,
//            'questionnaireSections' => $questionnaireQuizz->getSections(),
//            'typeQuestionnaire' => 'quizz',
//            'etudiant' => $etudiant,
//        ]);
//    }

    #[Route(path: '/rdd/enquete/complet/{uuid}/{etudiant}', name: 'enquete_questionnaire_complete')]
    #[ParamConverter('questionnaireQuizz', options: ['mapping' => ['uuid' => 'uuid']])]
    public function complet(
        QuestionnaireEtudiantRepository $quizzEtudiantRepository,
        QuestionnaireQuizz $questionnaireQuizz,
        Etudiant $etudiant
    ): Response {
        $quizzEtudiant = $quizzEtudiantRepository->findOneBy([
            'questionnaireQuizz' => $questionnaireQuizz->getId(),
            'etudiant' => $etudiant->getId(),
        ]);
        if (null !== $quizzEtudiant) {
            $quizzEtudiant->setDateTermine(Carbon::now());
            $quizzEtudiant->setTermine(true);
            $this->entityManager->flush();

            return $this->render('rdd/fin.html.twig');
        }

        return $this->redirectToRoute('erreur_666');
    }
}
