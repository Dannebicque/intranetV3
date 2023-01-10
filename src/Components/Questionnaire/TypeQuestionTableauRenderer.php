<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/TypeQuestionTableauRenderer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/01/2023 20:50
 */

namespace App\Components\Questionnaire;

use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
use App\Components\Questionnaire\TypeQuestion\TypeChainee;
use Twig\Environment;
use Twig\TemplateWrapper;

class TypeQuestionTableauRenderer
{
    public ?TemplateWrapper $templateWrapper = null;
    private readonly string $template;

    public function __construct(public Environment $twig)
    {
        $this->template = 'components/questionnaire/blocks_type_question_tableau.html.twig';
    }

    /**
     * @throws \Throwable
     */
    public function render(AbstractQuestion $question, int|string|null $ordre = 0): string
    {
        $template = $this->load();

        $params = $question->getOptions();
        $params['block_name'] = $question->getOption('block_name');

        if (TypeChainee::class === $question::class) {
            $params['questionsEnfants'] = $question->questions;
        }

        $params['name'] = 'q' . $question->id;
        $params['id'] = $question->id;
        $params['reponses'] = $question->getReponses();
        $params['help'] = $question->help;
        $params['config'] = $question->config;
        $params['cle'] = $question->cle;
        $params['parametres'] = $question->parametres;
        $params['valeurs'] = $question->valeurs;
        $params['libelle'] = $question->libelle;
        $params['numero'] = $question->numero;
        $params['ordre'] = $ordre;
        $params['choix'] = $question->choix;

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
