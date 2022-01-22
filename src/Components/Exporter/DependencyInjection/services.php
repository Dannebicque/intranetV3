<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Exporter/DependencyInjection/services.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/10/2021 12:26
 */

namespace App\Components\Exporter\DependencyInjection;

use App\Components\Exporter\Type\CsvExporter;
use App\Components\Exporter\Type\ExcelExporter;
use App\Components\Exporter\Type\PdfExporter;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $configurator): void {
    $services = $configurator->services();
    $services->defaults()
        ->private()
        ->autowire(true)
        ->autoconfigure(false);

    $services->set(CsvExporter::class)->tag('da.exporter.typeexporter');
    $services->set(ExcelExporter::class)->tag('da.exporter.typeexporter');
    $services->set(PdfExporter::class)->tag('da.exporter.typeexporter');
};
