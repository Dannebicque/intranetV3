<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/administration/QuestionnaireQualiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Controller\questionnaire\administration;

use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\QuestChoixEtudiant;
use App\Entity\QuestQuestionnaire;
use App\Exception\SemestreNotFoundException;
use App\Repository\QuestChoixRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/{type}/questionnaire/qualite', name: 'adm_questionnaire_qualite_', requirements: ['type' => 'administratif|administration'], defaults: ['type' => 'administratif'])]
class QuestionnaireQualiteController extends BaseController
{
    /**
     * @throws SemestreNotFoundException
     */
    #[Route('/{id}/detail', name: 'detail', methods: ['GET'])]
    public function detail(
        Request $request,
        QuestionnaireRegistry $questionnaireRegistry,
        QuestQuestionnaire $questionnaireQualite
    ): Response {
        // $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        if (null === $questionnaireQualite->getTypeDestinataire()) {
            $liste = [];
        } else {
            $dest = $questionnaireRegistry->getTypeDestinataire($questionnaireQualite->getTypeDestinataire());
            $liste = $dest
                ->setQuestionnaire($questionnaireQualite)
                ->getListeDestinataire();
        }

        return $this->render('questionnaire/administration/questionnaire_qualite/detail.html.twig',
            [
                'liste' => $liste,
                'questionnaire' => $questionnaireQualite,
                'type' => $request->get('type'),
                'typeDestinataire' => $dest::LABEL,
            ]);
    }

    #[Route('/{id}/duplicate', name: 'duplicate', methods: ['GET', 'POST'])]
    public function duplicate(
        Request $request,
        QuestQuestionnaire $questionnaire
    ): Response {
        $newQuestionnaireQualite = clone $questionnaire;
        $newQuestionnaireQualite->setLibelle($questionnaire->getLibelle() . ' - copie');
        $this->entityManager->persist($newQuestionnaireQualite);
        foreach ($questionnaire->getQuestSections() as $section) {
            $nSection = clone $section;
            $nSection->setQuestionnaire($newQuestionnaireQualite);
            $newQuestionnaireQualite->addQuestSection($nSection);
            $this->entityManager->persist($nSection);

            //duplique les questions
            foreach ($section->getQuestQuestions() as $question) {
                $nQuestion = clone $question;
                $nQuestion->setSection($nSection);
                $nSection->addQuestQuestion($nQuestion);
                $this->entityManager->persist($nQuestion);

                //duplique les choix
                foreach ($question->getQuestReponses() as $reponse) {
                    $nChoix = clone $reponse;
                    $nChoix->setQuestion($nQuestion);
                    $nQuestion->addQuestReponse($nChoix);
                    $this->entityManager->persist($nChoix);
                }
            }
        }
        $this->entityManager->flush();
        $this->addFlash(Constantes::FLASHBAG_SUCCESS, 'questionnaire.duplicate.success.flashbag');

        return $this->redirectToRoute('adm_questionnaire_creation_index',
            ['questionnaire' => $questionnaire->getId(), 'type' => $request->get('type')]
        );
    }

    #[Route('/{id}', name: 'delete', methods: ['DELETE'])]
    public function delete(
        QuestChoixRepository $questChoixRepository,
        Request $request,
        QuestQuestionnaire $questionnaireQualite
    ): Response {
        $id = $questionnaireQualite->getId();

        if ($this->isCsrfTokenValid('delete' . $questionnaireQualite->getId(),
            $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            // suppression des choix et choixUser

            // suppression des sections
            // suppression des questions et réponses
            foreach ($questionnaireQualite->getQuestSections() as $section) {
                foreach ($section->getQuestQuestions() as $question) {
                    foreach ($question->getQuestReponses() as $reponse) {
                        $this->entityManager->remove($reponse);
                    }
                    $this->entityManager->remove($question);
                }
                $this->entityManager->remove($section);
            }

            $this->entityManager->remove($questionnaireQualite);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'actualite.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route('/supprimer/{questionnaire}', name: 'supprimer')]
    public function supprimeQuestionnaireEtudiant(
        Request            $request,
        QuestChoixEtudiant $questionnaire
    ): Response
    {
        $id = $questionnaire->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            // suppression des réponses
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
