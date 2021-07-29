<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/DependencyInjection/TableCompilerPass.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 15:32
 */

namespace App\Components\Table\DependencyInjection;

use App\Components\Table\TableRegistry;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Reference;

class TableCompilerPass implements CompilerPassInterface
{
    /**
     * You can modify the container here before it is dumped to PHP code.
     */
    public function process(ContainerBuilder $container)
    {
        $registry = $container->getDefinition(TableRegistry::class);
//        $this->addToRegistry($container, $registry, TableRegistry::TAG_TYPE, 'registerType');
        $this->addToRegistry($container, $registry, TableRegistry::TAG_ADAPTER, 'registerAdapter');
        $this->addToRegistry($container, $registry, TableRegistry::TAG_COLUMN_TYPES, 'registerColumnType');

//        $registry = $container->getDefinition(WidgetRegistry::class);
//        $this->addToRegistry($container, $registry, WidgetRegistry::TAG_TYPE, 'registerType');
//
//        $registry = $container->getDefinition(MenuRegistry::class);
//        $this->addToRegistry($container, $registry, MenuRegistry::TAG_TYPE, 'registerType');
//        $this->addToRegistry($container, $registry, MenuRegistry::TAG_VISITOR, 'registerVisitor');
    }

    private function addToRegistry(ContainerBuilder $container, Definition $registry, string $tag, string $method)
    {
        $taggedServices = $container->findTaggedServiceIds($tag);

        foreach ($taggedServices as $id => $tags) {
            $registry->addMethodCall($method, [$id, new Reference($id)]);
        }
    }
}
