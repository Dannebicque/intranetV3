<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Adpapter/QuestionnaireQuestionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 15:29
 */

namespace App\Components\Questionnaire\Adapter;

use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
use App\Utils\Tools;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionnaireQuestionAdapter
{
    protected AbstractQuestion $question;
    private QuestionnaireRegistry $questionnaireRegistry;

    public function __construct(QuestionnaireRegistry $questionnaireRegistry)
    {
        $this->questionnaireRegistry = $questionnaireRegistry;
    }

    /**
     * @throws \App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException
     */
    public function createFromEntity(AbstractSection $abstractSection, $question, int $ordre = 1, array $options = [])
    {
        $obj = $this->questionnaireRegistry->getTypeQuestion($question->getQuestion()->getType());
        $options = array_merge($options, $question->getQuestion()->getConfiguration());
        $this->question = new $obj();

        $optionResolver = new OptionsResolver();
        $this->question->configureOptions($optionResolver);
        $this->question->options = $optionResolver->resolve($options);

        if (true === $abstractSection->configurable) {
            $data = $abstractSection->abstractSectionAdapter->getData($abstractSection->params['valeurs'][$ordre]);
            $this->question->libelle = Tools::personnaliseTexte($question->getQuestion()->getLibelle(), $data);
        } else {
            $this->question->libelle = $question->getQuestion()->getLibelle();
        }

        $this->question->id = $question->getQuestion()->getId();
        $this->question->numero = $question->getOrdre();
        $this->question->help = $question->getQuestion()->getHelp();
        $this->question->parametres = $question->getQuestion()->getParametre();
        $this->question->config = $question->getQuestion()->getConfiguration();

        $this->question->getOrGenereReponses($question->getQuestion());

        return $this;
    }

    public function getQuestion(): AbstractQuestion
    {
        return $this->question;
    }
}
