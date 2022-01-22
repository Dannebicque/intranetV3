<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/Type/ButtonGroupType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 13:54
 */

namespace App\Components\Widget\Type;

use App\Components\Widget\DTO\WidgetView;
use App\Components\Widget\WidgetBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ButtonGroupType extends WidgetType
{
    public function buildView(WidgetView $view, array $options): void
    {
        parent::buildView($view, $options);
        $view->element = 'div';
        $view->vars['attr']['class'] = 'btn-group';
        $view->vars['text'] = false;
        $view->vars['icon'] = false;
    }

    public function buildWidget(WidgetBuilder $builder, array $options): void
    {
        if ($options['build']) {
            call_user_func($options['build'], $builder, $options);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver
            ->define('build')
            ->default('callable');
    }
}
