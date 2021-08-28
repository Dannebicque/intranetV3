<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Table.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 08:39
 */

namespace App\Components\Table;

use App\Components\Table\Adapter\AbstractAdapter;
use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\ActionsColumnType;
use App\Components\Table\DTO\Row;
use App\Components\Table\DTO\TableResult;
use App\Components\Table\Exceptions\ColumnWithSameNameExistException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\OptionsResolver\OptionsResolver;

class Table
{
    public const DEFAULT_TEMPLATE = 'components/table/table.html.twig';

    protected Filters $filters;
    protected Columns $columns;
    private Actions $actions;

    protected Paging $paging;
    protected array $fields = [];

    protected ?string $name;
    protected ?string $base_url;

    protected array $options = [];

    private TableRegistry $tableRegistry;
    private AbstractAdapter $adapter;
    private Request $request;

    private array $order = [];
    private array $filter = [];
    private array $parametersAsArray = [];
    private string $classAdapter;
    private mixed $queryAdapter;

    public function __construct(TableRegistry $tableRegistry)
    {
        $this->tableRegistry = $tableRegistry;
    }

    public function createTable(string $name, array $options = [])
    {
        $this->name = $name;

        $this->columns = new Columns();
        $this->filters = new Filters();
        $this->actions = new Actions();
        $this->paging = new Paging();

        $resolver = new OptionsResolver();
        $this->configureOptions($resolver);

        $this->options = $resolver->resolve($options);

        return $this;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'template' => self::DEFAULT_TEMPLATE,
            'class' => 'table table-bordered',
            'base_url' => null,
        ]);
    }

    public function addColumn(string $name, string $type_column, array $options = [])
    {
        if (array_key_exists($name, $this->fields)) {
            throw new ColumnWithSameNameExistException();
        }
        $columnType = $this->tableRegistry->getColumnType($type_column);
        $column = new Column($name, $columnType, $options);
        $this->fields[] = $name;
        $this->columns->addColumn($column);

        return $this;
    }

    public function addAction(string $name, string $action_type, array $options = [])
    {
        $actionButton = $this->tableRegistry->getAction($action_type);
        $resolver = new OptionsResolver();
        $actionButton->configureOptions($resolver);
        $options = $resolver->resolve($options);

        $action = new Button($name, $actionButton, $options);
        $this->actions->addAction($action);
        $this->addActionColumn();

        return $this;
    }

    public function addFilter(
        string $name,
        string $type_filter,
        array $columns = [],
        array $options = []
    ) {
        $typeFilter = $this->tableRegistry->getFilter($type_filter);
        $filter = new Filter($name, $typeFilter, $columns, $options);
        $this->filters->addFilter($filter);

        return $this;
    }

    public function setBaseUrl(string $base_url)
    {
        $this->options['base_url'] = $base_url;

        return $this;
    }

    public function getFilters()
    {
        return $this->filters;
    }

    public function getActions()
    {
        return $this->actions;
    }

    public function getColumns()
    {
        return $this->columns->getColumns();
    }

    public function createView()
    {
        return $this;
    }

    public function getOptions()
    {
        return $this->options;
    }

    public function getOption(string $key)
    {
        return $this->options[$key];
    }

    public function getFields(): array
    {
        return $this->fields;
    }

    public function getData(string $adapter, array $options)
    {
        $this->adapter = $this->tableRegistry->getAdapter($adapter);
        $datas = $this->adapter->getResult($this, $options);
        $this->getPaging()->setResult($datas); //mise à jour de paging...

        return $this->prepareData($datas);
    }

    public function getPaging(): Paging
    {
        return $this->paging;
    }

    public function setPaging(Paging $paging): void
    {
        $this->paging = $paging;
    }

    public function prepareData(TableResult $result)
    {
        $rowViews = [];
        foreach ($result->getData() as $object) {
            // dump($object);
            $view = new Row();
            foreach ($this->columns->getColumns() as $column) {
                $view->data[$column->getName()] = $column->render($object);
            }
            //  $this->rowModifier->modify($view, $object); //pour le tri??
            $rowViews[] = $view;
        }

        return $rowViews;
    }

    public function handleRequest(Request $request)
    {
        $this->request = $request;

        $this->parametersAsArray = [];

        if ($content = $request->getContent()) {
            $this->parametersAsArray = json_decode($content, true);
        }
        if (array_key_exists('page', $this->parametersAsArray)) {
            $this->paging->setPage($this->parametersAsArray['page']);
        }

        if (array_key_exists('nbElementPerPage', $this->parametersAsArray)) {
            $this->paging->setNbElementPerPage($this->parametersAsArray['nbElementPerPage']);
        }

        if (array_key_exists('order', $this->parametersAsArray)) {
            $this->order = $this->parametersAsArray['order'];
        }

        if (array_key_exists('filter', $this->parametersAsArray)) {
            $this->filter = $this->parametersAsArray['filter'];
        }
    }

    public function addActionColumn()
    {
        if ($this->actions->hasActions()) {
            if (in_array('actions', $this->fields)) {
                $this->columns->get('actions')->updateOptions(['actions' => $this->actions->getActions()]);
            } else {
                $this->addColumn('actions', ActionsColumnType::class, ['actions' => $this->actions->getActions()]);
                $this->fields[] = 'actions';
            }
        }
    }

    public function isCallback(): bool
    {
        return null !== $this->request && ($this->request->isXmlHttpRequest() || $this->request->isMethod('POST'));
    }

    public function useAdapter(string $class, array $options = [])
    {
        //pourrait permettre de dfinir l'adpteur utilisé ensuite'
        $this->classAdapter = $class;
        $this->queryAdapter = $options['query'] ?? null;
    }

    public function getCallbackResponse()
    {
        //pourrait permettre d'avoir différent adapter
        $datas = $this->getData(EntityAdapter::class, [
            'class' => $this->classAdapter,
            'query' => $this->queryAdapter,
            'order' => $this->order,
            'filter' => $this->filter,
        ]);

        $t = [
            'data' => $datas,
            'paging' => $this->paging->getJsonDatas(),
        ];

        return new JsonResponse($t);
    }

}
