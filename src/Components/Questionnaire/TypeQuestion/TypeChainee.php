<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/TypeQuestion/TypeChainee.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:43
 */

namespace App\Components\Questionnaire\TypeQuestion;

use App\Components\Graphs\Type\BarGraph;
use App\Components\Questionnaire\Adapter\ReponseEntityAdapter;
use App\Components\Questionnaire\Form\QuestionnaireQuestionTypeChainee;
use App\Entity\QuestQuestion;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeChainee extends AbstractQuestion
{
    final public const LABEL = 'type_chainee';
    final public const BADGE = 'bg-info';
    final public const ICON = 'fas fa-link';
    public const FORM = QuestionnaireQuestionTypeChainee::class;
    public const TYPE_GRAPH = BarGraph::SOURCE;
    public array $questions = [];

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('block_name', 'type_chainee');
        $resolver->setDefault('block_name_edit', 'type_chainee');
    }

    public function getQuestions(QuestQuestion $question): void
    {
        foreach ($question->getQuestionsEnfants() as $quest) {
            $this->questions[] = $quest;
        }
    }

    public function getOrGenereReponses(QuestQuestion $question): void
    {
        $this->getQuestions($question);
        $reponses = $question->getQuestReponses();
        foreach ($reponses as $reponse) {
            $this->addReponse((new ReponseEntityAdapter($reponse))->getReponse());
        }
    }

    public function genereGraph()
    {
        return $this->graphRegistry->getTypeGraph(self::TYPE_GRAPH)->genereGraph($this);
    }

    public function sauvegarde(
        QuestQuestion $question,
        Request $request,
        ?EntityManagerInterface $entityManager = null
    ): void {
        parent::sauvegarde($question, $request, $entityManager);
        $parametres = $question->getParametre();
        $parametres['choix_autre'] = array_key_exists('choix_autre',
                $this->data) && $this->data['choix_autre'];
        $parametres['choix_nc'] = array_key_exists('choix_nc', $this->data) && $this->data['choix_nc'];
        $question->setParametre($parametres);

        $this->sauvegardeReponses($question, $entityManager);

        // sauvegarde des "sous-questions"
        if (array_key_exists('questionsEnfants', $this->data) && null !== $entityManager) {
            foreach ($question->getQuestionsEnfants() as $quest) {
                $entityManager->remove($quest);
            }

            $i = 1;
            foreach ($this->data['questionsEnfants'] as $reponse) {
                $qR = new QuestQuestion();
                $qR->setLibelle($reponse['libelle']);
                $qR->setOrdre($i);
                $qR->setHelp($reponse['help']);
                $qR->setQuestionParent($question);
                $entityManager->persist($qR);
                ++$i;
            }
            $entityManager->flush();
        }
    }
}
