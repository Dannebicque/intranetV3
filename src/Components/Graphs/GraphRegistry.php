<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Graphs/GraphRegistry.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\Graphs;

use App\Components\Graphs\Exception\TypeGraphNotFound;
use App\Components\Graphs\Type\Abstractgraph;

class GraphRegistry
{
    final public const TAG_TYPE_GRAPH = 'da.type.graph';

    private array $typeGraph = [];

    public function registerTypeGraph(string $name, AbstractGraph $abstractgraph): void
    {
        $this->typeGraph[$abstractgraph::SOURCE] = $abstractgraph;
    }

    public function getTypeGraph(string $name): mixed
    {
        if (!array_key_exists($name, $this->typeGraph)) {
            throw new TypeGraphNotFound();
        }

        return $this->typeGraph[$name];
    }

    public function getTypesGraph(): array
    {
        return $this->typeGraph;
    }
}
