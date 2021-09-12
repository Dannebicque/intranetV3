<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/Type/SelectChangeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/09/2021 18:18
 */

namespace App\Components\Widget\Type;

use App\Components\Widget\DTO\WidgetView;
use App\Components\Widget\WidgetBuilder;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\Exception\UnexpectedTypeException;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\PropertyAccess\PropertyAccessorInterface;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class SelectChangeType extends WidgetType
{
    protected TranslatorInterface $translator;
    protected EntityManagerInterface $entityManager;
    protected PropertyAccessorInterface $accessor;
    protected RouterInterface $router;

    public function __construct(
        RouterInterface $router,
        TranslatorInterface $translator,
        EntityManagerInterface $entityManager
    ) {
        $this->entityManager = $entityManager;
        $this->router = $router;
        $this->translator = $translator;
        $this->accessor = PropertyAccess::createPropertyAccessor();
    }

    public function buildView(WidgetView $view, array $options)
    {
        parent::buildView($view, $options);
        $view->vars['attr']['is'] = 'select-live-update';
        $view->vars['attr']['data-route'] = $this->router->generate($options['route'], $options['route_params']);
        $view->vars['attr']['data-params'] = json_encode($options['post_params']);
        $view->vars['value'] = $options['value'];
        $this->getDatas($view, $options);
    }

    private function getDatas(WidgetView $view, array $options)
    {
        $view->vars['attr']['required'] = $options['required'];

        if (null !== $options['choices']) {
            $view->vars['choices'] = $options['choices'];
            $view->vars['entity'] = false;
        } elseif (null !== $options['entity']) {
            $view->vars['choices'] = false;
            $em = $this->entityManager->getRepository($options['entity']);
            //on a une entity
            if (null !== $options['query_builder']) {
                $queryBuilder = $options['query_builder'];
                if (\is_callable($queryBuilder)) {
                    $queryBuilder = $queryBuilder($em);

                    if (null !== $queryBuilder && !$queryBuilder instanceof QueryBuilder) {
                        throw new UnexpectedTypeException($queryBuilder, 'Doctrine\ORM\QueryBuilder');
                    }
                }
                $datas = $queryBuilder->getQuery()->getResult();
            } else {
                $datas = $em->findAll();
            }
            $tab = [];
            foreach ($datas as $data) {
                $lib = $this->accessor->getValue($data, $options['choice_label']);
                $tab[$data->getId()] = $lib;
            }
            $view->vars['datas'] = $tab;
        }
    }

    public function buildWidget(WidgetBuilder $builder, array $options)
    {
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('property_path', function(Options $options) {
                return $options['id'];
            })
            ->setDefault('id', null)
            ->setDefault('value', null)
            ->setDefault('translation_domain', null)
            ->setDefault('is_safe_html', true)
            ->setDefault('choice_id', 'id')
            ->setDefault('choice_label', 'libelle')
            ->setDefault('choices', null)
            ->setDefault('entity', null)
            ->setDefault('query_builder', null)
            ->setRequired('choices')
            ->setDefault('required', false)
            ->setDefault('class', 'form-control');

        $resolver
            ->define('route_params')
            ->default([])
            ->allowedTypes('array');

        $resolver
            ->define('post_params')
            ->default([])
            ->allowedTypes('array');

        $resolver
            ->define('route')
            ->default(null)
            ->allowedTypes('string', 'null');
    }

    public function getBlockPrefix(): string
    {
        return 'select_change';
    }
}
