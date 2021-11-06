<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/QuestionnaireRenderer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 10:37
 */

namespace App\Components\Questionnaire;

use App\Components\Questionnaire\Section\AbstractSection;
use Twig\Environment;

class QuestionnaireRenderer
{
    protected Environment $twig;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    public function questionnaireRender(Questionnaire $questionnaire): string
    {
        return $this->twig->render($questionnaire->getOption('template'), $this->view($questionnaire));
    }

    protected function view(Questionnaire $questionnaire): array
    {
        $options = $questionnaire->getOptions();

        $vars = [];
        $vars['sections'] = $questionnaire->getSections();
        $vars['questionnaire'] = $questionnaire;
        $vars['options'] = $options;
        $vars['id'] = $questionnaire->getQuestionnaire()->id;

        return $vars;
    }

    public function sectionRender(AbstractSection $section): string
    {
        return $this->twig->render($section->getTemplate(), $this->viewSection($section));
    }

    private function viewSection(AbstractSection $section)
    {
        $options = $section->getOptions();

        $vars = $section->getVars();
        $vars['options'] = $options;

        return $vars;
    }

}
