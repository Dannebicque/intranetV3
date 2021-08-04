<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/FilterRenderer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:00
 */

namespace App\Components\Table;

use App\Components\Table\Filters\FilterSelect;
use Twig\Environment;
use Twig\TemplateWrapper;

class FilterRenderer
{
    public Environment $twig;
    public ?TemplateWrapper $templateWrapper = null;
    private string $template;

    public function __construct(Environment $twig)
    {
        $this->template = 'components/table/block_filters.html.twig';
        $this->twig = $twig;
    }

    /**
     * @throws \Throwable
     */
    public function render(Filter $filter): string
    {
        $template = $this->load();

        $params = $filter->getOptions();
        $blockName = $params['block_name'];
        if ($filter->getFilter() instanceof FilterSelect) {
            $blockName = true === $params['expanded'] ? $params['block_name'] . '_expanded' : $params['block_name'];
            $params['type'] = true === $params['multiple'] ? 'checkbox' : 'radio';
        }


        return $template->renderBlock($blockName, $params);
    }

    private function load(): TemplateWrapper
    {
        if (null === $this->templateWrapper) {
            $this->templateWrapper = $this->twig->load($this->template);
        }

        return $this->templateWrapper;
    }
}
