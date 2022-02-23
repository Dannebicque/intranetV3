<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/TableBuilder.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:11
 */

namespace App\Components\Table;

use App\Components\Table\Adapter\CallableAdapter;
use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\PropertyColumnType;
use App\Components\Table\DTO\Paging;
use App\Components\Table\DTO\Table;
use App\Components\Table\DTO\Toolbar;
use App\Components\Widget\WidgetBuilder;
use App\Utils\HtmlUtils;
use InvalidArgumentException;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TableBuilder
{
    protected TableBuilderHelper $helper;

    protected TableType $type;

    protected array $options = [];

    protected array $columnsData = [];

    protected ?array $adaptaterData = null;

    protected ?string $loadUrl = null;

    protected WidgetBuilder $widgetBuilder;
    protected FormBuilderInterface $formBuilder;

    /**
     * DataTableBuilder constructor.
     */
    public function __construct(
        TableBuilderHelper $helper,
        TableType $type,
        array $options = []
    ) {
        $this->helper = $helper;
        $this->type = $type;

        $this->resolveOptions($options);

        $this->widgetBuilder = $this->helper->createWidgetBuilder();
        $this->formBuilder = $this->helper->createNamedFormBuilder(
            $this->options['toolbar_form_name'],
            FormType::class,
            $this->options['toolbar_form_data'],
            $this->options['toolbar_form_options']
        );
    }

    private function resolveOptions(array $options): void
    {
        $resolver = new OptionsResolver();

        // Configure options from base TableType
        TableType::__configureOptions($resolver);

        // Configure options from bundle config
        $resolver
            ->setDefault('id', HtmlUtils::type_class_to_id(get_class($this->type)))
            ->setDefault('page_length', 30)
            ->setDefault('page_active', 1)
            ->setDefault('class', 'table table-striped table-centered dt-responsive w-100');

        // Configure options from TableType
        $this->type->configureOptions($resolver);

        // resolve
        $this->options = $resolver->resolve($options);
    }

    public function setLoadUrl(string $route, array $params = []): self
    {
        $this->loadUrl = $this->helper->generateUrl($route, $params);

        return $this;
    }

    // Toolbar Api

    public function addFilter(string | FormBuilderInterface $child, string $type = null, array $options = []): self
    {
        $this->formBuilder->add($child, $type, $options);

        return $this;
    }

    public function removeFilter(string $name): self
    {
        $this->formBuilder->remove($name);

        return $this;
    }

    public function hasFilter(string $name): bool
    {
        return $this->formBuilder->has($name);
    }

    public function addWidget(string $child, string $type = null, array $options = []): self
    {
        $this->widgetBuilder->add($child, $type, $options);

        return $this;
    }

    public function removeWidget(string $name): self
    {
        $this->widgetBuilder->remove($name);

        return $this;
    }

    public function hasWidget(string $name): bool
    {
        return $this->widgetBuilder->has($name);
    }

    // Column Api

    public function addColumn(string $name, string $type = PropertyColumnType::class, array $options = []): self
    {
        $this->columnsData[$name] = [
            'type' => $type,
            'options' => $options,
        ];

        return $this;
    }

    public function remove(string $name): self
    {
        unset($this->columnsData[$name]);

        return $this;
    }

    public function has(string $name): bool
    {
        return isset($this->columnsData[$name]);
    }

    // Adapter Api

    public function useEntityAdapter(array $options = []): self
    {
        return $this->useAdapter(EntityAdapter::class, $options);
    }

    public function useAdapter(mixed $type, array $options = []): self
    {
        if (!is_callable($type) && !is_string($type)) {
            throw new InvalidArgumentException('Invalid apadater type');
        }

        if (is_callable($type)) {
            $options = ['callable' => $type];
            $type = CallableAdapter::class;
        }

        $this->adaptaterData = [
            'type' => $type,
            'options' => $options,
        ];

        return $this;
    }

    public function clearAdapter(): self
    {
        $this->adaptaterData = null;

        return $this;
    }

    public function getTable(): Table
    {
        $this->type->buildTable($this, $this->options);

        // resolve column
        $columns = [];
        foreach ($this->columnsData as $name => $columnData) {
            $columns[$name] = $this->helper->createColumn($name, $columnData['type'], $columnData['options']);
        }

        // resolve adapter
        if (null === $this->adaptaterData) {
            throw new InvalidArgumentException('You must configure an adapter.');
        }

        [$adapterType, $resolvedAdapterOptions] = $this->helper->createAdapter($this->adaptaterData['type'],
            $this->adaptaterData['options']);

        $toolbar = new Toolbar(
            $this->formBuilder->getForm(),
            $this->widgetBuilder->getWidget(),
            $this->options
        );

        $paging = new Paging(
            $this->options
        );

        $dataTable = new Table(
            $toolbar,
            $columns,
            $adapterType,
            $resolvedAdapterOptions,
            $this->options,
            $paging
        );

        if (null !== $this->loadUrl) {
            $dataTable->setLoadUrl($this->loadUrl);
        }

        return $dataTable;
    }
}
