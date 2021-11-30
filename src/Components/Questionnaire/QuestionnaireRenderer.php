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
    protected ?int $idEtudiant = null;
    protected ?int $idQuestionnaire = null;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    /**
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\LoaderError
     */
    public function questionnaireRender(Questionnaire $questionnaire, ?int $idEtudiant = null): string
    {
        return $this->twig->render($questionnaire->getOption('template'), $this->view($questionnaire, $idEtudiant));
    }

    protected function view(Questionnaire $questionnaire, ?int $idEtudiant = null): array
    {
        $options = $questionnaire->getOptions();
        $this->idEtudiant = $idEtudiant;
        $this->idQuestionnaire = $questionnaire->getQuestionnaire()->id;
        $vars = [];
        $vars['sections'] = $questionnaire->getSections();
        $vars['questionnaire'] = $questionnaire;
        $vars['etudiant'] = $idEtudiant;
        $vars['options'] = $options;
        $vars['id'] = $questionnaire->getQuestionnaire()->id;

        return $vars;
    }

    /**
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\LoaderError
     */
    public function sectionRender(AbstractSection $section, ?int $idEtudiant = null, ?int $idQuestionnaire = null): string
    {
        return $this->twig->render($section->getTemplate(), $this->viewSection($section,$idEtudiant, $idQuestionnaire));
    }

    private function viewSection(AbstractSection $section, ?int $idEtudiant = null, ?int $idQuestionnaire = null)
    {
        $options = $section->getOptions();

        $vars = $section->getVars();
        $vars['options'] = $options;
        $vars['idQuestionnaire'] = $idQuestionnaire;
        $vars['etudiant'] = $idEtudiant;
        return $vars;
    }

}
