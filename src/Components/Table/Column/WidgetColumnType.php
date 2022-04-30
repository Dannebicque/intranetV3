<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Column/WidgetColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 20:09
 */

namespace App\Components\Table\Column;

use App\Components\Widget\WidgetFactory;
use App\Components\Widget\WidgetRenderer;
use Symfony\Component\OptionsResolver\OptionsResolver;

class WidgetColumnType extends ColumnType
{
    /**
     * WidgetColumnType constructor.
     */
    public function __construct(protected WidgetFactory $factory, protected WidgetRenderer $renderer)
    {
    }

    /**
     * {}.
     */
    public function render(mixed $rowData, array $options): string
    {
        if ($options['build']) {
            $widgetBuilder = $this->factory->createBuilder();
            call_user_func($options['build'], $widgetBuilder, $rowData, $options);

            return $this->renderer->render($widgetBuilder->getWidget()->createView());
        }

        return '';
    }

    /**
     * {}.
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('build', null)
            ->setAllowedTypes('build', ['null', 'callable'])
            ->setDefault('class', 'text-end')
            ->setDefault('label', '')
            ->setDefault('is_safe_html', true);
    }
}
