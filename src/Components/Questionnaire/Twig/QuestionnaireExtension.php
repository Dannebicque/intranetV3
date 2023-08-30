<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Twig/QuestionnaireExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/07/2023 22:21
 */

namespace App\Components\Questionnaire\Twig;

use App\Components\Questionnaire\CreationRenderer;
use App\Components\Questionnaire\QuestionnaireRenderer;
use App\Components\Questionnaire\ResultatsRenderer;
use App\Components\Questionnaire\TypeQuestionFormRenderer;
use App\Components\Questionnaire\TypeQuestionGraphiqueRenderer;
use App\Components\Questionnaire\TypeQuestionRenderer;
use App\Components\Questionnaire\TypeQuestionTableauRenderer;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class QuestionnaireExtension extends AbstractExtension
{
    public function __construct(
        private readonly TypeQuestionRenderer $typeQuestionRenderer,
        private readonly TypeQuestionFormRenderer $typeQuestionFormRenderer,
        private readonly TypeQuestionGraphiqueRenderer $typeQuestionGraphiqueRenderer,
        private readonly TypeQuestionTableauRenderer $typeQuestionTableauRenderer,
        private readonly QuestionnaireRenderer $questionnaireRenderer,
        private readonly CreationRenderer $creationRenderer,
        private readonly ResultatsRenderer $resultatsRenderer
    ) {
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('question_render', $this->typeQuestionRenderer->render(...), [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('questionnaire_render', $this->questionnaireRenderer->questionnaireRender(...), [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('section_render', $this->questionnaireRenderer->sectionRender(...), [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('section_creation_render', $this->creationRenderer->sectionCreationRender(...), [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('question_creation_render', $this->creationRenderer->questionCreationRender(...), [
                'is_safe' => ['html'],
            ]),

            new TwigFunction('question_creation_form_render', $this->typeQuestionFormRenderer->render(...), [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('questionnaire_resultats_render', $this->resultatsRenderer->resultatsRender(...), [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('question_tableau_render', $this->typeQuestionTableauRenderer->render(...), [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('question_graphique_render', $this->typeQuestionGraphiqueRenderer->render(...), [
                'is_safe' => ['html'],
            ]),
        ];
    }
}
