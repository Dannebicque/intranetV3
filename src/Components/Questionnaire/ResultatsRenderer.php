<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/ResultatsRenderer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Components\Questionnaire;

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class ResultatsRenderer
{
    protected ?int $idQuestionnaire = null;
    protected array $options = [];
    protected array $vars = [];

    public function __construct(protected Environment $twig)
    {
    }

    /**
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws LoaderError
     */
    public function resultatsRender(Questionnaire $questionnaire): string
    {
        return $this->twig->render($questionnaire->getOption('template_resultats'), $this->viewTableau($questionnaire));
    }

    private function view(Questionnaire $questionnaire): void
    {
        $this->options = $questionnaire->getOptions();
        $this->idQuestionnaire = $questionnaire->getQuestionnaire()->id;
        $this->vars['sections'] = $questionnaire->getSections();
        $this->vars['questionnaire'] = $questionnaire;
        $this->vars['choix'] = $questionnaire->getListeChoix();
    }

    protected function viewTableau(Questionnaire $questionnaire): array
    {
        $this->view($questionnaire);

        return $this->vars;
    }
}
