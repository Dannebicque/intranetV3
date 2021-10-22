<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Kernel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/10/2021 12:29
 */

namespace App;

use App\Components\Exporter\DependencyInjection\ExporterCompilerPass;
use App\Components\Questionnaire\DependencyInjection\QuestionnaireCompilerPass;
use App\Components\Table\Column\ColumnType;
use App\Components\Table\DependencyInjection\TableCompilerPass;
use App\Components\Table\TableRegistry;
use App\Components\Table\TableType;
use App\Components\Widget\DependencyInjection\WidgetCompilerPass;
use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symfony\Component\HttpKernel\Kernel as BaseKernel;
use Symfony\Component\Routing\Loader\Configurator\RoutingConfigurator;
use function dirname;

class Kernel extends BaseKernel
{
    use MicroKernelTrait;

    protected function build(ContainerBuilder $container): void
    {
        $container->addCompilerPass(new TableCompilerPass());
        $container->addCompilerPass(new WidgetCompilerPass());
        $container->addCompilerPass(new QuestionnaireCompilerPass());
        $container->addCompilerPass(new ExporterCompilerPass());
        $container->registerForAutoconfiguration(TableType::class)->addTag(TableRegistry::TAG_TABLE_TYPE);
        $container->registerForAutoconfiguration(ColumnType::class)->addTag(TableRegistry::TAG_COLUMN_TYPE);
    }

    protected function configureContainer(ContainerConfigurator $container): void
    {
        $container->import('../config/{packages}/*.yaml');
        $container->import('../config/{packages}/' . $this->environment . '/*.yaml');

        if (is_file(dirname(__DIR__) . '/config/services.yaml')) {
            $container->import('../config/services.yaml');
            $container->import('../config/{services}_' . $this->environment . '.yaml');
        } else {
            $container->import('../config/{services}.php');
        }

        //mon service pour Table
        $container->import('../src/Components/Table/DependencyInjection/{services}.php');
        $container->import('../src/Components/Widget/DependencyInjection/{services}.php');
        $container->import('../src/Components/Questionnaire/DependencyInjection/{services}.php');
        $container->import('../src/Components/Exporter/DependencyInjection/{services}.php');
    }

    protected function configureRoutes(RoutingConfigurator $routes): void
    {
        $routes->import('../config/{routes}/' . $this->environment . '/*.yaml');
        $routes->import('../config/{routes}/*.yaml');

        if (is_file(dirname(__DIR__) . '/config/routes.yaml')) {
            $routes->import('../config/routes.yaml');
        } else {
            $routes->import('../config/{routes}.php');
        }
    }
}
