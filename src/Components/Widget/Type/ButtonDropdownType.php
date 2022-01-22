<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/Type/ButtonDropdownType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 13:54
 */

namespace App\Components\Widget\Type;

use App\Components\Widget\DTO\WidgetView;
use App\Components\Widget\WidgetBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ButtonDropdownType extends WidgetType
{
    public function buildView(WidgetView $view, array $options): void
    {
        parent::buildView($view, $options);
        $view->vars['attr']['class'] .= ' btn';
        if ($options['dropdown-icon']) {
            $view->vars['attr']['class'] .= ' dropdown-toggle';
        }

        $view->vars['attr']['type'] = 'button';
        $view->vars['attr']['data-bs-toggle'] = 'dropdown';
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
            ->setDefault('text', null);

        $resolver
            ->define('build')
            ->default('callable');

        $resolver
            ->setDefault('class', 'btn-light');

        $resolver
            ->define('dropdown-icon')
            ->default(true)
            ->allowedTypes('bool');
    }

    public function getBlockPrefix(): string
    {
        return 'button_dropdown';
    }
}
