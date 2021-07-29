<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Table.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 18:38
 */

namespace App\Components\Table;

use App\Components\Table\Adapter\AbstractAdapter;
use App\Components\Table\Adapter\AdapterInterface;
use App\Components\Table\DTO\Row;
use App\Components\Table\DTO\TableResult;
use App\Components\Table\Exceptions\ColumnWithSameNameExistException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\OptionsResolver\OptionsResolver;

class Table
{
    public const DEFAULT_TEMPLATE = 'components/table/table.html.twig';

    protected Filters $filters;
    protected Columns $columns;
    protected Paging $paging;
    protected array $fields = [];

    protected ?string $name;
    protected ?string $base_url;

    protected array $options = [];

    private TableRegistry $tableRegistry;
    private AbstractAdapter $adapter;

    public function __construct(TableRegistry $tableRegistry)
    {
        $this->tableRegistry = $tableRegistry;
    }

    public function createTable(string $name, array $options = [])
    {
        $this->name = $name;

        $this->columns = new Columns();
        $this->filters = new Filters();
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

    public function addActions(array $actions = [])
    {
        foreach ($actions as $action) {
            //créer les boutons, ajouter dans une colonne spéciale
        }

        return $this;
    }

    public function addFilter(
        string $name,
        string $type_filter = Filter::SEARCH,
        array $columns = [],
        array $options = []
    ) {
        $filter = new Filter($name, $type_filter, $columns, $options);
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
        $this->getPaging()->setResult($datas);//mise à jour de paging...

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
        $parametersAsArray = [];
        if ($content = $request->getContent()) {
            $parametersAsArray = json_decode($content, true);
        }

        if (array_key_exists('page', $parametersAsArray)) {
            $this->paging->setPage($parametersAsArray['page']);
        }

        if (array_key_exists('nbElementPerPage', $parametersAsArray)) {
            $this->paging->setNbElementPerPage($parametersAsArray['nbElementPerPage']);
        }

        //ordre, filtre...
    }
}
