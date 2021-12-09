<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/Type/LinkType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/10/2021 12:36
 */

namespace App\Components\Widget\Type;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;
use App\Components\Widget\DTO\WidgetView;
use App\Components\Widget\WidgetBuilder;

class LinkType extends WidgetType
{
    protected RouterInterface $router;
    protected ParameterBagInterface $parameterBag;

    /**
     * LinkType constructor.
     */
    public function __construct(RouterInterface $router, ParameterBagInterface $parameterBag)
    {
        $this->router = $router;
        $this->parameterBag = $parameterBag;
    }

    public function buildView(WidgetView $view, array $options)
    {
        parent::buildView($view, $options);
        $view->element = 'a';

        if ($options['url']) {
            if ($options['xhr']) {
                $view->vars['attr']['href'] = '#'; // Link always have href
                $view->vars['attr']['data-xhr'] = $options['url'];

                if (!empty($options['confirm'])) {
                    $view->vars['attr']['data-confirm'] = $options['confirm'];
                }

                if ($options['spinner']) {
                    $view->vars['attr']['data-spinner'] = 'true';
                }
            } else {
                $view->vars['attr']['href'] = $options['url'];

                if ($options['target']) {
                    $view->vars['attr']['target'] = $options['target'];
                }
            }
        } else {
            $view->vars['attr']['href'] = '#'; // Link always have href even if not link specified
        }

        if ($options['stimulus']) {
            $view->vars['stimulus']['controller'] = $options['stimulus-controller'];
            $view->vars['stimulus']['route'] = $this->router->generate($options['route'], $options['route_params']);
            $view->vars['stimulus']['action'] = 'openModal';
            $view->vars['attr']['href'] = '#';
        }
    }

    public function buildWidget(WidgetBuilder $builder, array $options)
    {
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('text', null); // enable text
        $resolver->setDefault('stimulus', false); //désactive stimulus partout, par défaut
        $resolver
            ->define('route')
            ->default(null)
            ->allowedTypes('string', 'null');

        $resolver
            ->define('url')
            ->allowedTypes('string', 'null')
            ->default(function(Options $options) {
                if ($options['route']) {
                    return $this->router->generate($options['route'], $options['route_params']);
                }
                return null;
            });

        $resolver
            ->define('target')
            ->default(null)
            ->allowedValues(null, '_blank', '_self');

        $resolver
            ->define('route_params')
            ->default([])
            ->allowedTypes('array');

        $resolver
            ->define('xhr')
            ->default(false)
            ->allowedTypes('bool');

        $resolver
            ->define('confirm')
            ->default(null)
            ->allowedTypes('string', 'null');

        $resolver
            ->define('spinner')
            ->default(false)
            ->allowedTypes('bool');
    }
}
