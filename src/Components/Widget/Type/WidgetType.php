<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/Type/WidgetType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:11
 */

namespace App\Components\Widget\Type;

use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Components\Widget\DTO\WidgetView;
use App\Components\Widget\WidgetBuilder;
use function array_filter;
use function array_map;
use function is_string;

class WidgetType
{
    public function buildView(WidgetView $view, array $options)
    {
        $view->vars['attr'] = $options['attr'];

        if ($options['class']) {
            if (isset($view->vars['attr']['class'])) {
                $view->vars['attr']['class'] .= ' ' . $options['class'];
            } else {
                $view->vars['attr']['class'] = $options['class'];
            }
        } else {
            $view->vars['attr']['class'] = false;
        }

        $view->vars['text'] = $options['text'];
        $view->vars['translation_domain'] = $options['translation_domain'];
        $view->vars['icon'] = $options['icon'];

        if (!empty($options['title'])) {
            $view->vars['attr']['title'] = $options['title'];
            $view->vars['attr']['data-bs-toggle'] = 'tooltip';
            $view->vars['attr']['data-bs-trigger'] = 'hover';
        }

        // hack (used only by DataTable)
    }

    public function buildWidget(WidgetBuilder $builder, array $options)
    {
    }

    public function getBlockPrefix(): string
    {
        return 'base';
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $normalizer = function(Options $options, $value) {
            if (null === $value) {
                return null;
            }

            if (is_string($value)) {
                return trim($value);
            }

            $a = array_filter(array_map('trim', $value));

            return count($a) > 0 ? implode(' ', $a) : null;
        };

        $resolver
            ->define('title')
            ->default(null)
            ->allowedTypes('string', 'null');

        $resolver
            ->define('class')
            ->default(null)
            ->allowedTypes('string', 'null');

        $resolver
            ->define('icon')
            ->default(null)
            ->allowedTypes('string', 'null');

        $resolver
            ->define('attr')
            ->default([])
            ->allowedTypes('array');

        $resolver
            ->define('text')
            ->default(false)
            ->allowedTypes('string', 'null', 'bool');

        $resolver
            ->define('translation_domain')
            ->default(null)
            ->allowedTypes('string', 'null', 'bool');
    }
}
