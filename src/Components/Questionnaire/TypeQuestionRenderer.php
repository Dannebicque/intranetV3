<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/TypeQuestionRenderer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:00
 */

namespace App\Components\Questionnaire;

use App\Components\Questionnaire\DTO\Question;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
use App\Components\Table\Filters\FilterSelect;
use Twig\Environment;
use Twig\TemplateWrapper;

class TypeQuestionRenderer
{
    public Environment $twig;
    public ?TemplateWrapper $templateWrapper = null;
    private string $template;

    public function __construct(Environment $twig)
    {
        $this->template = 'components/questionnaire/blocks_type_question.html.twig';
        $this->twig = $twig;
    }

    /**
     * @throws \Throwable
     */
    public function render(AbstractQuestion $question): string
    {
        $template = $this->load();

        $params = $question->getOptions();
        dump($params);
        //init avec un tableau dans la classe ??
        $params['block_name'] = $question->getOption('block_name');
        $params['id'] = $question->id;
        $params['help'] = $question->help;
        $params['config'] = null;//todo a gérer
        $params['libelle'] = $question->libelle;
        $params['numero'] = $question->numero;//todo: a gérer
        $params['obligatoire'] = $question->obligatoire;

        return $template->renderBlock($params['block_name'], $params);
    }

    private function load(): TemplateWrapper
    {
        if (null === $this->templateWrapper) {
            $this->templateWrapper = $this->twig->load($this->template);
        }

        return $this->templateWrapper;
    }
}
