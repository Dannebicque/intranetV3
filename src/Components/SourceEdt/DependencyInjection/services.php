<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/DependencyInjection/services.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/02/2024 17:37
 */

namespace App\Components\SourceEdt\DependencyInjection;

use App\Components\SourceEdt\Source\EdtCelcat;
use App\Components\SourceEdt\Source\EdtIntranet;
use App\Components\SourceEdt\SourceEdtRegistry;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $configurator): void {
    $services = $configurator->services();
    $services->defaults()
        ->private()
        ->autowire()
        ->autoconfigure(false);

    $services->set(EdtIntranet::class)->tag(SourceEdtRegistry::TAG_SOURCE_EDT);
    $services->set(EdtCelcat::class)->tag(SourceEdtRegistry::TAG_SOURCE_EDT);
};
