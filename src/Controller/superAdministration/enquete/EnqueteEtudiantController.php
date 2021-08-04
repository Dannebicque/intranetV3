<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/enquete/EnqueteEtudiantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:01
 */

namespace App\Controller\superAdministration\enquete;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\QuestionnaireEtudiant;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administratif/enquete/etudiant', name: 'administratif_enquete_etudiant_')]
class EnqueteEtudiantController extends BaseController
{
    #[Route('/voir-editer/{questionnaire}', name: 'voir_modifier')]
    public function voirEditerQuestionnaireEtudiant(
        QuestionnaireEtudiant $questionnaire
    ) {
        return $this->render('super-administration/enquete/voir_editer.html.twig', [
            'questionnaireEtudiant' => $questionnaire,
            'etudiant' => $questionnaire->getEtudiant(),
            'questionnaireSections' => $questionnaire->getQuestionnaireQualite()->getSections(),
            'questionnaire' => $questionnaire->getQuestionnaireQualite(),
            'typeQuestionnaire' => 'qualite',
            'semestre' => $questionnaire->getEtudiant()->getSemestre(),
        ]);
    }

    #[Route('/deverouiller/{questionnaire}', name: 'deverouiller', options: ['expose' => true])]
    public function deverouillerQuestionnaireEtudiant(
        QuestionnaireEtudiant $questionnaire
    ): Response {
        $questionnaire->setTermine(false);
        $questionnaire->setDateTermine(null);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire.deverouiller.success.flash');

        return $this->json(true, Response::HTTP_OK);
    }

    #[Route('/supprimer/{questionnaire}', name: 'supprimer')]
    public function supprimeQuestionnaireEtudiant(
        Request $request,
        QuestionnaireEtudiant $questionnaire
    ): Response {
        $id = $questionnaire->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            //suppression des réponses
            $reponses = $questionnaire->getQuestionnaireEtudiantReponses();
            foreach ($reponses as $reponse) {
                $this->entityManager->remove($reponse);
            }
            $this->entityManager->remove($questionnaire);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire.delete.success.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
