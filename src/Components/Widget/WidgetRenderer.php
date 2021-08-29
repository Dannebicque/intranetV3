<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/WidgetRenderer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 14:37
 */

namespace App\Components\Widget;

use Twig\Environment;
use Twig\TemplateWrapper;
use App\Components\Widget\DTO\WidgetView;

class WidgetRenderer
{
    public Environment $twig;
    public ?TemplateWrapper $templateWrapper = null;
    private string $template;

    /**
     * WidgetRenderer constructor.
     */
    public function __construct(Environment $twig)
    {
        $this->template = 'components/toolbar/block_filters.html.twig';
        $this->twig = $twig;
    }

    public function render(WidgetView $view): string
    {
        $template = $this->load();

        $params = $view->vars;
        $params['widget'] = $view;
        $params['element'] = $view->element;

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
