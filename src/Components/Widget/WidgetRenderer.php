<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/WidgetRenderer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 14:37
 */

namespace App\Components\Widget;

use App\Components\Widget\DTO\WidgetView;
use Twig\Environment;
use Twig\TemplateWrapper;

class WidgetRenderer
{
    public ?TemplateWrapper $templateWrapper = null;
    private readonly string $template;

    /**
     * WidgetRenderer constructor.
     */
    public function __construct(public Environment $twig)
    {
        $this->template = 'components/toolbar/block_filters.html.twig';
    }

    /**
     * @throws \Throwable
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\LoaderError
     */
    public function render(WidgetView $view): string
    {
        $template = $this->load();

        $params = $view->vars;
        $params['widget'] = $view;
        $params['element'] = $view->element;

        return $template->renderBlock($params['block_name'], $params);
    }

    /**
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
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
