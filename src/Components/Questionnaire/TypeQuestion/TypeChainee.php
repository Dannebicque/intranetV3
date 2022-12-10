<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/TypeQuestion/TypeChainee.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/09/2022 14:07
 */

namespace App\Components\Questionnaire\TypeQuestion;

use App\Components\Graphs\Type\BarGraph;
use App\Components\Questionnaire\Adapter\ReponseEntityAdapter;
use App\Components\Questionnaire\Form\QuestionnaireQuestionTypeChainee;
use App\Entity\QuestionnaireQuestion;
use App\Entity\QuestQuestion;
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
}
