<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/TypeQuestionFormRenderer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Components\Questionnaire;

use App\Entity\QuestQuestion;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Throwable;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
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
     * @throws Throwable
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
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    private function load(): TemplateWrapper
    {
        if (null === $this->templateWrapper) {
            $this->templateWrapper = $this->twig->load($this->template);
        }

        return $this->templateWrapper;
    }
}
