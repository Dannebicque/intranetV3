<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Graphs/Type/AbstractGraph.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\Graphs\Type;

use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;

abstract class AbstractGraph
{
    public function __construct(protected ChartBuilderInterface $chartBuilder)
    {
    }
}
