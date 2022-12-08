<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Graphs/Type/LineGraph.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\Graphs\Type;

use Symfony\UX\Chartjs\Model\Chart;

class LineGraph extends AbstractGraph
{
    public const SOURCE = 'line';
    public const TYPE_CHAR = Chart::TYPE_LINE;

}
