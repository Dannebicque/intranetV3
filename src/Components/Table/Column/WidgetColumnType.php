<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Column/WidgetColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 18:38
 */

namespace App\Components\Table\Column;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Widget\WidgetFactory;
use Umbrella\CoreBundle\Widget\WidgetRenderer;

class WidgetColumnType extends ColumnType
{
    protected WidgetFactory $factory;

    protected WidgetRenderer $renderer;

    /**
     * WidgetColumnType constructor.
     */
    public function __construct(WidgetFactory $factory, WidgetRenderer $renderer)
    {
        $this->factory = $factory;
        $this->renderer = $renderer;
    }

    /**
     * {@inheritdoc}
     */
    public function render($rowData, array $options): string
    {
        if ($options['build']) {
            $widgetBuilder = $this->factory->createBuilder();
            call_user_func($options['build'], $widgetBuilder, $rowData, $options);

            return $this->renderer->render($widgetBuilder->getWidget()->createView());
        }

        return '';
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
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
