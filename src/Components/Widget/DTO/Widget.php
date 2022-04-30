<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/DTO/Widget.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:11
 */

namespace App\Components\Widget\DTO;

use App\Components\Widget\Type\WidgetType;
use function str_ends_with;

class Widget
{
    protected ?WidgetView $view = null;

    /**
     * Widget constructor.
     * @param \App\Components\Widget\DTO\Widget[] $children
     */
    public function __construct(protected string $name, protected WidgetType $type, protected array $options, protected array $children = [])
    {
    }

    public function createView(): WidgetView
    {
        if (null === $this->view) {
            $this->view = new WidgetView();

            $this->view->vars['name'] = $this->name;
            $this->view->vars['block_name'] = $this->getBlockName($this->type->getBlockPrefix());

            $this->type->buildView($this->view, $this->options);
            foreach ($this->children as $name => $child) {
                $this->view->children[$name] = $child->createView();
            }
        }

        return $this->view;
    }

    private function getBlockName(string $blockPrefix): string
    {
        if (empty($blockPrefix) || 'widget' === $blockPrefix) {
            return 'base_widget';
        }

        if (str_ends_with($blockPrefix, '_widget')) {
            return $blockPrefix;
        }

        return sprintf('%s_widget', $blockPrefix);
    }
}
