<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/Type/ButtonType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 14:37
 */

namespace App\Components\Widget\Type;

use App\Components\Widget\DTO\WidgetView;
use App\Components\Widget\WidgetBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;

class StimulusButtonModalType extends WidgetType
{
    protected RouterInterface $router;

    /**
     * LinkType constructor.
     */
    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }

    public function buildView(WidgetView $view, array $options): void
    {
        parent::buildView($view, $options);
        $view->element = 'button';
        $view->vars['attr']['type'] = 'button';
        $view->vars['attr']['class'] .= ' btn';
        $view->vars['stimulus']['controller'] = 'modal';
        $view->vars['stimulus']['modalUrl'] = $options['modalUrl'];
        $view->vars['stimulus']['size'] = $options['modalSize'];
        $view->vars['stimulus']['title'] = $options['modalTitle'];
        $view->vars['stimulus']['action'] = $options['action'];
    }

    public function buildWidget(WidgetBuilder $builder, array $options): void
    {
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('text', null) // enable text
            ->setDefault('modalSize', 'md') // enable text
            ->setDefault('modalTitle', null) // enable text
            ->setDefault('action', 'openModal') // enable text
            ->setDefault('modalUrl', null); // enable text
    }
}
