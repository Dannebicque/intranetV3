<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/EnqueteController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 24/11/2020 10:10

namespace App\Controller;

use App\Entity\Etudiant;
use App\Entity\QuestionnaireQuizz;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EnqueteController extends AbstractController
{

    /**
     * @param QuestionnaireQuizz $questionnaireQuizz
     *
     * @param Etudiant           $etudiant
     *
     * @return Response
     * @Route("embed_enquete/{questionnaireQuizz}/{etudiant}", name="embed_enquete")
     */
    public function enquete(QuestionnaireQuizz $questionnaireQuizz, Etudiant $etudiant)
    {
        return $this->render('enquete/_enquete.html.twig', [
            'questionnaire'         => $questionnaireQuizz,
            'questionnaireSections' => $questionnaireQuizz->getSections(),
            'typeQuestionnaire'     => 'quizz',
            'etudiant'              => $etudiant
        ]);
    }
}
