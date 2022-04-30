<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/TypeQuestion/TypeQcu.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/10/2021 07:59
 */

namespace App\Components\Questionnaire\TypeQuestion;

use App\Components\Questionnaire\Adapter\ReponseEntityAdapter;
use App\Entity\QuestionnaireQuestion;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeChainee extends AbstractQuestion
{
    final public const LABEL = 'type_chainee';
    final public const BADGE = 'bg-pink';
    final public const ICON = 'fas fa-link';
    // public const FORM = QuestionnaireQuestionTypeQcu::class;

    public array $questions = [];

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('block_name', 'type_chainee');
    }

    public function getQuestions(QuestionnaireQuestion $question): void
    {
        foreach ($question->getQuestionsEnfants() as $quest) {
            $this->questions[] = $quest;
        }
    }

    public function getOrGenereReponses(QuestionnaireQuestion $question): void
    {
        $this->getQuestions($question);
        $reponses = $question->getReponses();
        foreach ($reponses as $reponse) {
            $this->addReponse((new ReponseEntityAdapter($reponse))->getReponse());
        }
    }
}
