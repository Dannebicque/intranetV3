<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/CreationSectionController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/01/2023 15:17
 */

namespace App\Controller\questionnaire;

use App\Components\Questionnaire\TypeQuestion\TypeQcu;
use App\Controller\BaseController;
use App\Entity\QuestQuestion;
use App\Entity\QuestSection;
use App\Form\QuestSectionType;
use App\Repository\QuestQuestionRepository;
use App\Repository\QuestSectionRepository;
use App\Utils\JsonRequest;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/{type}/questionnaire/creation/section', name: 'adm_questionnaire_creation_section_', requirements: ['type' => 'administratif|administration'], defaults: ['type' => 'administratif'])]
class CreationSectionController extends BaseController
{
    #[Route('/{section}', name: 'index')]
    public function section(
        QuestSectionRepository $questSectionRepository,
        QuestQuestionRepository $questionRepository,
        Request $request,
        QuestSection $section
    ): Response {
        switch ($request->query->get('action')) {
            case 'edit':
                $form = $this->createForm(QuestSectionType::class, $section);

                return $this->render('questionnaire/creation/section/edit.html.twig', [
                    'section' => $section,
                    'form' => $form->createView(),
                ]);
            case 'delete':
                $sections = $questSectionRepository->findsectionsSuivantes($section);

                foreach ($section->getQuestQuestions() as $question) {
                    $this->entityManager->remove($question);
                }

                $section->getQuestionnaire()->removeQuestSection($section);
                $this->entityManager->remove($section);

                foreach ($sections as $s) {
                    $s->setOrdre($s->getOrdre() - 1);
                }

                $this->entityManager->flush();

                return $this->json(true);
            case 'refreshContent':
                $liste = $questionRepository->findByDepartementOrNull($this->getDepartement());
                break;
            case 'left':
                $sectionOld = $questSectionRepository->findOneBy([
                    'ordre' => $section->getOrdre() - 1,
                    'questionnaire' => $section->getQuestionnaire(),
                ]);
                $section->setOrdre($section->getOrdre() - 1);
                if (null !== $sectionOld) {
                    $sectionOld->setOrdre($sectionOld->getOrdre() + 1);
                }

                $this->entityManager->flush();

                return $this->json(true);
            case 'right':
                $sectionOld = $questSectionRepository->findOneBy([
                    'ordre' => $section->getOrdre() + 1,
                    'questionnaire' => $section->getQuestionnaire(),
                ]);

                $section->setOrdre($section->getOrdre() + 1);
                if (null !== $sectionOld) {
                    $sectionOld->setOrdre($sectionOld->getOrdre() - 1);
                }
                $this->entityManager->flush();

                return $this->json(true);
            case 'sauvegarde':
                $data = $request->request->all()['quest_section'];
                $section->setTitre($data['titre']);
                $section->setTextExplicatif($data['textExplicatif']);
                $section->setTypeSection($data['typeSection']);
                $section->setEnabled($data['enabled']);
                $section->setConfig(['configSection' => $data['configSection']]); // todo: éventuellement array_merge si des data sont déjà là??
                $this->entityManager->flush();

                return $this->json(true);
            case 'addQuestion':
                $idQuestion = $request->query->get('question');
                $ordre = $questionRepository->getMaxOrdre($section) + 1;

                if ('new' === $idQuestion) {
                    $question = new QuestQuestion();
                    $question->setLibelle('Nouvelle question ' . $ordre);
                    $question->setOrdre($ordre);
                    $question->setSection($section);
                    $question->setType(TypeQcu::class);
                    $this->entityManager->persist($question);
                } else {
                    $question = $questionRepository->find($idQuestion);
                    if (null !== $question) {
                        $newQuestion = clone $question;
                        $newQuestion->setOrdre($ordre);
                        $newQuestion->setSection($section); // todo: cloner les réponses
                        $this->entityManager->persist($newQuestion);
                    }
                }

                $this->entityManager->flush();
                $liste = $questionRepository->findByDepartementOrNull($this->getDepartement());
                break;
        }

        return $this->render('questionnaire/creation/section/section.html.twig', [
            'section' => $section,
            'liste' => $liste,
        ]);
    }

    #[Route('/{section}/transition-question/{question}', name: 'transition_question')]
    public function configTransitionQuestion(
        Request $request,
        QuestSection $section,
        QuestQuestion $question,
    ): Response {
        return $this->render('questionnaire/creation/section/_transitionQuestion.html.twig', [
            'section' => $section,
            'question' => $question,
            'type' => $request->get('type'),
        ]);
    }

    #[Route('/{section}/transition-question-affiche/{question}', name: 'transition_question_affiche')]
    public function configTransitionAfficheQuestion(
        Request $request,
        QuestQuestionRepository $questionRepository,
        QuestSection $section,
        QuestQuestion $question,
    ): Response {
        $typeAction = $request->query->get('typeAction');
        $allQuestions = $questionRepository->findByQuestionnaire($section->getQuestionnaire());
        switch ($typeAction) {
            case 'declenchement':
                return $this->render('questionnaire/creation/section/_typAction_declenchement.html.twig', [
                    'typeAction' => $typeAction,
                    'section' => $section,
                    'question' => $question,
                    'allQuestions' => $allQuestions,
                ]);
            case 'masquage':
                return $this->render('questionnaire/creation/section/_typAction_masquage.html.twig', [
                    'typeAction' => $typeAction,
                    'section' => $section,
                    'question' => $question,
                    'allQuestions' => $allQuestions,
                ]);
        }
    }

    #[Route('/{section}/transition-question-update-liste/{question}', name: 'transition_question_update_liste')]
    public function configTransitionUpdateListe(
        QuestSection $section,
        QuestQuestion $question,
    ): Response {
        return $this->render('questionnaire/creation/section/_transitionQuestionListe.html.twig', [
            'conditions' => $question->getParametre()['conditions'] ?? [],
        ]);
    }

    #[Route('/{section}/transition-question-sauvegarde/{question}', name: 'transition_question_sauvegarde')]
    public function configTransitionSauvegarde(
        Request $request,
        EntityManagerInterface $entityManager,
        QuestQuestionRepository $questionRepository,
        QuestSection $section,
        QuestQuestion $question,
    ): Response {
        $data = JsonRequest::getFromRequest($request);
        $typeAction = $request->query->get('typeaction');
        $parametre = $question->getParametre();
        if (array_key_exists('conditions', $parametre)) {
            $conditions = $parametre['conditions'];
        } else {
            $conditions = [];
        }

        switch ($typeAction) {
            case 'declenchement':
                $conditions[] = [
                    'type' => 'condition',
                    'declenchement' => $data['question'],
                    'criteres' => array_values(explode(',', $data['valeurs'])),
                ];
                break;
            case 'masquage':
                if (count($data['valeurs']) === 1 && str_contains($data['valeurs'][0], ',')) {
                    $valeurs = array_values(explode(',', $data['valeurs'][0]));
                } else {
                    $valeurs = $data['valeurs'];
                }

                $conditions[] = [
                    'type' => 'masquage',
                    'questions' => $data['questions'],
                    'criteres' => $valeurs
                ];
                break;
        }
        $parametre['conditions'] = $conditions;

        $question->setParametre($parametre);
        $entityManager->flush();

        return $this->json(true);
    }
}
