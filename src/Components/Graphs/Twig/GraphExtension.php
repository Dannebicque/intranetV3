<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Graphs/Twig/GraphExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\Graphs\Twig;

use App\Components\Graphs\GraphRenderer;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class GraphExtension extends AbstractExtension
{
    /**
     * DataTableTwigExtension constructor.
     */
    public function __construct(protected GraphRenderer $renderer)
    {
    }

    /**
     * {@inheritdoc}
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('graph_render', [$this->renderer, 'render'], [
                'is_safe' => ['html'],
            ]),
        ];
    }
}
