<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/TypeQuestionRenderer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 10:37
 */

namespace App\Components\Questionnaire;

use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
use App\Components\Questionnaire\TypeQuestion\TypeChainee;
use App\Entity\QuestQuestion;
use App\Form\QuestionnaireReponseType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Twig\Environment;
use Twig\TemplateWrapper;

class TypeQuestionFormRenderer
{
    public ?TemplateWrapper $templateWrapper = null;
    private readonly string $template;

    public function __construct(
        protected QuestionnaireRegistry $questionnaireRegistry,
        public Environment $twig
    ) {
        $this->template = 'components/questionnaire/creation/blocks_type_question.html.twig';
    }

    /**
     * @throws \Throwable
     */
    public function render(QuestQuestion $question, $form): string
    {
        $template = $this->load();
        $tq = $this->questionnaireRegistry->getTypeQuestion($question->getType());
        $optionResolver = new OptionsResolver();
        $tq->configureOptions($optionResolver);
        $tq->options = $optionResolver->resolve($question->getConfig());

        $params = $question->getConfig();
        $params['block_name'] = $tq->getOption('block_name_edit');
        $params['form'] = $form;


        return $template->renderBlock($params['block_name'], $params);
    }

    /**
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\LoaderError
     */
    private function load(): TemplateWrapper
    {
        if (null === $this->templateWrapper) {
            $this->templateWrapper = $this->twig->load($this->template);
        }

        return $this->templateWrapper;
    }
}
