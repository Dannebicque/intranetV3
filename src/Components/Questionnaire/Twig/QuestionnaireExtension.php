<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Twig/QuestionnaireExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:00
 */

namespace App\Components\Questionnaire\Twig;

use App\Components\Questionnaire\QuestionnaireRenderer;
use App\Components\Questionnaire\TypeQuestionRenderer;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class QuestionnaireExtension extends AbstractExtension
{
    private TypeQuestionRenderer $typeQuestionRenderer;
    private QuestionnaireRenderer $questionnaireRenderer;

    public function __construct(
        TypeQuestionRenderer $typeQuestionRenderer,
        QuestionnaireRenderer $questionnaireRenderer
    ) {
        $this->typeQuestionRenderer = $typeQuestionRenderer;
        $this->questionnaireRenderer = $questionnaireRenderer;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('question_render', [$this->typeQuestionRenderer, 'render'], [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('questionnaire_render', [$this->questionnaireRenderer, 'questionnaireRender'], [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('section_render', [$this->questionnaireRenderer, 'sectionRender'], [
                'is_safe' => ['html'],
            ]),
        ];
    }
}
