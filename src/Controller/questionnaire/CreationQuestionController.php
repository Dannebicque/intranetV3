<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/CreationQuestionController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/01/2023 20:07
 */

namespace App\Controller\questionnaire;

use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Controller\BaseController;
use App\Entity\QuestQuestion;
use App\Repository\QuestQuestionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CreationQuestionController extends BaseController
{
    #[Route('/questionnaire/creation-question/{question}', name: 'questionnaire_creation_question_manage')]
    public function manageQuestion(
        QuestionnaireRegistry $questionnaireRegistry,
        QuestQuestionRepository $questionRepository,
        Request $request,
        QuestQuestion $question
    ): Response {
        $action = $request->query->get('action');
        switch ($action) {
            case 'delete':
                $questions = $questionRepository->findQuestionsSuivantes($question);
                $question->getSection()->removeQuestQuestion($question);

                //todo: supprimer les réponses des users
//                foreach ($question->getQuestionsEnfants() as $q) {
//                    $this->entityManager->remove($q);
//                }
//
//                foreach ($question->getQuestReponses() as $reponse) {
//                    $this->entityManager->remove($reponse);
//                }

                $this->entityManager->remove($question);

                foreach ($questions as $q) {
                    $q->setOrdre($q->getOrdre() - 1);
                }

                $this->entityManager->flush();
                break;
            case 'sauvegarde':
                $typeQuestion = $questionnaireRegistry->getTypeQuestion($question->getType());
                $typeQuestion->sauvegarde($question, $request, $this->entityManager);
                $this->entityManager->flush();

                return $this->render(
                    'questionnaire/creation/question/_question.html.twig',
                    [
                        'question' => $question,
                    ]
                );

            case 'edit':
                if ($request->query->has('typeQuestion')) {
                    $question->setType($request->query->get('typeQuestion'));
                    //todo: supprimer les réponses ou les parametres devenus obsolètes... Méthode nettoyage à ajouter dans les types
                    $this->entityManager->flush();
                }

                $typeQuestion = $questionnaireRegistry->getTypeQuestion($question->getType());
                $form = $this->createForm($typeQuestion::FORM, $question, [
                    'listeTypeQuestion' => $questionnaireRegistry->getAllTypeQuestions(),
                ]);

                return $this->render(
                    'questionnaire/creation/question/_question_temp.html.twig',
                    [
                        'question' => $question,
                        'form' => $form->createView(),
                    ]
                );
            case 'duplicate':
                $nQuestion = clone $question;
                $nQuestion->setLibelle($question->getLibelle() . ' (copie)');
                $nQuestion->setOrdre($questionRepository->getMaxOrdre($question->getSection()) + 1);
                $this->entityManager->persist($nQuestion);

                foreach ($question->getQuestionsEnfants() as $qEnfant) {
                    $nqEnfant = clone $qEnfant;
                    $nqEnfant->setQuestionParent($nQuestion);
                    $nQuestion->addQuestionsEnfant($nqEnfant);
                    $this->entityManager->persist($nqEnfant);
                }

                foreach ($question->getQuestReponses() as $reponse) {
                    $nReponse = clone $reponse;
                    $nQuestion->addQuestReponse($nReponse);
                    $nReponse->setQuestion($nQuestion);
                    $this->entityManager->persist($nReponse);
                }

                $this->entityManager->flush();
                break;
            case 'up':
                $questionOld = $questionRepository->findOneBy([
                    'ordre' => $question->getOrdre() - 1,
                    'section' => $question->getSection(),
                ]);
                $question->setOrdre($question->getOrdre() - 1);
                if (null !== $questionOld) {
                    $questionOld->setOrdre($questionOld->getOrdre() + 1);
                }

                $this->entityManager->flush();
                break;
            case 'down':
                $questionOld = $questionRepository->findOneBy([
                    'ordre' => $question->getOrdre() + 1,
                    'section' => $question->getSection(),
                ]);
                $question->setOrdre($question->getOrdre() + 1);
                if (null !== $questionOld) {
                    $questionOld->setOrdre($questionOld->getOrdre() - 1);
                }
                $this->entityManager->flush();
                break;
        }

        return $this->json(true);
    }
}
