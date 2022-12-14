<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/TypeQuestionRenderer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/12/2022 21:25
 */

namespace App\Components\Questionnaire;

use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
use App\Components\Questionnaire\TypeQuestion\TypeChainee;
use Twig\Environment;
use Twig\TemplateWrapper;

class TypeQuestionRenderer
{
    public ?TemplateWrapper $templateWrapper = null;
    private readonly string $template;

    public function __construct(public Environment $twig)
    {
        $this->template = 'components/questionnaire/blocks_type_question.html.twig';
    }

    /**
     * @throws \Throwable
     */
    public function render(AbstractQuestion $question, ?int $ordre = 0): string
    {
        $template = $this->load();

        $params = $question->getOptions();
        $params['block_name'] = $question->getOption('block_name');

        if (TypeChainee::class === $question::class) {
            $params['questionsEnfants'] = $question->questions;
        }

        $params['name'] = 'q' . $question->id;
        $params['id'] = $question->id;
        $params['visible'] = $this->isVisible($question->parametres);
        $params['reponses'] = $question->getReponses();
        $params['help'] = $question->help;
        $params['config'] = $question->config;
        $params['parametres'] = $question->parametres;
        $params['valeurs'] = $question->valeurs;
        $params['libelle'] = $question->libelle;
        $params['numero'] = $question->numero;
        $params['ordre'] = $ordre;
        $params['obligatoire'] = $question->obligatoire;
        $params['reponseEtudiant'] = $question->reponseUser;

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

    private function isVisible(array $parametres): bool
    {
        if (array_key_exists('conditions', $parametres)) {
            foreach ($parametres['conditions'] as $condition) {
                if (array_key_exists('type', $condition) && 'condition' === $condition['type']) {
                    return false;
                }
            }
        }

        return true;
    }
}
