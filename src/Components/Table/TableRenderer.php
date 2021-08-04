<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/TableRenderer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:01
 */

namespace App\Components\Table;

use Twig\Environment;

class TableRenderer
{
    protected Environment $twig;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    public function render(Table $table): string
    {
        return $this->twig->render($table->getOption('template'), $this->view($table));
    }

    protected function view(Table $table): array
    {
        $options = $table->getOptions();

        $vars = [];
        $vars['filters'] = $table->getFilters();
        $vars['template'] = $options['template'];
        // $vars['paging'] = $this->viewPaging($table->getPaging());

        $vars['columns'] = array_map(function(Column $c) {
            return $this->columnView($c);
        }, $table->getColumns());
        $vars['attr'] = [
            'data-base_url' => $options['base_url'],
            'data-options' => json_encode($this->getJsOptions($table)),
        ];
        $vars['table_attr'] = [
            'class' => $options['class'] . ' datable',
        ];

        $vars['paging_attr'] = [
            'id' => $table->getPaging()->getName(),//todo: avoir un name unique pour le tableau
            'lengths' => $table->getPaging()->getLengths(),
            'length' => $table->getPaging()->getLength(),
        ];

        return $vars;
    }

//    public function renderPaging(Paging $paging): string
//    {
//        return $this->twig->render($paging->getOption('template'), $this->viewPaging($paging));
//    }

    private function columnView(Column $column)
    {
        $options = $column->getOptions();

        $vars = [];
//        $vars['attr'] = [
//            'class' => $options['class'],
//        ];

        $vars['name'] = $column->getName();
        $vars['label'] = $options['label'];
        $vars['sortable'] = $column->isSortable();
        $vars['order'] = strtolower($column->getDefaultOrder());
        $vars['masquable'] = $options['masquable'];
        $vars['translation_domain'] = $options['translation_domain'];
        $vars['attr'] = [
            'id' => $this->generateId($column->getName()), //générer une clé aléatoire...
            'data-name' => $column->getName(),
        ];

        return $vars;
    }

    private function generateId(string $name)
    {
        return $name;
    }

    private function getJsOptions(Table $table)
    {
        $options = $table->getOptions();
        $paging = $table->getPaging();
        // js options
        $jsOptions = [];

        $jsOptions['pageLength'] = $paging->getOption('page_length');
        $jsOptions['pageActive'] = $paging->getNumActivePage();

        // columns options
        $jsOptions['columns'] = [];

        foreach ($table->getColumns() as $column) {
            $jsOptions['columns'][] = [
                'name' => $column->getName(),
                'id' => $this->generateId($column->getName()), //clé...
                'sortable' => $column->getOption('sortable'),
                'order' => false !== $column->isSortable() ? strtolower($column->getDefaultOrder()) : false,
            ];
        }

        return $jsOptions;
    }

    public function renderFilters(Filters $filters): string
    {
        return $this->twig->render($filters->getOption('template'), $this->viewFilters($filters));
    }

    public function renderFilter(Filter $filter): string
    {
        return $this->twig->render($filter->getOption('template'), $this->viewFilter($filter));
    }

    private function viewFilters(Filters $filters)
    {
        $options = $filters->getOptions();

        $vars = [];
        $vars['filters'] = $filters->getFilters();
        $vars['add_button'] = true; //todo: a récupérer
        $vars['add_button_url'] = 'http://'; //todo: a récupérer
        $vars['export_button'] = true; //todo: a récupérer
        $vars['export_options'] = [
            'xlsx' => ['url' => '...', 'label' => 'Excel'],
            'csv' => ['url' => '...', 'label' => 'CSV'],
            'pdf' => ['url' => '...', 'label' => 'PDF']
        ];

        return $vars;
    }

    private function viewPaging(Paging $paging)
    {
        $options = $paging->getOptions();
        $vars = [];
        $vars['firstPage'] = $paging->isFirstPage();
        $vars['lastPage'] = $paging->isLastPage();
        $vars['pageActive'] = $paging->getNumActivePage();
        $vars['nbPages'] = $paging->getNbPages();
        $vars['name'] = $paging->getName();

        return $vars;
    }
}
