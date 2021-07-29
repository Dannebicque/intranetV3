<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/services.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 18:38
 */

namespace App\Components\Table;

use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\BadgeColumnType;
use App\Components\Table\Column\PropertyColumnType;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function(ContainerConfigurator $configurator): void {

    $services = $configurator->services();
    $services->defaults()
        ->private()
        ->autowire(true)
        ->autoconfigure(false);

    $services->set(EntityAdapter::class)
        ->tag('da.table.adapter');

    $services->set(PropertyColumnType::class)->tag('da.table.columntypes');
    $services->set(BadgeColumnType::class)->tag('da.table.columntypes');
};
