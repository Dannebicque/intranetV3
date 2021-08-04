<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Adpapter/QuestionnaireQuestionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 15:29
 */

namespace App\Components\Questionnaire\Adpapter;

use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionnaireQuestionAdapter
{
    protected AbstractQuestion $question;
    private QuestionnaireRegistry $questionnaireRegistry;

    public function __construct(QuestionnaireRegistry $questionnaireRegistry)
    {
        $this->questionnaireRegistry = $questionnaireRegistry;
    }

    public function createFromEntity($question, array $options = [])
    {
        $obj = $this->questionnaireRegistry->getTypeQuestion($question->getQuestion()->getTypeQuestion());
        $this->question = new $obj();
        $this->question->options = $options;
        $optionResolver = new OptionsResolver();
        $this->question->configureOptions($optionResolver);
        $this->question->options = $optionResolver->resolve($options);

        $this->question->libelle = $question->getQuestion()->getLibelle();
        $this->question->id = $question->getQuestion()->getId();
        $this->question->help = $question->getQuestion()->getHelp();

        //get les réponses depuis question??
        $this->question->getOrGenereReponses();

        return $this;
    }

    public function getQuestion(): AbstractQuestion
    {
        return $this->question;
    }
}
