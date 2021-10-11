<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/DependencyInjection/services.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/10/2021 11:29
 */

namespace App\Components\Widget\DependencyInjection;

use App\Components\Widget\Type\AddLinkType;
use App\Components\Widget\Type\ButtonDropdownType;
use App\Components\Widget\Type\ButtonGroupType;
use App\Components\Widget\Type\ButtonType;
use App\Components\Widget\Type\LinkType;
use App\Components\Widget\Type\RowDeleteLinkType;
use App\Components\Widget\Type\RowDuplicateLinkType;
use App\Components\Widget\Type\RowEditLinkType;
use App\Components\Widget\Type\RowLinkType;
use App\Components\Widget\Type\RowModalLinkType;
use App\Components\Widget\Type\RowShowLinkType;
use App\Components\Widget\Type\SelectChangeType;
use App\Components\Widget\Type\WidgetType;
use App\Components\Widget\WidgetRegistry;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function(ContainerConfigurator $configurator): void {
    $services = $configurator->services();
    $services->defaults()
        ->private()
        ->autowire(true)
        ->autoconfigure(false);

    $services->set(AddLinkType::class)->tag(WidgetRegistry::TAG_TYPE);
    $services->set(ButtonDropdownType::class)->tag(WidgetRegistry::TAG_TYPE);
    $services->set(ButtonGroupType::class)->tag(WidgetRegistry::TAG_TYPE);
    $services->set(ButtonType::class)->tag(WidgetRegistry::TAG_TYPE);
    $services->set(LinkType::class)->tag(WidgetRegistry::TAG_TYPE);
    $services->set(RowDeleteLinkType::class)->tag(WidgetRegistry::TAG_TYPE);
    $services->set(RowEditLinkType::class)->tag(WidgetRegistry::TAG_TYPE);
    $services->set(RowLinkType::class)->tag(WidgetRegistry::TAG_TYPE);
    $services->set(RowModalLinkType::class)->tag(WidgetRegistry::TAG_TYPE);
    $services->set(RowShowLinkType::class)->tag(WidgetRegistry::TAG_TYPE);
    $services->set(RowDuplicateLinkType::class)->tag(WidgetRegistry::TAG_TYPE);
    $services->set(WidgetType::class)->tag(WidgetRegistry::TAG_TYPE);
    $services->set(SelectChangeType::class)->tag(WidgetRegistry::TAG_TYPE);
    //todo: ajotuer les manquants et reprendre Collection...
};
