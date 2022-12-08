<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Graphs/DependencyInjection/services.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\Graphs\DependencyInjection;

use App\Components\Graphs\GraphRegistry;
use App\Components\Graphs\Type\BarGraph;
use App\Components\Graphs\Type\LineGraph;
use App\Components\Graphs\Type\PieGraph;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $configurator): void {
    $services = $configurator->services();
    $services->defaults()
        ->private()
        ->autowire()
        ->autoconfigure(false);

    $services->set('app.graph_registry', GraphRegistry::class)
        ->autowire();
    $services->alias(GraphRegistry::class, 'app.graph_registry');


    $services->set(BarGraph::class)->tag(GraphRegistry::TAG_TYPE_GRAPH);
    $services->set(LineGraph::class)->tag(GraphRegistry::TAG_TYPE_GRAPH);
    $services->set(PieGraph::class)->tag(GraphRegistry::TAG_TYPE_GRAPH);
};
