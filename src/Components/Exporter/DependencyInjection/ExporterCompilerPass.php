<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Exporter/DependencyInjection/ExporterCompilerPass.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/10/2021 14:00
 */

namespace App\Components\Exporter\DependencyInjection;

use App\Components\Exporter\ExporterRegistry;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Reference;

class ExporterCompilerPass implements CompilerPassInterface
{
    /**
     * You can modify the container here before it is dumped to PHP code.
     */
    public function process(ContainerBuilder $container): void
    {
        $registry = $container->getDefinition(ExporterRegistry::class);
        $this->addToRegistry($container, $registry, ExporterRegistry::TAG_TYPE_EXPORTER, 'registerTypeExporter');
    }

    private function addToRegistry(ContainerBuilder $container, Definition $registry, string $tag, string $method): void
    {
        $taggedServices = $container->findTaggedServiceIds($tag);
        foreach ($taggedServices as $id => $tags) {
            $registry->addMethodCall($method, [$id, new Reference($id)]);
        }
    }
}
