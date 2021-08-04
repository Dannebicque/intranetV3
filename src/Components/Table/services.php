<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/services.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/08/2021 10:55
 */

namespace App\Components\Table;

use App\Components\Table\Actions\ButtonAction;
use App\Components\Table\Actions\DeleteAction;
use App\Components\Table\Actions\DuplicateAction;
use App\Components\Table\Actions\EditAction;
use App\Components\Table\Actions\ShowAction;
use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\ActionsColumnType;
use App\Components\Table\Column\BadgeColumnType;
use App\Components\Table\Column\BooleanColumnType;
use App\Components\Table\Column\DateColumnType;
use App\Components\Table\Column\PropertyColumnType;
use App\Components\Table\Filters\FilterRange;
use App\Components\Table\Filters\FilterSearch;
use App\Components\Table\Filters\FilterSelect;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function(ContainerConfigurator $configurator): void {

    $services = $configurator->services();
    $services->defaults()
        ->private()
        ->autowire(true)
        ->autoconfigure(false);

    $services->set(EntityAdapter::class)->tag('da.table.adapter');

    $services->set(PropertyColumnType::class)->tag('da.table.columntypes');
    $services->set(ActionsColumnType::class)->tag('da.table.columntypes');
    $services->set(BadgeColumnType::class)->tag('da.table.columntypes');
    $services->set(BooleanColumnType::class)->tag('da.table.columntypes');
    $services->set(DateColumnType::class)->tag('da.table.columntypes');

    $services->set(FilterRange::class)->tag('da.table.filters');
    $services->set(FilterSearch::class)->tag('da.table.filters');
    $services->set(FilterSelect::class)->tag('da.table.filters');

    $services->set(ShowAction::class)->tag('da.table.actions');
    $services->set(EditAction::class)->tag('da.table.actions');
    $services->set(DuplicateAction::class)->tag('da.table.actions');
    $services->set(DeleteAction::class)->tag('da.table.actions');
    $services->set(ButtonAction::class)->tag('da.table.actions');
};
