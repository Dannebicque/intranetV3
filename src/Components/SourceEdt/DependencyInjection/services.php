<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/DependencyInjection/services.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\SourceEdt\DependencyInjection;

use App\Components\SourceEdt\Source\EdtAde;
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
    $services->set(EdtAde::class)->tag(SourceEdtRegistry::TAG_SOURCE_EDT);
};
