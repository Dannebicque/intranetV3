<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/TableBuilderHelper.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 14:37
 */

namespace App\Components\Table;

use App\Components\Widget\Type\WidgetType;
use App\Components\Widget\WidgetBuilder;
use App\Components\Widget\WidgetFactory;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Routing\RouterInterface;
use App\Components\Table\Column\ColumnType;
use App\Components\Table\DTO\Column;


class TableBuilderHelper
{
    private TableRegistry $registry;
    private WidgetFactory $widgetFactory;
    private FormFactoryInterface $formFactory;
    private RouterInterface $router;

    /**
     * TableBuilerHelper constructor.
     */
    public function __construct(
        TableRegistry $registry,
        WidgetFactory $widgetFactory,
        FormFactoryInterface $formFactory,
        RouterInterface $router
    ) {
        $this->registry = $registry;
        $this->widgetFactory = $widgetFactory;
        $this->formFactory = $formFactory;
        $this->router = $router;
    }

    public function createWidgetBuilder(string $type = WidgetType::class, array $options = []): WidgetBuilder
    {
        return $this->widgetFactory->createBuilder($type, $options);
    }

    public function createNamedFormBuilder(
        string $name,
        string $type = FormType::class,
        $data = null,
        array $options = []
    ): FormBuilderInterface {
        return $this->formFactory->createNamedBuilder($name, $type, $data, $options);
    }

    public function createColumn(string $name, string $type = ColumnType::class, array $options = []): Column
    {
        $columnType = $this->registry->getColumnType($type);

        $resolver = new OptionsResolver();
        ColumnType::__configureOptions($resolver); // FIXME

        $resolver
            ->setDefault('id', $name)
            ->setDefault('is_safe_html', true);

        $columnType->configureOptions($resolver);
        $columnResolvedOptions = $resolver->resolve($options);

        return new Column($columnType, $columnResolvedOptions);
    }

    public function createAdapter(string $type, array $options = []): array
    {
        $adapterType = $this->registry->getAdapter($type);

        // new Adapter() ....
        $resolver = new OptionsResolver();
        $adapterType->configureOptions($resolver);
        $resolvedAdapterOptions = $resolver->resolve($options);

        return [$adapterType, $resolvedAdapterOptions];
    }

    public function generateUrl(
        string $name,
        array $parameters = [],
        int $referenceType = UrlGeneratorInterface::ABSOLUTE_PATH
    ): string {
        return $this->router->generate($name, $parameters, $referenceType);
    }
}
