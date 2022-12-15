<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/TypeQuestion/TypeLibre.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/09/2022 16:51
 */

namespace App\Components\Questionnaire\TypeQuestion;

use App\Components\Graphs\Type\BarGraph;
use App\Components\Questionnaire\Form\QuestionnaireQuestionTypeChainee;
use App\Entity\QuestQuestion;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeLibre extends AbstractQuestion
{
    final public const LABEL = 'type_libre';
    final public const BADGE = 'bg-success';
    final public const ICON = 'fas fa-input-text';
    final public const FORM = QuestionnaireQuestionTypeChainee::class;
    public const TYPE_GRAPH = BarGraph::SOURCE;

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('block_name', 'type_libre')
            ->setDefault('block_name_edit', 'type_libre')
            ->setDefault('type_question', 'text');
    }

    public function getOrGenereReponses(QuestQuestion $question): void
    {
    }

    public function genereGraph()
    {
        return $this->graphRegistry->getTypeGraph(self::TYPE_GRAPH)->genereGraph($this);
    }
}
