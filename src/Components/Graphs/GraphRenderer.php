<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Graphs/GraphRenderer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\Graphs;

use App\Components\Graphs\DTO\Graph;
use Twig\Environment;

class GraphRenderer
{
    public function __construct(protected Environment $twig)
    {
    }

    /**
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\LoaderError
     */
    public function render(Graph $graph): string
    {
        return $this->twig->render($graph->getOption('template'), $this->view($graph));
    }

    private function view(Graph $graph)
    {
    }

}
