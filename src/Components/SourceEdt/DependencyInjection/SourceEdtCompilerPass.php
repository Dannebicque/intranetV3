<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/DependencyInjection/SourceEdtCompilerPass.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/09/2022 19:18
 */

namespace App\Components\SourceEdt\DependencyInjection;

use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Components\SourceEdt\SourceEdtRegistry;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Reference;

class SourceEdtCompilerPass implements CompilerPassInterface
{
    public function process(ContainerBuilder $container): void
    {
        $registry = $container->getDefinition(SourceEdtRegistry::class);
        $this->addToRegistry($container, $registry, SourceEdtRegistry::TAG_SOURCE_EDT, 'registerSourceEdt');
    }

    private function addToRegistry(ContainerBuilder $container, Definition $registry, string $tag, string $method): void
    {
        $taggedServices = $container->findTaggedServiceIds($tag);

        foreach ($taggedServices as $id => $tags) {
            $registry->addMethodCall($method, [$id, new Reference($id)]);
        }
    }
}
