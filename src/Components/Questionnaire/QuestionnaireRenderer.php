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
    protected ?int $idQuestionnaire = null;

    public function __construct(protected Environment $twig)
    {
    }

    /**
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\LoaderError
     */
    public function questionnaireRender(Questionnaire $questionnaire): string
    {
        return $this->twig->render($questionnaire->getOption('template'), $this->view($questionnaire));
    }

    protected function view(Questionnaire $questionnaire): array
    {
        $options = $questionnaire->getOptions();
        $this->idQuestionnaire = $questionnaire->getQuestionnaire()->id;
        $vars = [];
        $vars['sections'] = $questionnaire->getSections();
        $vars['questionnaire'] = $questionnaire;
        $vars['etudiant'] = $questionnaire->getIdEtudiant();
        $vars['options'] = $options;
        $vars['id'] = $questionnaire->getQuestionnaire()->id;
        $vars['url'] = $questionnaire->getUrl();
        $vars['urlEnd'] = $questionnaire->getUrlEnd();

        return $vars;
    }

    /**
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\LoaderError
     */
    public function sectionRender(AbstractSection $section): string
    {
        return $this->twig->render($section->getTemplate(), $this->viewSection($section));
    }

    private function viewSection(AbstractSection $section): array
    {
        $options = $section->getOptions();

        $vars = $section->getVars();
        $vars['options'] = $options;
        $vars['idQuestionnaire'] = $section->questionnaire_id;
        $vars['etudiant'] = $section->etudiant_id;

        return $vars;
    }
}
