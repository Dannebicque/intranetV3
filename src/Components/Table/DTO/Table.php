<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/DTO/Table.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:11
 */

namespace App\Components\Table\DTO;

use Doctrine\ORM\QueryBuilder;
use LogicException;
use RuntimeException;
use Symfony\Component\HttpFoundation\Request;
use App\Components\Table\Adapter\AdapterException;
use App\Components\Table\Adapter\TableAdapter;
use App\Components\Table\Adapter\DoctrineAdapterInterface;

class Table
{
    public const SORT_ASCENDING = 'ASC';
    public const SORT_DESCENDING = 'DESC';

    protected Toolbar $toolbar;

    /**
     * @var Column[]
     */
    protected array $columns;

    protected TableAdapter $adapter;

    protected array $adapterOptions;

    protected array $options;

    protected TableState $state;
    protected Paging $paging;

    protected ?TableResponse $response = null;

    /**
     * DataTable constructor.
     */
    public function __construct(
        Toolbar $toolbar,
        array $columns,
        TableAdapter $adapter,
        array $adapterOptions,
        array $options,
        Paging $paging
    ) {
        $this->toolbar = $toolbar;
        $this->columns = $columns;
        $this->adapter = $adapter;
        $this->adapterOptions = $adapterOptions;
        $this->options = $options;
        $this->paging = $paging;

        $this->state = new TableState($this);
    }

    public function getId(): string
    {
        return $this->options['id'];
    }

    public function setLoadUrl(string $url): self
    {
        $this->options['load_url'] = $url;

        return $this;
    }

    public function getToolbar(): Toolbar
    {
        return $this->toolbar;
    }

    /**
     * @return array|Column[]
     */
    public function getColumns(): array
    {
        return $this->columns;
    }

    public function getColumn(string $name): Column
    {
        return $this->columns[$name];
    }

    public function hasColumn(string $name): bool
    {
        return isset($this->columns[$name]);
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function getOption(string $name)
    {
        return $this->options[$name];
    }

    public function getState(): TableState
    {
        return $this->state;
    }

    public function handleRequest(Request $httpRequest): self
    {
        $this->response = null;
        $isCallback = $httpRequest->isMethod('POST');

        if ($isCallback) {
            $parametersAsArray = [];
            if ($content = $httpRequest->getContent()) {
                $parametersAsArray = json_decode($content, true);
            }
            $this->state = new TableState($this);
            if (array_key_exists('paging', $parametersAsArray)) {
                $this->paging->handleRequest($parametersAsArray['paging']);
            }

            if (array_key_exists('filter', $parametersAsArray)) {
                $this->toolbar->handleRequest($parametersAsArray['filter']);
            }

            $this->state->setPaging($this->paging->getData());
            $this->state->setFormData($this->toolbar->getFormData());

            $this->state->applyParameters($parametersAsArray);

        }

        return $this;
    }

    public function handleParamaters(array $parameters): self
    {
        $this->response = null;

        $this->state = new TableState($this);
        $this->state->applyParameters($parameters);
        $this->toolbar->submitData($parameters);
        $this->state->setFormData($this->toolbar->getFormData());

        return $this;
    }

    public function getCallbackResponse(): TableResponse
    {
        if (!$this->isCallback()) {
            throw new RuntimeException('Unable to get callback response, request is not valid');
        }

        if (null !== $this->response) {
            return $this->response;
        }

        try {
            $result = $this->getAdapterResult();
        } catch (AdapterException $exception) {
            return TableResponse::createError($exception->getMessage());
        }

        // Create Row Views
        $rowViews = [];
        foreach ($result->getData() as $object) {
            $view = new RowView();
            foreach ($this->columns as $column) {
                $view->data[$column->getOption('id')] = $column->render($object);
            }

            $rowViews[] = $view;
        }

        $this->paging->setResult($result);

        return TableResponse::createSuccess($rowViews, $this->paging->getData());
    }

    public function isCallback(): bool
    {
        return $this->state->isCallback();
    }

    // Adapter helper

    public function getAdapterResult(): TableResult
    {
        return $this->adapter->getResult($this->state, $this->adapterOptions);
    }

    public function getAdapterQueryBuilder(): QueryBuilder
    {
        if ($this->adapter instanceof DoctrineAdapterInterface) {
            return $this->adapter->getQueryBuilder($this->state, $this->adapterOptions);
        }

        throw new LogicException('You must use a DoctrineAdapter if you want to retrieve a query builder.');
    }
}
